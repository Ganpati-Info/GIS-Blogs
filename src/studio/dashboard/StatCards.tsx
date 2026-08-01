"use client";
import {Card, Flex, Grid, Heading, Text} from '@sanity/ui'
import {ChevronRight, FileText, FolderTree, PencilLine, Users} from 'lucide-react'

import type {DashboardStats} from './lib/types'

interface StatCardsProps {
  stats: DashboardStats
}

interface StatCard {
  title: string
  value: number
  icon: React.ElementType
  href: string
  color: string
  background: string
}

export default function StatCards({stats}: StatCardsProps) {
  const cards: StatCard[] = [
    {
      title: 'Total Posts',
      value: stats.posts,
      icon: FileText,
      href: '/structure/post',
      color: '#2563eb',
      background: '#DBEAFE',
    },
    {
      title: 'Categories',
      value: stats.categories,
      icon: FolderTree,
      href: '/structure/category',
      color: '#16A34A',
      background: '#DCFCE7',
    },
    {
      title: 'Authors',
      value: stats.authors,
      href: '/structure/author',
      icon: Users,
      color: '#7C3AED',
      background: '#EDE9FE',
    },
    {
      title: 'Drafts',
      value: stats.drafts,
      href: '/structure/post',
      icon: PencilLine,
      color: '#D97706',
      background: '#FEF3C7',
    },
  ]

  return (
    <Grid columns={[1, 2, 2, 4]} gap={4}>
      {cards.map((card) => {
        const Icon = card.icon

        return (
          <Card
            key={card.title}
            as="a"
            href={card.href}
            padding={4}
            radius={3}
            shadow={1}
            border
            style={{
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all .2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = ''
            }}
          >
            <Flex justify="space-between" align="flex-start">
              <Flex direction="column" gap={3} style={{flex: 1}}>
                <Text size={1} muted>
                  {card.title}
                </Text>

                <Heading size={4}>{card.value.toLocaleString()}</Heading>

                <Flex align="center" gap={2}>
                  <Text
                    size={1}
                    style={{
                      color: '#2563EB',
                      fontWeight: 600,
                    }}
                  >
                    View
                  </Text>

                  <ChevronRight size={14} color="#2563EB" />
                </Flex>
              </Flex>

              <Flex
                align="center"
                justify="center"
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: card.background,
                  flexShrink: 0,
                }}
              >
                <Icon size={24} color={card.color} />
              </Flex>
            </Flex>
          </Card>
        )
      })}
    </Grid>
  )
}
