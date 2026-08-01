"use client";
import {Check} from 'lucide-react'
import {Avatar, Badge, Box, Card, Checkbox, Flex, Stack, Text} from '@sanity/ui'

import type {PopularPost} from '../lib/types'

interface BulkPopularItemProps {
  post: PopularPost
  checked: boolean
  onToggle: (id: string) => void
}

export default function BulkPopularItem({post, checked, onToggle}: BulkPopularItemProps) {
  return (
    <Card
      padding={3}
      radius={3}
      shadow={1}
      tone={checked ? 'primary' : 'default'}
      style={{
        cursor: 'pointer',
        transition: 'all .15s ease',
      }}
      onClick={() => onToggle(post._id)}
    >
      <Flex align="center" gap={3}>
        <Checkbox
          checked={checked}
          onClick={(e) => e.stopPropagation()}
          onChange={() => onToggle(post._id)}
        />

        <Avatar size={3} src={post.coverImage} initials={post.title.charAt(0)} />

        <Box flex={1}>
          <Stack space={2}>
            <Flex align="center" gap={2}>
              <Text weight="semibold">{post.title}</Text>

              {checked && (
                <Badge tone="primary" mode="outline">
                  Popular
                </Badge>
              )}
            </Flex>

            <Flex gap={2} align="center">
              {post.category?.title && <Badge tone="positive">{post.category.title}</Badge>}

              {post.publishedAt && (
                <Text size={1} muted>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </Text>
              )}
            </Flex>
          </Stack>
        </Box>

        {checked && (
          <Check
            style={{
              color: '#2276FC',
              fontSize: 22,
            }}
          />
        )}
      </Flex>
    </Card>
  )
}
