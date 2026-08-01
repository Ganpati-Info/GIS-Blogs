import type {SanityClient} from '@sanity/client'

import {dashboardQueries} from './queries'
import {mapDashboardOverview} from './mappers'

import type {DashboardOverview} from './types'
import type {SanityDashboardOverview, SanityPostId} from './sanity-types'

export async function getDashboardOverview(client: SanityClient): Promise<DashboardOverview> {
  const [overview, postDocuments] = await Promise.all([
    // Main dashboard content.
    // Uses the drafts perspective so editors see the latest version.
    client.fetch<SanityDashboardOverview>(
      dashboardQueries.overview,
      {},
      {
        perspective: 'drafts',
      },
    ),

    // Raw documents are required to distinguish:
    // published-only, draft-only, and published + draft posts.
    client.fetch<SanityPostId[]>(
      dashboardQueries.postIds,
      {},
      {
        perspective: 'raw',
      },
    ),
  ])

  return mapDashboardOverview(overview, postDocuments)
}
