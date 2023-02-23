import React from 'react'
import { MonokaiTheme } from '@/themes/Monokai'
import { TwilightTheme } from '@/themes/Twilight'
import { DraculaTheme } from '@/themes/Dracula'
import { GitHubDarkTheme } from '@/themes/GitHub Dark'
import { TomorrowNightBlueTheme } from '@/themes/Tomorrow-Night-Blue'
import { NightOwlTheme } from '@/themes/Night Owl'
import { BlackboardTheme } from '@/themes/Blackboard'
import { CloudsMidnightTheme } from '@/themes/Clouds Midnight'
import { BrillianceBlackTheme } from '@/themes/Brilliance Black'
import { solarizedDarkTheme } from '@/themes/Solarized-dark'
import { TomorrowNightTheme } from '@/themes/Tomorrow-Night'

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
        monaco.editor.defineTheme('BrillianceBlack', BrillianceBlackTheme)
        monaco.editor.defineTheme('SolarizedDark', solarizedDarkTheme)
        monaco.editor.defineTheme('TomorrowNight', TomorrowNightTheme)
    }
  return (
    <div>
        <select
        className='border-2 border-black rounded-md bg-gray-900 p-1 text-white'
        style={{
            backgroundColor: props.WebSiteTheme.colors['editor.selectionBackground'],
          }}
        onChange={(e)=>{
            setTheme([e.target.value.split(',')[0], e.target.value.split(',')[1]])
        }}>
            <option value={['TomorrowNight', TomorrowNightTheme]}>Tomorrow Night</option>
            <option value={['Monokai', MonokaiTheme]}>Monokai</option>
            <option value={['GitHubDark', GitHubDarkTheme]}>GitHub Dark</option>
            <option value={['Dracula', DraculaTheme]}>Dracula</option>
            <option value={['TomorrowNightBlue', TomorrowNightBlueTheme]}>Tomorrow Night Blue</option>
            <option value={['NightOwl', NightOwlTheme]}>Night Owl</option>
            <option value={['Blackboard', BlackboardTheme]}>Blackboard</option>
            <option value={['CloudsMidnight', CloudsMidnightTheme]}>Clouds Midnight</option>
            <option value={['BrillianceBlack', BrillianceBlackTheme]}>Brilliance Black</option>
            <option value={['SolarizedDark',solarizedDarkTheme]}>Solarized Dark</option>
       </select>
    </div>
  )
}

export default ThemeChanger