import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
  rem,
  Box,
  SegmentedControl,
} from "@mantine/core";
import {
  IconBrandSteam,
  IconCalendarEvent,
  IconClockBolt,
  IconGripVertical,
  IconStarHalfFilled,
} from "@tabler/icons-react";
import { useBacklog } from "../../utils/useBacklog";
import { secondsToHms } from "../../utils/times";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    position: "relative",
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  drag: {
    top: theme.spacing.md,
    left: theme.spacing.md,
    position: "absolute",
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export function BacklogGame({
  image,
  id,
  game_name,
  profile_platform,
  release_world,
  review_score,
  comp_main,
  profile_steam,
  dragHandleProps,
  state,
}: any) {
  const { toggleGameState } = useBacklog();
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <div {...dragHandleProps} className={classes.drag}>
          <IconGripVertical size={"1rem"} stroke={1.5} />
        </div>
        <Box
          h={400}
          w={"100%"}
          style={{
            background: `url(${image && image.split("50")[0].concat(400)})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        ></Box>
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text fw={500}>{game_name}</Text>
          <Text fz="xs" c="dimmed">
            {profile_platform}
          </Text>
        </div>
        <Badge variant="outline">25% off</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Game Info
        </Text>

        <Group spacing={8} mb={-8}>
          <Center>
            <IconCalendarEvent
              size="1.05rem"
              className={classes.icon}
              stroke={1.5}
            />
            <Text size="xs">{release_world}</Text>
          </Center>
          <Center>
            <IconStarHalfFilled
              size="1.05rem"
              className={classes.icon}
              stroke={1.5}
            />
            <Text size="xs">{review_score}/100</Text>
          </Center>

          <Center>
            <IconClockBolt
              size="1.05rem"
              className={classes.icon}
              stroke={1.5}
            />
            <Text size="xs">{secondsToHms(comp_main)}</Text>
          </Center>
          {profile_steam ? (
            <Center>
              <IconBrandSteam
                size="1.05rem"
                className={classes.icon}
                stroke={1.5}
              />
              <a
                target="_blank"
                href={`https://store.steampowered.com/app/${profile_steam}`}
              >
                <Text size="xs">Steam</Text>
              </a>
            </Center>
          ) : null}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <SegmentedControl
          color="cyan"
          fullWidth
          value={state}
          onChange={(v) => toggleGameState(id, v)}
          data={[
            { label: "Backlog", value: "BACKLOG" },
            { label: "Playing", value: "PLAYING" },
            { label: "Finished", value: "FINISHED" },
          ]}
        />
      </Card.Section>
    </Card>
  );
}
