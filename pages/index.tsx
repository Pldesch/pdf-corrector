import { useState } from 'react';

export default function Home() {

  const [text, setText] = useState<string>();

  const [file, setFile] = useState<string>();

  const send = () => {
    const formData : FormData = new FormData()
    formData.append('pdfFile', file)
    fetch("/api/extract-pdf", {
      method: 'POST',
      body : formData
    }).then(res=>(
      res.text()
    )).then(text =>{
      console.log(text)
      setText(text.trim())
    })
  }

  const changeHandler = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setFile(file)
    send()
  }
  return (
    <div className='p-20 px-40 h-full'>
      <div className='flex flex-row justify-center'>
        <h3 >Pdf Corrector</h3>
      </div>
      <div>
        {/*<Pdf url={selectedFile} />*/}
        
      </div>
      <div className='w-full pt-10 h-full flex flex-col justify-between gap-5 items-center'>
        <input onChange={changeHandler} id='inpFile' type='file' accept='.pdf' className='file:bg-slate-100 file:text-slate-900 file:font-bold file:px-6 file:py-2 file:border-none file:rounded-full bg-slate-600 pr-3 rounded-full' />
        <button type='button' onClick={send} id='btnUpload' className='bg-slate-100 text-slate-900 font-bold px-6 py-2 border-none rounded-full'>Upload</button>
        <span role='textbox' className='w-full overflow-hidden text-black border-none focus:outline-none shadow-md shadow-slate-600 p-4 block resize bg-white min-h-[100px] rounded-xl' id='resultText' contentEditable>{text}</span>
      </div>
    </div>
  )
}
