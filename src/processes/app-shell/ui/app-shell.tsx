"use client";

import { Drawer, ActionIcon, Group, Burger, Title } from "@mantine/core";
import { useLocalStorage, useDisclosure } from "@mantine/hooks";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightExpand,
} from "@tabler/icons-react";
import { Sidebar } from "@/shared/ui/sidebar";
import { PropsWithChildren } from "react";

export function AppShell({ children }: PropsWithChildren) {
  const [mobileOpened, mobile] = useDisclosure(false);
  const [collapsed, setCollapsed] = useLocalStorage<boolean>({
    key: "sidebar-collapsed",
    defaultValue: false,
  });

  const sidebarW = collapsed ? 88 : 264;

  return (
    <div className="min-h-screen flex bg-[#f4f7fb]">
      <aside
        className="hidden md:block sticky top-0 h-screen text-white"
        style={{
          width: sidebarW,
          transition: "width .2s ease",
          background: "linear-gradient(180deg,#2f6eaa 0%,#2a5f90 100%)",
        }}
      >
        <Sidebar collapsed={collapsed} />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white/70 backdrop-blur border-b border-slate-200">
          <div className="h-full max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-between">
            <Group gap="xs">
              <Burger opened={mobileOpened} onClick={mobile.toggle} hiddenFrom="md" size="sm" />
              <ActionIcon
                variant="subtle"
                visibleFrom="md"
                onClick={() => setCollapsed(v => !v)}
                aria-label="Toggle sidebar"
              >
                {collapsed
                  ? <IconLayoutSidebarRightExpand size={20} />
                  : <IconLayoutSidebarLeftCollapse size={20} />}
              </ActionIcon>
              <Title order={4} className="!m-0">Poc</Title>
            </Group>
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6">{children}</div>
        </main>
      </div>

      <Drawer
        opened={mobileOpened}
        onClose={mobile.close}
        padding="xs"
        size={264}
        withCloseButton={false}
        styles={{
          content: {
            background: "linear-gradient(180deg,#2f6eaa 0%,#2a5f90 100%)",
            color: "white",
          },
        }}
      >
        <Sidebar onNavigate={mobile.close} />
      </Drawer>
    </div>
  );
}
