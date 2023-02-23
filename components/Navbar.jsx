import React from 'react'
import ThemeChanger from './ThemeChanger'
const Navbar = (props) => {
  return (
    <div className='bg-black flex justify-around p-3 w-screen'>
        <div className='text-white font-logoFont text-xl '>Online IDE</div>
        <div className='flex flex-row place-items-center gap-3'>
            <select
            className='border-2 border-black rounded-md  bg-gray-900 p-1 text-white' 
            onChange={(e)=>{
                props.setLanguage([e.target.value.split(',')[0], e.target.value.split(',')[1]])                // console.log(props.language)
            }}>
                <option value={['javascript', '63']}  >Javascript</option>
                <option value={['objective-c', '75']} >C</option>
                <option value={['cpp', '76']}>C++</option>
                <option value={['python', '70']} >Python</option>
                <option value={['rust', '73']} >Rust</option>
            </select>
            <ThemeChanger  monaco={props.monaco} theme={props.theme} setTheme={props.setTheme}/>
        </div>
        
    </div>
  )
}

export default Navbar