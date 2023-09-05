import { useEffect, useState } from "react";
import { Store } from "tauri-plugin-store-api";
import { v4 as uuidv4 } from "uuid";

const BACKLOG_STATES = {
  BACKLOG: "BACKLOG",
  PLAYING: "PLAYING",
  FINISHED: "FINISHED"
} 



export const useBacklog = () => {
  const store = new Store(".settings.dat");
  const [backlog, setBacklog] = useState<any>([]);
  const set = async (value: any) => {
    let id = uuidv4();
    await store.set(id, { ...value, id, state: BACKLOG_STATES["BACKLOG"] });
    await store.save();
    await storeIntoState();
  };

  const toggleGameState = async (id: any, newState: any) => {
    const current = await store.get(id) as any
    // @ts-ignore
    await store.set(id, { ...current, state: BACKLOG_STATES[newState] });
    await store.save();
    await storeIntoState();
  }

  const get = (key: string) => store.get(key);

  const deleteKey = async (key: string) => {
    await store.delete(key);
    await store.save();
    await storeIntoState();
  };

  const storeIntoState = async () => {
    const a = await store.values();
    setBacklog(a);
  };

  useEffect(() => {
    storeIntoState();
  }, []);

  const move_game = (old_index: number, new_index: number) => {
    const newBacklog = backlog
    if (new_index >= newBacklog.length) {
        var k = new_index - newBacklog.length + 1;
        while (k--) {
            newBacklog.push(undefined);
        }
    }
    newBacklog.splice(new_index, 0, newBacklog.splice(old_index, 1)[0]);
    setBacklog(newBacklog)
    store.clear()
    backlog.map(set)
};

return {
    toggleGameState,
    move_game,
    backlog,
    set,
    get,
    deleteKey,
  };
};
