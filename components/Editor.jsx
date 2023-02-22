import {useState} from 'react'
import Editor, {useMonaco} from '@monaco-editor/react'
import Navbar from './Navbar'
import axios from 'axios'


const IDE = () => {
  const [language, setLanguage] = useState('javascript')
  const [Theme, setTheme] = useState('vs-dark')
  const [code, setCode] = useState(`//type anything here`)
  const [output, setOutput] = useState('')
 
  const monaco = useMonaco();
 
  const jsExecute = (code) => {
    const check = eval(code);
    setOutput(check)
  }
 
  return (
    <>
    <Navbar language={language} setLanguage={setLanguage} monaco={monaco} theme={Theme} setTheme={setTheme}/>
    <div className='flex flex-col '>
    <div>
    <div className=' h-12 bg-NavBarColor text-white flex justify-center place-items-center   gap-3'>
      <button  className='bg-blue-600 h-9 px-3  rounded-lg'
      onClick={()=>{
        setCode(``)
        setOutput(``)
      }}
      >Reset</button>
      <button className='bg-blue-600 h-9 px-3 rounded-lg'
      onClick={()=>{
        console.log(process.env.NEXT_PUBLIC_IP_ADDRESS_PORT)
      }}
      >Run</button>
    </div>
    <Editor
    className='h-[50vh] w-screen'
     language={language}
     value={code}
     onChange={(value) => setCode(value)}
     theme={Theme}
   />
    </div>
   <div
   className='h-[39.05vh] w-screen text-white  bg-black p-5'
   >
    <h3 className='text-center text-xl mb-2 '>Output</h3>
    <div className='border-white  border-2 h-5/6 p-3 w-100% ' >
      {output}
    </div>
   </div>
   </div>
    </>
  )
}

export default IDE

