"use client";
import {Search} from 'lucide-react'
import {Card, Flex, Text, TextInput} from '@sanity/ui'

interface BulkPopularSearchProps {
  value: string
  onChange: (value: string) => void
}

export default function BulkPopularSearch({value, onChange}: BulkPopularSearchProps) {
  return (
    <Card padding={4} radius={3} shadow={1} marginBottom={4}>
      <Flex direction="column" gap={4}>
        <div>
          <Text size={3} weight="semibold">
            Popular Posts
          </Text>

          <Text size={1} muted style={{marginTop: 6}}>
            Search and select the posts that should appear in the
            <strong> Popular Articles</strong> section of your website.
          </Text>
        </div>

        <TextInput
          value={value}
          icon={Search}
          placeholder="Search by title or category..."
          onChange={(event) => onChange(event.currentTarget.value)}
        />
      </Flex>
    </Card>
  )
}
