import { forwardRef, useRef, useState } from "react";
import {
  Group,
  Avatar,
  Text,
  SelectItemProps,
  Autocomplete,
  Loader,
  UnstyledButton,
} from "@mantine/core";
import { debounce } from "lodash-es";
import { useQuery } from "react-query";
import { useBacklog } from "../../hooks/useBacklog";

interface ItemProps extends SelectItemProps {
  image: string;
  name: string;
  profile_platform: string;
  onClick: any;
}

const ItemComponent = forwardRef<HTMLDivElement, ItemProps>(
  (game: ItemProps, ref) => (
    <UnstyledButton onClick={game.onClick}>
      <div ref={ref}>
        <Group noWrap p={4} py={8}>
          <Avatar src={game.image} />
          <div>
            <Text>{game.name}</Text>
            {game.profile_platform && (
              <Text size="xs" color="dimmed">
                {game.profile_platform}
              </Text>
            )}
          </div>
        </Group>
      </div>
    </UnstyledButton>
  )
);

export function AutocompleteLoading() {
  const { set: addGame } = useBacklog();
  const [value, setValue] = useState("");
  const { data, isFetching, refetch } = useQuery({
    queryFn: () => fetch(`/api/hlt?game=${value}`).then((rsp) => rsp.json()),
    queryKey: ["game-search", value],
    enabled: !!value,
    initialData: () => [],
  });

  return (
    <Autocomplete
      mb={"lg"}
      value={value}
      data={data || []}
      onChange={(val) => {
        setValue(val);
        debounce(refetch, 1000);
      }}
      itemComponent={(game) => (
        <ItemComponent
          {...game}
          onClick={() => {
            addGame(game);
            setValue("");
          }}
        />
      )}
      rightSection={isFetching ? <Loader size="1rem" /> : null}
      placeholder="Search for a game"
    />
  );
}
