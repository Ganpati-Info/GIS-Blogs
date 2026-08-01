'use client'

import {useCallback, useEffect, useMemo, useState} from 'react'
import {useClient} from 'sanity'

import {BULK_POPULAR_QUERY} from '../lib/queries'
import type {PopularPost} from '../lib/types'

import BulkPopularSearch from './BulkPopularSearch'
import BulkPopularList from './BulkPopularList'
import BulkPopularFooter from './BulkPopularFooter'

export default function BulkPopularTool() {
  const client = useClient({apiVersion: '2025-07-01'})

  const [posts, setPosts] = useState<PopularPost[]>([])
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [initialSelectedIds, setInitialSelectedIds] = useState<Set<string>>(new Set())

  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true)

      const data: PopularPost[] = await client.fetch(BULK_POPULAR_QUERY)

      setPosts(data)

      const selected = new Set(data.filter((post) => post.isPopular).map((post) => post._id))

      setSelectedIds(selected)
      setInitialSelectedIds(new Set(selected))
    } catch (error) {
      console.error('Failed to load posts:', error)
    } finally {
      setLoading(false)
    }
  }, [client])

  useEffect(() => {
    loadPosts()
  }, [loadPosts])

  const filteredPosts = useMemo(() => {
    if (!search.trim()) return posts

    const keyword = search.toLowerCase()

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(keyword) ||
        post.category?.title?.toLowerCase().includes(keyword),
    )
  }, [posts, search])

  const togglePost = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)

      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }

      return next
    })
  }

  const hasChanges = useMemo(() => {
    if (selectedIds.size !== initialSelectedIds.size) return true

    for (const id of selectedIds) {
      if (!initialSelectedIds.has(id)) {
        return true
      }
    }

    return false
  }, [selectedIds, initialSelectedIds])

  const resetChanges = () => {
    setSelectedIds(new Set(initialSelectedIds))
  }

  const saveChanges = async () => {
    try {
      setSaving(true)

      let transaction = client.transaction()

      posts.forEach((post) => {
        transaction = transaction.patch(post._id, {
          set: {
            isPopular: selectedIds.has(post._id),
          },
        })
      })

      await transaction.commit()

      await loadPosts()

      console.log('Popular posts updated successfully')
    } catch (error) {
      console.error('Failed to save changes:', error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <BulkPopularSearch
        value={search}
        // selectedCount={selectedIds.size}
        // totalCount={posts.length}
        onChange={setSearch}
      />

      <BulkPopularList
        loading={loading}
        posts={filteredPosts}
        selectedIds={selectedIds}
        onToggle={togglePost}
      />

      <BulkPopularFooter
        selectedCount={selectedIds.size}
        totalCount={posts.length}
        saving={saving}
        hasChanges={hasChanges}
        onReset={resetChanges}
        onSave={saveChanges}
      />
    </>
  )
}
