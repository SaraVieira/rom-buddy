import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api";

export default () => {
  const [data, setData] = useState();

  useEffect(async () => {
    const a = await invoke("get_user_retro_summary", {
      username: "NikkitaFTW",
    });
    console.log(a);
  });

  return JSON.stringify(data);
};
