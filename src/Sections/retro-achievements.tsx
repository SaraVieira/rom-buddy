import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api";

export default () => {
  const [data, setData] = useState();

  useEffect(async () => {
    await invoke("get_user_retro_summary", {
      username: "NikkitaFTW",
    });
  });

  return JSON.stringify(data);
};
