"use client";
import {Badge, Box, Button, Card, Flex, Heading, Stack, Text} from '@sanity/ui'

import {CalendarDays, ExternalLink, Flame, Pencil, Star} from 'lucide-react'

import type {DashboardPost} from './lib/types'

interface PopularPostsProps {
  posts: DashboardPost[]
}

const EditIcon = () => <Pencil size={16} />
const ViewIcon = () => <ExternalLink size={16} />

const CARD_HEIGHT = 520

export default function PopularPosts({posts}: PopularPostsProps) {
  return (
    <Card
      padding={0}
      radius={3}
      shadow={1}
      border
      style={{
        height: CARD_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Box
        padding={4}
        style={{
          flexShrink: 0,
          borderBottom: '1px solid var(--card-border-color)',
        }}
      >
        <Flex justify="space-between" align="center">
          <Flex align="center" gap={3}>
            <Flame size={18} />

            <Heading size={2}>Popular Posts</Heading>
          </Flex>

          <Text muted size={1}>
            {posts.length} {posts.length === 1 ? 'Post' : 'Posts'}
          </Text>
        </Flex>
      </Box>

      <Box
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        {posts.length === 0 ? (
          <Flex
            direction="column"
            align="center"
            justify="center"
            style={{
              height: '100%',
              minHeight: 0,
              textAlign: 'center',
              padding: 24,
            }}
          >
            <Flame size={42} color="#9ca3af" />

            <Box marginTop={4}>
              <Heading size={1}>No Popular Posts</Heading>
            </Box>

            <Box marginTop={2}>
              <Text muted>
                Select posts from <strong>Bulk Popular</strong>.
              </Text>
            </Box>
          </Flex>
        ) : (
          <Stack space={1}>
            {posts.map((post) => (
              <Card key={post.id} padding={4} borderTop tone="transparent">
                <Flex justify="space-between" align="center" gap={4}>
                  <Flex
                    gap={4}
                    style={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <Card
                      radius={2}
                      overflow="hidden"
                      border
                      style={{
                        width: 120,
                        height: 100,
                        flexShrink: 0,
                      }}
                    >
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      ) : (
                        <Flex
                          align="center"
                          justify="center"
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        >
                          <Text size={1} muted>
                            No Image
                          </Text>
                        </Flex>
                      )}
                    </Card>

                    <Stack
                      space={3}
                      style={{
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <Heading
                        size={1}
                        style={{
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {post.title}
                      </Heading>

                      {post.excerpt && (
                        <Text
                          size={1}
                          muted
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            paddingTop: 8,
                            overflow: 'hidden',
                          }}
                        >
                          {post.excerpt}
                        </Text>
                      )}

                      <Flex align="center" gap={2} wrap="wrap">
                        <Badge tone="primary">
                          <Flex align="center" gap={1}>
                            <Flame size={11} />
                            <span>Popular</span>
                          </Flex>
                        </Badge>

                        {post.featured && (
                          <Badge tone="positive">
                            <Flex align="center" gap={1}>
                              <Star size={11} />
                              <span>Featured</span>
                            </Flex>
                          </Badge>
                        )}

                        <Flex align="center" gap={2}>
                          <CalendarDays size={14} />

                          <Text size={1} muted>
                            {new Date(post.updatedAt).toLocaleDateString()}
                          </Text>
                        </Flex>
                      </Flex>
                    </Stack>
                  </Flex>

                  <Flex
                    gap={2}
                    style={{
                      flexShrink: 0,
                    }}
                  >
                    <Button
                      as="a"
                      href={`/structure/post;${post.id}`}
                      mode="ghost"
                      icon={EditIcon}
                      aria-label={`Edit ${post.title}`}
                    />

                    {post.slug && (
                      <Button
                        as="a"
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        mode="ghost"
                        icon={ViewIcon}
                        aria-label={`View ${post.title}`}
                      />
                    )}
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Stack>
        )}
      </Box>
    </Card>
  )
}
