import {useState} from 'react'
import Editor, {useMonaco} from '@monaco-editor/react'
import Navbar from './Navbar'



const IDE = () => {
  const monaco = useMonaco();
 
  const [language, setLanguage] = useState('javascript')
  const [Theme, setTheme] = useState('vs-dark')
  const [code, setCode] = useState(`//type anything here`)
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
      console.log(code)
   }
   }
   >
    check
   </button>
    </>
  )
}

export default IDE

