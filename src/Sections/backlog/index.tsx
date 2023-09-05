import { Group, Text } from "@mantine/core";
import { useBacklog } from "../../utils/useBacklog";
import { AutocompleteLoading } from "./AutocompleteGames";
import { BacklogGame } from "./game";

export default function Backlog() {
  const { backlog, set } = useBacklog();

  return (
    <>
      <AutocompleteLoading addGame={set} />
      {backlog.length ? (
        <Group
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {backlog.map((game: any, index: number) => (
            <BacklogGame index={index} key={game.id} />
          ))}
        </Group>
      ) : (
        <Text align="center">wow, no backlog</Text>
      )}
    </>
  );
}
