import React from 'react'
import { MonokaiTheme } from '@/themes/Monokai'
import { TwilightTheme } from '@/themes/Twilight'
import { DraculaTheme } from '@/themes/Dracula'
import { GitHubDarkTheme } from '@/themes/GitHub Dark'
import { TomorrowNightBlueTheme } from '@/themes/Tomorrow-Night-Blue'
import { NightOwlTheme } from '@/themes/Night Owl'
import { BlackboardTheme } from '@/themes/Blackboard'
import { CloudsMidnightTheme } from '@/themes/Clouds Midnight'


const ThemeChanger = (props) => {
    const {monaco, theme, setTheme} = props
    if(monaco) {
        monaco.editor.defineTheme('Monokai', MonokaiTheme);
        monaco.editor.defineTheme('GitHubDark', GitHubDarkTheme);
        monaco.editor.defineTheme('Twilight', TwilightTheme); 
        monaco.editor.defineTheme('Dracula', DraculaTheme); 
        monaco.editor.defineTheme('TomorrowNightBlue', TomorrowNightBlueTheme);
        monaco.editor.defineTheme('NightOwl', NightOwlTheme);
        monaco.editor.defineTheme('Blackboard', BlackboardTheme);
        monaco.editor.defineTheme('CloudsMidnight', CloudsMidnightTheme)  
    }
  return (
    <div>
        <select
        className='border-2 border-black rounded-md bg-gray-900 p-1 text-white'
        onChange={(e)=>{
            setTheme(e.target.value)
        }}>
            <option  value='vs-dark'>Vscode Dark</option>
            <option value='vs'>Vscode Light</option>
            <option value='hc-black'>Hs Black</option>
            <option value='Monokai'>Monokai</option>
            <option value='GitHubDark'>GitHub Dark</option>
            <option value='Twilight'>Twilight</option>
            <option value='Dracula'>Dracula</option>
            <option value='TomorrowNightBlue'>Tomorrow Night Blue</option>
            <option value='NightOwl'>Night Owl</option>
            <option value='Blackboard'>Blackboard</option>
            <option value='CloudsMidnight'>Clouds Midnight</option>
        </select>
    </div>
  )
}

export default ThemeChanger