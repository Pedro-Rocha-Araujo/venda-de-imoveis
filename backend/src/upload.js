import multer from "multer"

const storage = multer.diskStorage({
  destination: (request, file, callback)=>{
    callback(null, "uploads/")
  },
  filename: (request, file, callback)=>{
    const nomeArquivo = Date.now() + "-" + file.originalname.replace(/\s+/g, "_")
    callback(null, nomeArquivo)
  }
})
export const upload = multer({storage: storage})