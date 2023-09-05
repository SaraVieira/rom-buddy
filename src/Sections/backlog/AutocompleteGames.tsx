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
import { invoke } from "@tauri-apps/api";
import { howLongToBeatQuery } from "../../utils/constants";

interface ItemProps extends SelectItemProps {
  image: string;
  game_name: string;
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
            <Text>{game.game_name}</Text>
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

export function AutocompleteLoading({ addGame }: any) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const timeoutRef = useRef<number>(-1);

  const handleChange = async (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(async () => {
        const gamesAsText = (await invoke("get_how_game", {
          body: howLongToBeatQuery(val),
        })) as string;
        const games = JSON.parse(gamesAsText).data.map((game: any) => ({
          ...game,
          image: `https://howlongtobeat.com/games/${game.game_image}?width=50`,
          value: game.game_name,
        }));
        setData(games);
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <Autocomplete
      mb={"lg"}
      value={value}
      data={data}
      onChange={handleChange}
      itemComponent={(game) => (
        <ItemComponent
          {...game}
          onClick={() => {
            addGame(game);
            setValue("");
            setData([]);
          }}
        />
      )}
      rightSection={loading ? <Loader size="1rem" /> : null}
      placeholder="Search for a game"
    />
  );
}
