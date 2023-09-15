import { useQuery } from "react-query";
import { useRA } from "../hooks/useRa";
import {
  Box,
  Button,
  Card,
  Flex,
  Group,
  Image,
  List,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { formatDistance } from "date-fns";

export default () => {
  const { raUsername, changeUsername } = useRA();
  const [value, setValue] = useState("");
  const { data, isLoading } = useQuery({
    queryFn: () => fetch(`/api/ra?game=${"value"}`).then((rsp) => rsp.json()),
    enabled: !!raUsername,
    queryKey: ["ra", raUsername],
    placeholderData: [],
  });

  if (!raUsername && !isLoading) {
    return (
      <Box
        w={"100%"}
        h={"100%"}
        display={"flex"}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="What is your retroachivemnts username?"
        />
        <Button
          mt={23}
          ml="sm"
          disabled={!value}
          onClick={() => changeUsername(value)}
        >
          Show my achievements
        </Button>
      </Box>
    );
  }

  return (
    <div>
      {data.recentlyPlayed && (
        <>
          <Text weight={"bold"} size={"lg"}>
            Recently played
          </Text>
          <Flex gap={"md"}>
            {data.recentlyPlayed.map((r) => (
              <Card
                maw={150}
                key={r.id}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
              >
                <Card.Section>
                  <Image
                    src={`https://media.retroachievements.org${r.imageIcon}`}
                    alt={r.title}
                    maw={150}
                  />
                </Card.Section>

                <Group mt="md" mb="xs">
                  <Text size="sm" weight={500}>
                    {r.title}
                  </Text>
                </Group>

                <Text size="xs" color="dimmed">
                  Last played{" "}
                  {formatDistance(new Date(r.lastPlayed), new Date(), {
                    addSuffix: true,
                  })}
                </Text>
              </Card>
            ))}
          </Flex>
        </>
      )}
      <pre>{JSON.stringify(data.recentAchievements, null, 2)}</pre>
    </div>
  );
};
