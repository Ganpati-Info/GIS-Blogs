"use client";
import {Star} from 'lucide-react'
import {Card} from '@sanity/ui'

import BulkPopularTool from './BulkPopularTool'

export const bulkPopularTool = {
  name: 'bulk-popular',
  title: 'Bulk Popular',
  icon: Star,

  component: () => (
    <Card padding={4}>
      <BulkPopularTool />
    </Card>
  ),
}