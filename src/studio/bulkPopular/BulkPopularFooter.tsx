"use client";
import {RotateCcw, Check} from 'lucide-react'
import {Button, Card, Flex, Text} from '@sanity/ui'

interface BulkPopularFooterProps {
  selectedCount: number
  totalCount: number
  saving: boolean
  hasChanges: boolean
  onReset: () => void
  onSave: () => void
}

export default function BulkPopularFooter({
  selectedCount,
  totalCount,
  saving,
  hasChanges,
  onReset,
  onSave,
}: BulkPopularFooterProps) {
  return (
    <Card
      padding={4}
      shadow={2}
      border
      style={{
        position: 'sticky',
        bottom: 0,
        marginTop: 24,
        zIndex: 100,
      }}
    >
      <Flex align="center" justify="space-between">
        <Text size={2}>
          <strong>{selectedCount}</strong> of <strong>{totalCount}</strong> posts selected
        </Text>

        <Flex gap={3}>
          <Button
            text="Reset"
            mode="ghost"
            icon={RotateCcw}
            disabled={!hasChanges || saving}
            onClick={onReset}
          />

          <Button
            text={saving ? 'Saving...' : 'Save Changes'}
            tone="primary"
            icon={Check}
            loading={saving}
            disabled={!hasChanges || saving}
            onClick={onSave}
          />
        </Flex>
      </Flex>
    </Card>
  )
}
