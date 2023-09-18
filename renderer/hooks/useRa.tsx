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

const RAContext = createContext([])

export const RAProvider = ({ children }) => {
  const [raUsername, setRaUsername] = useState<string>("")

  useEffect(() => {
    setRaUsername(ipcRenderer.sendSync("get-ra"))
  }, [])

  const changeUsername = (username) => {
    setRaUsername(username)
    ipcRenderer.send("set-ra", JSON.stringify(username))
  }

  return (
    <RAContext.Provider
      value={{
        // @ts-ignore
        changeUsername,
        raUsername,
      }}
    >
      {children}
    </RAContext.Provider>
  )
}

export function useRA() {
  const context = useContext(RAContext) as unknown as {
    changeUsername: (username: any) => void
    raUsername: string
  }
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider")
  }
  return context
}
