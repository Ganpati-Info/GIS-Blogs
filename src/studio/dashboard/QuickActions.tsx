"use client";
import {Box, Card, Flex, Grid, Heading, Text} from '@sanity/ui'
import {ChevronRight, FilePlus2, Files, FolderTree, Image, Settings, Users} from 'lucide-react'

interface Action {
  title: string
  description: string
  href: string
  icon: React.ElementType
}

const actions: Action[] = [
  {
    title: 'New Post',
    description: 'Create a new blog post',
    href: '/structure/post',
    icon: FilePlus2,
  },
  {
    title: 'All Posts',
    description: 'Manage published & drafts',
    href: '/structure/post',
    icon: Files,
  },
  {
    title: 'Categories',
    description: 'Manage blog categories',
    href: '/structure/category',
    icon: FolderTree,
  },
  {
    title: 'Authors',
    description: 'Manage authors',
    href: '/structure/author',
    icon: Users,
  },
  // {
  //   title: 'Media',
  //   description: 'Browse uploaded assets',
  //   href: '/media',
  //   icon: Image,
  // },
  // {
  //   title: 'Settings',
  //   description: 'CMS configuration',
  //   href: '/settings',
  //   icon: Settings,
  // },
]

export default function QuickActions() {
  return (
    <Card padding={0} radius={3} shadow={1} border>
      <Box padding={4}>
        <Heading size={2}>Quick Actions</Heading>

        <Box marginTop={2}>
          <Text muted size={1}>
            Frequently used shortcuts
          </Text>
        </Box>
      </Box>

      <Grid columns={[1, 1, 2]} gap={3} padding={4}>
        {actions.map((action) => {
          const Icon = action.icon

          return (
            <Card
              key={action.title}
              as="a"
              href={action.href}
              padding={4}
              radius={2}
              border
              tone="transparent"
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all .2s ease',
              }}
            >
              <Flex direction="column" gap={4}>
                <Flex align="center" justify="space-between">
                  <Flex
                    align="center"
                    justify="center"
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: '#EEF4FF',
                    }}
                  >
                    <Icon size={20} color="#2563eb" />
                  </Flex>

                  <ChevronRight size={16} color="#9ca3af" />
                </Flex>

                <Box>
                  <Heading size={1}>{action.title}</Heading>

                  <Box marginTop={2}>
                    <Text size={1} muted>
                      {action.description}
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Card>
          )
        })}
      </Grid>
    </Card>
  )
}
