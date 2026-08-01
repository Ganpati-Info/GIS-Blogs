"use client";
import {Card, Flex, Spinner, Stack, Text} from '@sanity/ui'

import type {PopularPost} from '../lib/types'
import BulkPopularItem from './BulkPopularItem'

interface BulkPopularListProps {
  loading: boolean
  posts: PopularPost[]
  selectedIds: Set<string>
  onToggle: (id: string) => void
}

export default function BulkPopularList({
  loading,
  posts,
  selectedIds,
  onToggle,
}: BulkPopularListProps) {
  if (loading) {
    return (
      <Card padding={6} radius={3} shadow={1}>
        <Flex align="center" justify="center" direction="column" gap={4}>
          <Spinner muted />

          <Text muted>Loading posts...</Text>
        </Flex>
      </Card>
    )
  }

  if (posts.length === 0) {
    return (
      <Card padding={6} radius={3} shadow={1}>
        <Flex align="center" justify="center" direction="column" gap={3}>
          <Text size={3} weight="semibold">
            No posts found
          </Text>

          <Text muted size={1}>
            Try another search keyword.
          </Text>
        </Flex>
      </Card>
    )
  }

  return (
    <Stack space={3}>
      {posts.map((post) => (
        <BulkPopularItem
          key={post._id}
          post={post}
          checked={selectedIds.has(post._id)}
          onToggle={onToggle}
        />
      ))}
    </Stack>
  )
}
