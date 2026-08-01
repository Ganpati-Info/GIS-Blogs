"use client";
import { useCallback, useEffect, useState } from "react";

import { Box, Card, Flex, Grid, Spinner, Text } from "@sanity/ui";

import { useClient } from "sanity";

import DashboardHeader from "./DashboardHeader";
import StatCards from "./StatCards";
import FeaturedPost from "./FeaturedPost";
import RecentPosts from "./RecentPosts";
import PopularPosts from "./PopularPosts";
import QuickActions from "./QuickActions";

import { getDashboardOverview } from "./lib/dashboard";

import type { DashboardOverview } from "./lib/types";

export default function Dashboard() {
  const client = useClient({
    apiVersion: "2025-07-01",
  });

  const [dashboard, setDashboard] = useState<DashboardOverview | null>(null);

  const [loading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const loadDashboard = useCallback(
    async (isRefresh = false) => {
      try {
        if (isRefresh) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }

        const data = await getDashboardOverview(client);

        setDashboard(data);
      } catch (error) {
        console.error("Failed to load dashboard:", error);

        if (!isRefresh) {
          setDashboard(null);
        }
      } finally {
        if (isRefresh) {
          setRefreshing(false);
        } else {
          setLoading(false);
        }
      }
    },
    [client],
  );

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  if (loading) {
    return (
      <Flex
        align="center"
        justify="center"
        style={{
          minHeight: "70vh",
        }}
      >
        <Spinner muted />

        <Box marginLeft={3}>
          <Text>Loading dashboard...</Text>
        </Box>
      </Flex>
    );
  }

  if (!dashboard) {
    return (
      <Flex
        align="center"
        justify="center"
        style={{
          minHeight: "70vh",
        }}
      >
        <Card padding={5} radius={3} border>
          <Text>Failed to load dashboard.</Text>
        </Card>
      </Flex>
    );
  }

  return (
    <Box padding={5}>
      <DashboardHeader
        onRefresh={() => loadDashboard(true)}
        refreshing={refreshing}
      />

      <Box marginTop={5}>
        <StatCards stats={dashboard.stats} />
      </Box>

      <Grid columns={[1, 1, 2]} gap={5} marginTop={5}>
        <Box>
          <FeaturedPost post={dashboard.featuredPost} />

          <Box marginTop={5}>
            <RecentPosts posts={dashboard.recentPosts} />
          </Box>
        </Box>

        <Box>
          <QuickActions />

          <Box marginTop={5}>
            <PopularPosts posts={dashboard.popularPosts} />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}
