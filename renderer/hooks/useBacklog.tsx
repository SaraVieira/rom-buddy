import { createContext, useContext, useEffect } from "react"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import electron from "electron"
import { HLTGame } from "../../utils/types"
const ipcRenderer = electron.ipcRenderer

const BACKLOG_STATES = {
  BACKLOG: "BACKLOG",
  PLAYING: "PLAYING",
  FINISHED: "FINISHED",
}

const BacklogContext = createContext([])

export const BacklogProvider = ({ children }) => {
  const [backlog, setBacklog] = useState<HLTGame[]>([])

  useEffect(() => {
    setBacklog(ipcRenderer.sendSync("get-backlog"))
  }, [])

  const sendToStore = (newValue?: HLTGame[]) => {
    ipcRenderer.send("set-backlog", JSON.stringify(newValue || backlog))
  }

  const set = (value: HLTGame) => {
    let id = uuidv4()
    const newBacklog = [{ ...value, id, state: BACKLOG_STATES["BACKLOG"] }, ...backlog]
    setBacklog(newBacklog)
    sendToStore(newBacklog)
  }

  const toggleGameState = (id: string, newState: string) => {
    const newOne = backlog.map((b) => {
      if (b.id === id) {
        console.log("HERE")
        return { ...b, state: BACKLOG_STATES[newState] }
      }

      return b
    })
    setBacklog(newOne)
    sendToStore(newOne)
  }

  const get = (key: string) => backlog.find((b) => b.id === key)

  const deleteKey = (key: string) => {
    const newBackLog = backlog.filter((b) => b.id !== key)
    setBacklog(newBackLog)
    sendToStore(newBackLog)
  }

  const value = {
    toggleGameState,
    backlog,
    set,
    get,
    deleteKey,
  }
  return <BacklogContext.Provider value={value as any}>{children}</BacklogContext.Provider>
}

export function useBacklog() {
  const context = useContext(BacklogContext) as unknown as {
    toggleGameState: (id: string, newState: string) => void
    backlog: HLTGame[]
    set: (value: HLTGame) => void
    get: (key: string) => HLTGame
    deleteKey: (key: string) => void
  }
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider")
  }
  return context
}
