import formidable from 'formidable';
import { readFileSync } from 'fs';
import pdf from 'pdf-parse'

export const config = {
  api: {
    bodyParser: false
  }
};

const post = (req, res) => {  
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    const buff = readFileSync(files.pdfFile.filepath)
    
    pdf(buff, {max : 0}).then(result => {
      res.send(result.text)
    })
  })
}

export default (req, res) => {
  req.method === "POST"
  ? post(req, res)
  : res.status(404);
}