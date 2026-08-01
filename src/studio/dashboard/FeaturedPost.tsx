"use client";
import {Badge, Box, Button, Card, Flex, Grid, Heading, Stack, Text} from '@sanity/ui'
import {CalendarDays, Edit, ExternalLink, Star} from 'lucide-react'

import type {DashboardPost} from './lib/types'

interface FeaturedPostProps {
  post: DashboardPost | null
}

export default function FeaturedPost({post}: FeaturedPostProps) {
  if (!post) {
    return (
      <Card padding={0} radius={3} shadow={1} border>
        <Stack space={5}>
          <Flex align="center" gap={3}>
            <Star size={18} />
            <Heading size={2}>Featured Post</Heading>
          </Flex>

          <Card padding={6} radius={2} border tone="transparent">
            <Flex align="center" justify="center">
              <Stack space={4}>
                <Flex justify="center">
                  <Star size={40} color="#d6a400" />
                </Flex>

                <Heading size={1}>No Featured Post</Heading>

                <Text align="center" muted>
                  Select a featured article to highlight it here.
                </Text>
              </Stack>
            </Flex>
          </Card>
        </Stack>
      </Card>
    )
  }

  return (
    <Card padding={4} radius={3} shadow={1} border>
      <Stack space={5}>
        <Flex justify="space-between" align="center">
          <Flex align="center" gap={3}>
            <Star size={18} fill="#facc15" color="#facc15" />
            <Heading size={2}>Featured Post</Heading>
          </Flex>

          <Flex gap={2}>
            <Button
              as="a"
              href={`/structure/post;${post.id}`}
              mode="ghost"
              icon={<Edit size={16} />}
              text="Edit"
            />

            <Button
              as="a"
              href={`/blog/${post.slug}`}
              target="_blank"
              rel="noreferrer"
              mode="ghost"
              icon={<ExternalLink size={16} />}
              text="View"
            />
          </Flex>
        </Flex>

        <Grid columns={[1, 1, 2]} gap={5}>
          <Card radius={2} overflow="hidden" border>
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.title}
                style={{
                  width: '100%',
                  height: 260,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            ) : (
              <Flex align="center" justify="center" style={{height: 260}}>
                <Text muted>No Cover Image</Text>
              </Flex>
            )}
          </Card>

          <Stack space={4}>
            <Badge tone="primary">Featured</Badge>

            <Heading size={3}>{post.title}</Heading>

            {post.excerpt && <Text muted>{post.excerpt}</Text>}

            <Box flex={1} />

            <Flex align="center" gap={2}>
              <CalendarDays size={16} />

              <Text size={1} muted>
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString(undefined, {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })
                  : 'Unpublished'}
              </Text>
            </Flex>
          </Stack>
        </Grid>
      </Stack>
    </Card>
  )
}
