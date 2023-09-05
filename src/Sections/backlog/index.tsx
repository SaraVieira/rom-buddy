import { Avatar, Chip, createStyles, Group, rem, Text } from "@mantine/core";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IconGripVertical } from "@tabler/icons-react";
import { useBacklog } from "../../utils/useBacklog";
import { AutocompleteLoading } from "./AutocompleteGames";
import { BacklogGame } from "./game";

const useStyles = createStyles((theme) => ({
  itemDragging: {
    boxShadow: theme.shadows.sm,
  },

  symbol: {
    fontSize: rem(30),
    fontWeight: 700,
    width: rem(60),
  },
}));

export default function Backlog() {
  const { classes, cx } = useStyles();
  const { backlog, set, move_game } = useBacklog();

  const items = (
    <Group
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
      }}
    >
      {backlog.map((item: any, index: number) => (
        <Draggable key={item.id} index={index} draggableId={item.id}>
          {(provided, snapshot) => (
            <div
              className={cx({
                [classes.itemDragging]: snapshot.isDragging,
              })}
              ref={provided.innerRef}
              {...provided.draggableProps}
            >
              <BacklogGame
                index={index}
                dragHandleProps={provided.dragHandleProps}
              />
            </div>
          )}
        </Draggable>
      ))}
    </Group>
  );

  return (
    <>
      <AutocompleteLoading addGame={set} />
      {backlog.length ? (
        <DragDropContext
          onDragEnd={({ destination, source }) =>
            move_game(source.index, destination?.index || 0)
          }
        >
          <Droppable droppableId="dnd-list" direction="vertical">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <Text align="center">wow, no backlog</Text>
      )}
    </>
  );
}
