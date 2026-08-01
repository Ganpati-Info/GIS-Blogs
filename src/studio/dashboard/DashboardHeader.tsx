"use client";
import { Button, Card, Flex, Heading, Stack, Text } from "@sanity/ui";
import { Plus, RefreshCw } from "lucide-react";
import { useRouter } from "sanity/router";

interface DashboardHeaderProps {
  onRefresh: () => void | Promise<void>;
  refreshing: boolean;
}

const RefreshIcon = () => <RefreshCw size={16} />;
const PlusIcon = () => <Plus size={16} />;

export default function DashboardHeader({
  onRefresh,
  refreshing,
}: DashboardHeaderProps) {
  const router = useRouter();

  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const handleRefresh = () => {
    void onRefresh();
  };

  const handleNewPost = () => {
    router.navigate({
      intent: "create",
      params: {
        type: "post",
      },
    });
  };

  return (
    <Card padding={5} radius={3} shadow={1} border>
      <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
        <Stack space={2}>
          <Heading size={4}>Dashboard</Heading>

          <Text size={1} muted>
            {today}
          </Text>
        </Stack>

        <Flex gap={2} wrap="wrap">
          <Button
            type="button"
            text={refreshing ? "Refreshing..." : "Refresh"}
            icon={RefreshIcon}
            mode="ghost"
            onClick={handleRefresh}
            disabled={refreshing}
          />

          <Button
            type="button"
            text="New Post"
            icon={PlusIcon}
            tone="primary"
            onClick={handleNewPost}
          />
        </Flex>
      </Flex>
    </Card>
  );
}
