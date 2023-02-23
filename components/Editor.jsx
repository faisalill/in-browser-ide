import {useState} from 'react'
import Editor, {useMonaco} from '@monaco-editor/react'
import Navbar from './Navbar'
import axios from 'axios'
import { TomorrowNightTheme } from '@/themes/Tomorrow-Night'
import { GitHubDarkTheme } from '@/themes/GitHub Dark'
import { MonokaiTheme } from '@/themes/Monokai'
import { TwilightTheme } from '@/themes/Twilight'
import { DraculaTheme } from '@/themes/Dracula'
import { TomorrowNightBlueTheme } from '@/themes/Tomorrow-Night-Blue'
import { NightOwlTheme } from '@/themes/Night Owl'
import { BlackboardTheme } from '@/themes/Blackboard'
import { CloudsMidnightTheme } from '@/themes/Clouds Midnight'
import { BrillianceBlackTheme } from '@/themes/Brilliance Black'
import { solarizedDarkTheme } from '@/themes/Solarized-dark'

const headers = {
  'X-Auth-Token': process.env.NEXT_PUBLIC_X_TOKEN,
  'X-Auth-User': process.env.NEXT_PUBLIC_X_TOKEN,
  'Content-Type': 'application/json'
}

const IDE = () => {
  const [language, setLanguage] = useState(['javascript', '63'])
  const [Theme, setTheme] = useState(['TomorrowNight', TomorrowNightTheme])
  const [WebSiteTheme, setWebSiteTheme] = useState(TomorrowNightTheme)
  const backTheme = {}
  if(Theme[0]=== 'GitHubDark'){
     if(WebSiteTheme !== GitHubDarkTheme){
       setWebSiteTheme(GitHubDarkTheme)
     }
  }
  else if(Theme[0]=== 'TomorrowNight'){
    if(WebSiteTheme !== TomorrowNightTheme){
      setWebSiteTheme(TomorrowNightTheme)
    }
  }
  else if(Theme[0]=== 'Monokai'){
    if(WebSiteTheme !== MonokaiTheme){
      setWebSiteTheme(MonokaiTheme)
    }
  }
  else if(Theme[0]=== 'Twilight'){
    if(WebSiteTheme !== TwilightTheme){
      setWebSiteTheme(TwilightTheme)
    }
  }
  else if(Theme[0]=== 'Dracula'){
    if(WebSiteTheme !== DraculaTheme){
      setWebSiteTheme(DraculaTheme)
    }
  }
  else if(Theme[0]=== 'TomorrowNightBlue'){
    if(WebSiteTheme !== TomorrowNightBlueTheme){
      setWebSiteTheme(TomorrowNightBlueTheme)
    }
  }
  else if(Theme[0]=== 'NightOwl'){
    if(WebSiteTheme !== NightOwlTheme){
      setWebSiteTheme(NightOwlTheme)
    }
  }
  else if(Theme[0]=== 'Blackboard'){
    if(WebSiteTheme !== BlackboardTheme){
      setWebSiteTheme(BlackboardTheme)
    }
  }
  else if(Theme[0]=== 'CloudsMidnight'){
    if(WebSiteTheme !== CloudsMidnightTheme){
      setWebSiteTheme(CloudsMidnightTheme)
    }
  }
  else if(Theme[0]=== 'BrillianceBlack'){
    if(WebSiteTheme !== BrillianceBlackTheme){
      setWebSiteTheme(BrillianceBlackTheme)
    }
  }
  else if(Theme[0]=== 'solarizedDark'){
    if(WebSiteTheme !== solarizedDarkTheme){
      setWebSiteTheme(solarizedDarkTheme)
    }
  }
  const [code, setCode] = useState(`//type anything here`)
  const [output, setOutput] = useState()
  const monaco = useMonaco();
  return (
    <>
    <Navbar language={language} setLanguage={setLanguage} WebSiteTheme={WebSiteTheme}   monaco={monaco} theme={Theme} setTheme={setTheme}/>
    <div className='flex flex-col '>
    <div>
    <div className=' h-12  text-white flex justify-center place-items-center gap-3'
    style={{
      backgroundColor: WebSiteTheme.colors['editor.background'],
    }}
    >
      <button  className=' h-9 px-3 rounded-lg '
      style={{
        backgroundColor: WebSiteTheme.colors['editor.background'],
        // color: WebSiteTheme.colors['editor.selectionBackground'],
        filter: `contrast(100%) hue-rotate(90deg)  invert(100%)`
      }}
      onClick={()=>{
        setCode(``)
        setOutput()
      }}
      >Reset</button>
      <button className=' h-9 px-3 rounded-lg'
      style={{
        backgroundColor: WebSiteTheme.colors['editor.background'],
        // backgroundColor: WebSiteTheme.colors['editor.background'],
        // color: WebSiteTheme.colors['editor.selectionBackground'],
        filter: `contrast(100%) hue-rotate(90deg)  invert(100%)`
      }}
      onClick={()=>{
          //  const formattedCode = code.replace(/\n/g, '\\n').replace(/\"/g, '\\"');
           axios.post(`${process.env.NEXT_PUBLIC_URL}/submissions/?base64_encoded=false&wait=true`, {
            "source_code": code,
            "language_id": language[1],
            "stdin": ""
           }, {headers: headers})
           .then((res)=>{
            axios.get(`${process.env.NEXT_PUBLIC_URL}/submissions/${res.data.token}?base64_encoded=false&fields=`, {headers: headers})
            .then((res)=>{
              setOutput(res.data)
            })
           })
      }}
      >Run</button>
    </div>
    <Editor
    className='h-[50vh] w-screen'
     language={language[0]}
     value={code}
     onChange={(value) => setCode(value)}
     theme={Theme[0]}
   />
    </div>
   <div
   className='h-[39.05vh] w-screen text-white p-5'
   style={{
    backgroundColor: WebSiteTheme.colors['editor.background'],
  }}
   >
    <h3 className='text-center text-2xl mb-2 font-bold '
    style={{
      color: WebSiteTheme.colors['editor.selectionBackground'],
          filter: `contrast(100%) hue-rotate(90deg)  invert(100%)`
    }}
    >Output</h3>
    <div className='border-white  border-2 h-5/6 p-3 w-100% ' 
    style={{
      borderColor: WebSiteTheme.colors['editor.selectionBackground'],
      color: WebSiteTheme.colors['editor.selectionBackground'],
      filter: `contrast(100%) hue-rotate(90deg)  invert(100%)`
    }}
    >
      <p
      className='code-param'
      >Output: <span className='output-param'>{output?.stdout}</span> </p>
      <p className='code-param'>Time: <span className='output-param'>{output?.time}(in ms) </span></p>
      <p className='code-param'>Memory:<span className='output-param'> {output?.memory} (in KB)</span> </p>
      <p className='code-param'>Error:<span className='output-param'>{output?.stderr}</span> </p>
      <p className='code-param'>compile_output: <span className='output-param'>{output?.compile_output}</span></p>
    </div>
   </div>
   </div>
    </>
  )
}

export default IDE

