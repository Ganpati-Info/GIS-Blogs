import {StructureResolver} from 'sanity/structure'

import Dashboard from '../src/studio/dashboard/Dashboard'
import BulkPopularTool from '../src/studio/bulkPopular/BulkPopularTool'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Dashboard')
        .icon(() => '📊')
        .child(S.component().id('dashboard').title('Dashboard').component(Dashboard)),

      S.listItem()
        .title('Bulk Popular')
        .icon(() => '⭐')
        .child(S.component().id('bulk-popular').title('Bulk Popular').component(BulkPopularTool)),

      S.divider(),

      ...S.documentTypeListItems(),
    ])