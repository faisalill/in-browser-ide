import React from 'react'
import ThemeChanger from './ThemeChanger'
const Navbar = (props) => {
  return (
    <div className='bg-black flex justify-around p-3'>
        <div className='text-white font-logoFont text-xl '>Online IDE</div>
        <div className='flex flex-row place-items-center gap-3'>
            <select
            className='border-2 border-black rounded-md  bg-gray-900 p-1 text-white' 
            onChange={(e)=>{
                props.setLanguage(e.target.value)
                // console.log(props.language)
            }}>
                <option value='javascript'>Javascript</option>
                <option value='objective-c'>C</option>
                <option value='cpp'>C++</option>
                <option value='python'>Python</option>
                <option value='rust'>Rust</option>
            </select>
            <ThemeChanger  monaco={props.monaco} theme={props.theme} setTheme={props.setTheme}/>
        </div>
        
    </div>
  )
}

export default Navbar