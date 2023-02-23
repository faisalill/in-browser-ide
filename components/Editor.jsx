import {useState} from 'react'
import Editor, {useMonaco} from '@monaco-editor/react'
import Navbar from './Navbar'
import axios from 'axios'


const headers = {
  'X-Auth-Token': process.env.NEXT_PUBLIC_X_TOKEN,
  'X-Auth-User': process.env.NEXT_PUBLIC_X_TOKEN,
  'Content-Type': 'application/json'
}

const IDE = () => {
  const [language, setLanguage] = useState(['javascript', '63'])
  const [Theme, setTheme] = useState('vs-dark')
  const [code, setCode] = useState(`//type anything here`)
  const [output, setOutput] = useState()
  const monaco = useMonaco();
 
  return (
    <>
    <Navbar language={language} setLanguage={setLanguage}   monaco={monaco} theme={Theme} setTheme={setTheme}/>
    <div className='flex flex-col '>
    <div>
    <div className=' h-12 bg-NavBarColor text-white flex justify-center place-items-center   gap-3'>
      <button  className='bg-blue-600 h-9 px-3  rounded-lg'
      onClick={()=>{
        setCode(``)
        setOutput()
      }}
      >Reset</button>
      <button className='bg-blue-600 h-9 px-3 rounded-lg'
      onClick={()=>{
          //  const formattedCode = code.replace(/\n/g, '\\n').replace(/\"/g, '\\"');
           axios.post(`${process.env.NEXT_PUBLIC_URL}/submissions/?base64_encoded=false&wait=false`, {
            "source_code": code,
            "language_id": language[1],
            "stdin": ""
           }, {headers: headers})
           .then((res)=>{
            console.log(res.data.token)
            setTimeout(()=>{
              axios.get(`${process.env.NEXT_PUBLIC_URL}/submissions/${res.data.token}?base64_encoded=false&fields=`, {headers: headers})
            .then((res)=>{
              if(res.data.status.description === 'Accepted'){
                console.log(res.data)
                setOutput({...res.data})
              }
              else{
                setTimeout(()=>{
                  axios.get(`${process.env.NEXT_PUBLIC_URL}/submissions/${res.data.token}?base64_encoded=false&fields=`, {headers: headers})
                  .then((res)=>{
                    console.log(res.data)
                    setOutput({...res.data})
                  })
                },1000)
              }
            })
            }, 2000)
           })
      }}
      >Run</button>
      <button
      onClick={()=>{
          console.log(output)
      }}
      >
        check
      </button>
    </div>
    <Editor
    className='h-[50vh] w-screen'
     language={language[0]}
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
      <p>Output: {output?.stdout} </p>
      <p>Time: {output?.time}(in ms) </p>
      <p>Memory: {output?.memory} (in KB) </p>
      <p>Error: {output?.stderr}</p>
      <p>compile_output: {output?.compile_output}</p>
    </div>
   </div>
   </div>
    </>
  )
}

export default IDE

