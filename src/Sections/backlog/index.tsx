import { Group, Tabs, Text } from "@mantine/core";
import { useBacklog } from "../../utils/useBacklog";
import { AutocompleteLoading } from "./AutocompleteGames";
import { BacklogGame } from "./game";

const WrapperStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem",
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "1fr",
  },
};
export default function Backlog() {
  const { backlog, set } = useBacklog();

  return (
    <>
      <AutocompleteLoading addGame={set} />
      {backlog.length ? (
        <Tabs defaultValue="backlog">
          <Tabs.List>
            <Tabs.Tab value="backlog">Backlog</Tabs.Tab>
            <Tabs.Tab value="playing">Playing</Tabs.Tab>
            <Tabs.Tab value="finished">Finished</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="backlog" pt="xs">
            <Group sx={WrapperStyles}>
              {backlog
                .filter((game: any) => game.state === "BACKLOG")
                .map((game: any) => (
                  <BacklogGame index={game.id} key={game.id} />
                ))}
            </Group>
          </Tabs.Panel>
          <Tabs.Panel value="playing" pt="xs">
            <Group sx={WrapperStyles}>
              {backlog
                .filter((game: any) => game.state === "PLAYING")
                .map((game: any) => (
                  <BacklogGame index={game.id} key={game.id} />
                ))}
            </Group>
          </Tabs.Panel>
          <Tabs.Panel value="finished" pt="xs">
            <Group sx={WrapperStyles}>
              {backlog
                .filter((game: any) => game.state === "FINISHED")
                .map((game: any) => (
                  <BacklogGame index={game.id} key={game.id} />
                ))}
            </Group>
          </Tabs.Panel>
        </Tabs>
      ) : (
        <Text align="center">wow, no backlog</Text>
      )}
    </>
  );
}
