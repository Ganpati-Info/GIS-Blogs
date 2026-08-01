"use client";
import {useCallback, useState} from 'react'
import {Box, Button, Card, Dialog, Flex, Stack, Text, useToast} from '@sanity/ui'
import {Copy, Loader2, Trash2} from 'lucide-react'
import {useClient, useFormValue} from 'sanity'
import {useRouter} from 'sanity/router'

const DuplicateIcon = () => <Copy size={16} />
const DeleteIcon = () => <Trash2 size={16} />
const LoadingIcon = () => <Loader2 size={16} />

export default function PostActions() {
  const client = useClient({
    apiVersion: '2025-07-01',
  })

  const router = useRouter()
  const toast = useToast()

  const documentId = useFormValue(['_id']) as string | undefined
  const title = useFormValue(['title']) as string | undefined

  const isEmptyPost = !title?.trim()

  const [duplicating, setDuplicating] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  const getPublishedId = useCallback(() => {
    if (!documentId) {
      return null
    }

    return documentId.replace(/^drafts\./, '')
  }, [documentId])

  const handleDuplicate = useCallback(async () => {
    const publishedId = getPublishedId()

    if (!publishedId || duplicating) {
      return
    }

    try {
      setDuplicating(true)

      const source = await client.fetch<Record<string, unknown> | null>(
        `*[
          _type == "post" &&
          (
            _id == $publishedId ||
            _id == $draftId
          )
        ]
        | order(_updatedAt desc)[0]`,
        {
          publishedId,
          draftId: `drafts.${publishedId}`,
        },
        {
          perspective: 'raw',
        },
      )

      if (!source) {
        throw new Error('Post could not be found.')
      }

      const {_id, _rev, _createdAt, _updatedAt, _originalId, slug, featured, ...content} = source

      const newId = crypto.randomUUID()

      await client.create({
        ...content,

        _id: `drafts.${newId}`,
        _type: 'post',

        title: typeof content.title === 'string' ? `${content.title} Copy` : 'Untitled Copy',

        slug: undefined,

        featured: false,
      })

      toast.push({
        status: 'success',
        title: 'Post duplicated',
        description: 'A new draft copy has been created.',
      })

      router.navigate({
        intent: 'edit',
        params: {
          id: newId,
          type: 'post',
        },
      })
    } catch (error) {
      console.error('Failed to duplicate post:', error)

      toast.push({
        status: 'error',
        title: 'Could not duplicate post',
        description: error instanceof Error ? error.message : 'An unexpected error occurred.',
      })
    } finally {
      setDuplicating(false)
    }
  }, [client, duplicating, getPublishedId, router, toast])

  const handleDelete = useCallback(async () => {
    const publishedId = getPublishedId()

    if (!publishedId || deleting) {
      return
    }

    try {
      setDeleting(true)

      const draftId = `drafts.${publishedId}`

      const existingIds = await client.fetch<string[]>(
        `*[
          _id == $publishedId ||
          _id == $draftId
        ]._id`,
        {
          publishedId,
          draftId,
        },
        {
          perspective: 'raw',
        },
      )

      const transaction = client.transaction()

      for (const id of existingIds) {
        transaction.delete(id)
      }

      if (existingIds.length > 0) {
        await transaction.commit()
      }

      setDeleteDialogOpen(false)

      toast.push({
        status: 'success',
        title: 'Post deleted',
      })

      router.navigate({
        intent: 'edit',
        params: {
          type: 'post',
        },
      })
    } catch (error) {
      console.error('Failed to delete post:', error)

      toast.push({
        status: 'error',
        title: 'Could not delete post',
        description: error instanceof Error ? error.message : 'An unexpected error occurred.',
      })
    } finally {
      setDeleting(false)
    }
  }, [client, deleting, getPublishedId, router, toast])

  if (!documentId) {
    return null
  }

  return (
    <>
      <Card
        padding={3}
        radius={2}
        border
        style={{
          marginBottom: 16,
        }}
      >
        <Flex align="center" justify="space-between" gap={3} wrap="wrap">
          <Box>
            <Text size={1} weight="medium">
              Post Actions
            </Text>

            <Box marginTop={2}>
              <Text size={1} muted>
                Manage this post.
              </Text>
            </Box>
          </Box>

          <Flex align="center" gap={2}>
            <Button
              type="button"
              text={duplicating ? 'Duplicating...' : 'Duplicate'}
              icon={duplicating ? LoadingIcon : DuplicateIcon}
              mode="ghost"
              disabled={isEmptyPost || duplicating || deleting}
              onClick={() => {
                void handleDuplicate()
              }}
            />

            <Button
              type="button"
              text="Delete"
              icon={DeleteIcon}
              tone="critical"
              mode="ghost"
              disabled={isEmptyPost || duplicating || deleting}
              onClick={() => {
                setDeleteDialogOpen(true)
              }}
            />
          </Flex>
        </Flex>
      </Card>

      {deleteDialogOpen && (
        <Dialog
          id="delete-post-dialog"
          header="Delete post"
          width={1}
          onClose={() => {
            if (!deleting) {
              setDeleteDialogOpen(false)
            }
          }}
          footer={
            <Flex justify="flex-end" gap={2}>
              <Button
                type="button"
                text="Cancel"
                mode="ghost"
                disabled={deleting}
                onClick={() => {
                  setDeleteDialogOpen(false)
                }}
              />

              <Button
                type="button"
                text={deleting ? 'Deleting...' : 'Delete Post'}
                icon={deleting ? LoadingIcon : DeleteIcon}
                tone="critical"
                disabled={deleting}
                onClick={() => {
                  void handleDelete()
                }}
              />
            </Flex>
          }
        >
          <Box padding={4}>
            <Stack space={4}>
              <Text>Delete this post permanently?</Text>

              <Text size={1} muted>
                Both the published document and its draft will be deleted.
              </Text>
            </Stack>
          </Box>
        </Dialog>
      )}
    </>
  )
}
