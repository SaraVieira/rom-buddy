import { app, dialog, ipcMain } from "electron";
import serve from "electron-serve";
import Store from "electron-store";
import { createWindow } from "./helpers";
import path from "path";
import fs from "fs";
import { walkSync } from "./helpers/rom-detect";

const isProd = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}
let mainWindow;

(async () => {
  await app.whenReady();

  mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    enableRemoteModule: false,
    contextIsolation: true,
    sandbox: true
  });

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});

// backlog
const backlogStore = new Store({ name: "backlog" });

ipcMain.on("get-backlog", (event) => {
  event.returnValue = backlogStore.get("backlog") || [];
});

ipcMain.on("set-backlog", (event, arg) => {
  backlogStore.set("backlog", JSON.parse(arg));
});

// backlog
const raStore = new Store({ name: "ra" });

ipcMain.on("get-ra", (event) => {
  event.returnValue = raStore.get("ra");
});

ipcMain.on("set-ra", (event, arg) => {
  raStore.set("ra", arg);
});

// files


const romsStore = new Store({name: "roms"});

ipcMain.handle("get-folder", () => {
  return {
    folder: (Object.keys(romsStore.store) || [])[0],
    files: (Object.values(romsStore.store) || [])[0]
  }
});

ipcMain.handle("get-files", (event, dir) => {
  if(romsStore.has(dir)) return romsStore.get(dir)
  const files = walkSync(dir);
  romsStore.set(dir, files);
  return files
});

ipcMain.handle('select-dirs', async (event, arg) => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
  })
  return result.filePaths[0]
})
