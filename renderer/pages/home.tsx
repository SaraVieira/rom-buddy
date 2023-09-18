import { ipcRenderer } from "electron";
import { useEffect, useState } from "react";
// import { consoles } from "../utils/consoles";
// import { Image } from "@mantine/core";

export default () => {
  const [folders, setFolders] = useState([]);

  const getFiles = async () => {
    const a = await ipcRenderer.invoke("get-files", ".");
    setFolders(a);
  };
  useEffect(() => {
    getFiles();
  }, []);
  return <pre>{JSON.stringify(folders, null, 2)}</pre>;
  // <ul
  //   style={{
  //     display: "flex",
  //     gap: 16,
  //     flexWrap: "wrap",
  //   }}
  // >
  //   {folders.map((f) =>
  //     !f.match ? null : (
  //       <li
  //         style={{
  //           backgroundImage: `url('${f.match.image}')`,
  //           backgroundSize: "contain",
  //           backgroundRepeat: "no-repeat",
  //           backgroundPosition: "center",
  //           listStyleType: "none",
  //           width: 200,
  //           minHeight: 200,
  //           position: "relative",
  //           borderRadius: 4,
  //           alignItems: "center",
  //           justifyContent: "center",
  //           display: "flex",
  //           textAlign: "center",
  //         }}
  //       >
  //         <div
  //           style={{
  //             background: "black",
  //             opacity: 0.2,
  //             position: "absolute",
  //             width: "100%",
  //             height: "100%",
  //           }}
  //         />
  //         {f.match.name}
  //       </li>
  //     )
  //   )}
  // </ul>
};
