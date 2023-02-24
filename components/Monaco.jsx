import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Audio } from 'react-loader-spinner';
const Editor = dynamic(() => import('@monaco-editor/react').then(mod => {
    return mod.default;
}), { ssr: false });
import { TomorrowNightTheme } from '@/themes/Tomorrow-Night';

const Monaco = (props) => {
  return (
    <Editor
    className='h-[50vh] w-screen'
     language={props.language[0]}
     value={props.code}
     loading={<div
     className='h-[50vh] w-screen text-white flex justify-center place-items-center gap-3'
     style={{
         backgroundColor: TomorrowNightTheme.colors['editor.background'],
     }}
     >
     <Audio
  height="80"
  width="80"
  radius="9"
  color="#00BFFF"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
     </div>}
     onChange={(value) => props.setCode(value)}
     theme={props.Theme[0]}
   />
  )
}

export default Monaco