export const walkSync = (dir, filelist = []) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const dirFile = path.join(dir, file);
      const dirent = fs.statSync(dirFile);
      const isHidden = dirFile.startsWith(".");
      if (!isHidden) {
        if (dirent.isDirectory()) {
          var odir = {
            folder: dirFile,
            files: [],
          };
          odir.files = walkSync(dirFile, dir.files);
          filelist.push(odir);
        } else {
          const extension = path.extname(dirFile);
          filelist.push({
            file: dirFile,
            extension,
          });
        }
      }
    }
    return filelist;
  
  };
  