import { ipcRenderer } from "electron"
import { useEffect, useState } from "react"

export default () => {
  const [files, setFiles] = useState([])
  const [dir, setDir] = useState()

  const onInit = async () => {
    const { folder, files } = await ipcRenderer.invoke("get-folder")

    if (files && folder) {
      setDir(folder)
      setFiles(files)
    }
  }

  useEffect(() => {
    onInit()
  }, [])

  const getFiles = async (path: string) => {
    const files = await ipcRenderer.invoke("get-files", path)
    setFiles(files)
  }

  return (
    <>
      {!dir ? (
        <button
          onClick={async (e) => {
            const folder = await ipcRenderer.invoke("select-dirs")
            getFiles(folder)
          }}
        >
          Select your rom folder
        </button>
      ) : (
        <pre>{JSON.stringify(files, null, 2)}</pre>
      )}
    </>
  )
}
