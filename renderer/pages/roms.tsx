import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";
import { consoles } from "../utils/consoles";
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { Image } from "@mantine/core";

export default () => {
  const [folders, setFolders] = useState([]);
  const getFolders = async () => {
    const folders = await invoke("get_user_roms");

    setFolders(
      folders.map((a) => ({
        path: a,
        folderName: a.split("/Volumes/Miyoo/Roms/")[1],
        match: consoles.find((console) => {
          return [...Object.values(console.folderNames).flat()].includes(
            a.split("/Volumes/Miyoo/Roms/")[1]
          );
        }),
      }))
    );
  };
  useEffect(() => {
    getFolders();
  }, []);
  return (
    <ul
      style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      {folders.map((f) =>
        !f.match ? null : (
          <li
            style={{
              backgroundImage: `url('${f.match.image}')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              listStyleType: "none",
              width: 200,
              minHeight: 200,
              position: "relative",
              borderRadius: 4,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "black",
                opacity: 0.2,
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            />
            {f.match.name}
          </li>
        )
      )}
    </ul>
  );
};
