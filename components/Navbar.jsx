import React from 'react'
import ThemeChanger from './ThemeChanger'
const Navbar = (props) => {
  return (
    <div className='bg-black flex justify-around p-3 w-screen'
    style={{
      backgroundColor: props.WebSiteTheme.colors['editor.background'],
    }}>
        <div className=' font-logoFont text-2xl '
        style={{
          color: props.WebSiteTheme.colors['editor.selectionBackground'],
          filter: `contrast(100%) hue-rotate(90deg)  invert(100%)`
        }}
        >Online IDE</div>
        <div className='flex flex-row place-items-center gap-3'>
            <select
            className='border-2 border-black rounded-md  bg-gray-900 p-1 text-white' 
            style={{
              backgroundColor: props.WebSiteTheme.colors['editor.selectionBackground'],
            }}
            onChange={(e)=>{
                props.setLanguage([e.target.value.split(',')[0], e.target.value.split(',')[1]])                // console.log(props.language)
            }}>
                <option value={['javascript', '63']}  >Javascript</option>
                <option value={['typescript', '74']} >Typescript</option>
                <option value={['objective-c', '75']} >C</option>
                <option value={['cpp', '76']}>C++</option>
                <option value={['python', '70']} >Python</option>
                <option value={['rust', '73']} >Rust</option>
                <option value={['csharp', '51']} >C#</option>
                <option value={['go', '60']} >Go</option>
                <option value={['kotlin', '78']} >Kotlin</option>
                <option value={['swift', '83']} >Swift</option>
                <option value={['elixir', '57']} >Elixir</option>
                <option value={['ruby', '72']} >Ruby</option>
            </select>
            <ThemeChanger  monaco={props.monaco} WebSiteTheme={props.WebSiteTheme} theme={props.theme} setTheme={props.setTheme}/>
        </div>
        
    </div>
  )
}

export default Navbar