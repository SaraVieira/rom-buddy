import { consoles } from "../../utils/consoles"
import path from "path"
import fs from "fs"

export const walkSync = (dir, filelist = [], level = 0) => {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const dirFile = path.join(dir, file)
    const dirent = fs.statSync(dirFile)
    const isHidden = dirFile.startsWith(".")
    if (!isHidden) {
      if (dirent.isDirectory()) {
        const console =
          level < 2 &&
          consoles.find((console) => {
            return [...Object.values(console.folderNames).flat()].includes(
              level === 0 ? path.basename(dirFile) : path.basename(path.dirname(dirFile))
            )
          })

        if (console) {
          const roms = walkSync(dirFile, dir.files, level + 1).filter((f) =>
            f.file && console.extensions ? console.extensions.includes(f.extension) : true
          )
          filelist.push({
            folder: dirFile,
            folderName: path.basename(dirFile),
            level,
            console,
            roms: roms.length,
            files: roms,
          })
        } else {
          filelist.push({
            folder: dirFile,
            folderName: path.basename(dirFile),
            level,
            files: walkSync(dirFile, dir.files, level + 1),
          })
        }
      } else {
        const extension = path.extname(dirFile)
        filelist.push({
          file: dirFile,
          extension,
        })
      }
    }
  }

  return filelist
}
