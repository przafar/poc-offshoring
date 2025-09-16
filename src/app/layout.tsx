import type { Metadata } from "next";
import "./globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { AppShell } from "@/processes/app-shell/ui/app-shell";

export const metadata: Metadata = { title: "Offshoring POC" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><ColorSchemeScript /></head>
      <body>
        <MantineProvider defaultColorScheme="light"  >
          <AppShell>{children}</AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
