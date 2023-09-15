import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import Store from 'electron-store'
import { createWindow } from './helpers'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

;(async () => {
  await app.whenReady()

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  })

  if (isProd) {
    await mainWindow.loadURL('app://./home.html')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.webContents.openDevTools()
  }
})()

app.on('window-all-closed', () => {
  app.quit()
})


// backlog
const backlogStore = new Store({ name: 'backlog' })

ipcMain.on('get-backlog', (event) => {
  event.returnValue = backlogStore.get('backlog') || []
})

ipcMain.on('set-backlog', (event, arg) => {
  backlogStore.set('backlog', JSON.parse(arg))
})

// backlog
const raStore = new Store({ name: 'ra' })

ipcMain.on('get-ra', (event) => {
  event.returnValue = raStore.get('ra')
})

ipcMain.on('set-ra', (event, arg) => {
  raStore.set('ra', arg)
})
