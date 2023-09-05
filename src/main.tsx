import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
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
import Roms from "./Sections/roms";
import Compress from "./Sections/compress";
import Scrape from "./Sections/scrape";
import RetroAchievements from "./Sections/retro-achievements";
import Backlog from "./Sections/backlog";
import Settings from "./Sections/settings";

const data = [
  {
    icon: <IconFileDatabase />,
    label: "Roms",
    link: "/",
  },
  {
    icon: <IconFileZip size="1rem" />,
    label: "Compress",
    link: "compress",
  },
  {
    icon: <IconPhoto size="1rem" />,
    label: "Scrape",
    link: "scrape",
  },
  {
    icon: <IconCoins size={"1rem"} />,
    label: "RetroAchievements",
    link: "retro-achievements",
  },
  {
    icon: <IconStarHalfFilled size={"1rem"} />,
    label: "Backlog",
    link: "backlog",
  },
  {
    icon: <IconSettings size={"1rem"} />,
    label: "Settings",
    link: "settings",
  },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roms />,
  },
  {
    path: "compress",
    element: <Compress />,
  },
  {
    path: "scrape",
    element: <Scrape />,
  },
  { path: "retro-achievements", element: <RetroAchievements /> },
  { path: "backlog", element: <Backlog /> },
  { path: "settings", element: <Settings /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{ colorScheme: "dark" }}
  >
    <AppShell
      padding="md"
      navbar={
        <Navbar p="xs" width={{ base: 250 }}>
          <Navbar.Section grow mt="md">
            {data.map((link) => (
              <a key={link.label} href={link.link}>
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
              </a>
            ))}
          </Navbar.Section>
        </Navbar>
      }
    >
      <RouterProvider router={router} />
    </AppShell>
  </MantineProvider>
);
