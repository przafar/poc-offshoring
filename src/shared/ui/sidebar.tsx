"use client";

import {
  Box, Stack, NavLink, Text, Group, Badge, Divider, Tooltip, UnstyledButton,
} from "@mantine/core";
import { usePathname } from "next/navigation";

type FlatItem = {
  label: string;
  href: string;
  indent?: number;
  badge?: string | number;
};

const NAV_FLAT: FlatItem[] = [
  { label: "Project", href: "/project", indent: 0 },
  { label: "Project Information", href: "/project/information", indent: 1 },
  { label: "Report", href: "/project/information/report", indent: 2 },
];

export function Sidebar({
  collapsed,
  onNavigate,
}: {
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Stack
      h="100%"
      gap={0}
      style={{
        background: "linear-gradient(180deg,#2f6eaa 0%,#2a5f90 100%)",
        color: "white",
        transition: "width .2s ease",
      }}
    >
      <Box px="md" py="lg" style={{ borderBottom: "1px solid rgba(255,255,255,.08)" }}>
        {!collapsed && (
          <Text fw={700} size="sm" c="white" tt="uppercase" opacity={0.9}>
            POC Offshoring
          </Text>
        )}
      </Box>

      <Stack gap={4} px={6} py="sm" style={{ flex: "1 1 auto", overflowY: "auto" }}>
        {NAV_FLAT.map(({ label, href, indent = 0, badge }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          const right = badge && !collapsed ? (
            <Badge size="xs" variant="light" color="blue">{badge}</Badge>
          ) : undefined;

          const labelNode = collapsed ? (
            <Tooltip label={label} position="right">
              <Text size="sm" fw={500} c="white">
                {label[0]}
              </Text>
            </Tooltip>
          ) : (
            <Group gap={8} ml={indent * 12}>
              <Text size="sm" fw={500} c="white">{label}</Text>
            </Group>
          );

          return (
            <UnstyledButton
              key={href}
              onClick={onNavigate}
              style={{ display: "block" }}
            >
              <NavLink
                label={labelNode}
                rightSection={right}
                active={active}
                styles={{
                  root: { borderRadius: 12, color: "white" },
                  label: { color: "white" },
                  section: { color: "white" },
                }}
                classNames={{
                  root: "hover:bg-white/10 data-[active]:bg-white/18 transition-colors",
                }}
              />
            </UnstyledButton>
          );
        })}
      </Stack>

      
    </Stack>
  );
}
