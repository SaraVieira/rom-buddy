import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { AppShell, Group, Navbar, Text, UnstyledButton } from "@mantine/core";

import {
  IconCoins,
  IconFileDatabase,
  IconFileZip,
  IconPhoto,
  IconSettings,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";
import { BacklogProvider } from "../hooks/useBacklog";
import { RAProvider } from "../hooks/useRa";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const queryClient = new QueryClient();

  const data = [
    {
      icon: <IconFileDatabase />,
      label: "Roms",
      link: "/",
    },
    {
      icon: <IconFileZip size="1rem" />,
      label: "Compress",
      link: "/compress",
    },
    {
      icon: <IconPhoto size="1rem" />,
      label: "Scrape",
      link: "/scrape",
    },
    {
      icon: <IconCoins size={"1rem"} />,
      label: "RetroAchievements",
      link: "/retro-achievements",
    },
    {
      icon: <IconStarHalfFilled size={"1rem"} />,
      label: "Backlog",
      link: "/backlog",
    },
    {
      icon: <IconSettings size={"1rem"} />,
      label: "Settings",
      link: "settings",
    },
  ];

  return (
    <>
      <RAProvider>
        <BacklogProvider>
          <QueryClientProvider client={queryClient}>
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                colorScheme: "dark",
              }}
            >
              <AppShell
                padding="md"
                navbar={
                  <Navbar p="xs" width={{ base: 250 }}>
                    <Navbar.Section grow mt="md">
                      {data.map((link) => (
                        <Link key={link.label} href={link.link}>
                          <UnstyledButton
                            sx={(theme) => ({
                              display: "block",
                              width: "100%",
                              padding: theme.spacing.xs,
                              borderRadius: theme.radius.sm,
                              color:
                                theme.colorScheme === "dark"
                                  ? theme.colors.dark[0]
                                  : theme.black,

                              "&:hover": {
                                backgroundColor:
                                  theme.colorScheme === "dark"
                                    ? theme.colors.dark[6]
                                    : theme.colors.gray[0],
                              },
                            })}
                            style={{
                              boxShadow: "none",
                              cursor: "pointer",
                            }}
                          >
                            <Group>
                              {link.icon}
                              <Text size="sm">{link.label}</Text>
                            </Group>
                          </UnstyledButton>
                        </Link>
                      ))}
                    </Navbar.Section>
                  </Navbar>
                }
              >
                <Component {...pageProps} />
              </AppShell>
            </MantineProvider>
          </QueryClientProvider>
        </BacklogProvider>
      </RAProvider>
    </>
  );
}
