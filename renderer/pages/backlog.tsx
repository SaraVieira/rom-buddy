import { Group, Tabs, Text } from "@mantine/core"
import { AutocompleteLoading } from "../components/Backlog/AutocompleteGames"
import { BacklogGame } from "../components/Backlog/game"
import { useBacklog } from "../hooks/useBacklog"
import { HLTGame } from "../../utils/types"

const WrapperStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "2rem",
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "1fr",
  },
}

export default function Backlog() {
  const { backlog } = useBacklog()

  return (
    <>
      <AutocompleteLoading />
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
                .filter((game: HLTGame) => game.state === "BACKLOG")
                .map((game: HLTGame) => (
                  <BacklogGame {...game} />
                ))}
            </Group>
          </Tabs.Panel>
          <Tabs.Panel value="playing" pt="xs">
            <Group sx={WrapperStyles}>
              {backlog
                .filter((game: HLTGame) => game.state === "PLAYING")
                .map((game: HLTGame) => (
                  <BacklogGame {...game} />
                ))}
            </Group>
          </Tabs.Panel>
          <Tabs.Panel value="finished" pt="xs">
            <Group sx={WrapperStyles}>
              {backlog
                .filter((game: HLTGame) => game.state === "FINISHED")
                .map((game: HLTGame) => (
                  <BacklogGame {...game} />
                ))}
            </Group>
          </Tabs.Panel>
        </Tabs>
      ) : (
        <Text align="center">wow, no backlog</Text>
      )}
    </>
  )
}
