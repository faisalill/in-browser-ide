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
    <Editor
     height="92.1vh"
     width="100%"
     language={language}
     value={code}
     onChange={(value) => setCode(value)}
     theme={Theme}
   />
   <button
   className=''
   onClick={() => {
    console.log(code, language)
      axios.post('http://localhost:3001/execute', {
        code: code,
        language: language
        }).then((res) => {
          console.log(res.data)
        }
      )
   }
   }
   >
    check
   </button>
   <button
   onClick={()=>{
    console.log(output)
   }}
   >
      print
   </button>
    </>
  )
}

export default IDE

