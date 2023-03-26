import dynamic from 'next/dynamic';
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
     loading={
     <div
     className='h-[50vh] w-screen text-white flex flex-col justify-center place-items-center gap-3'
     style={{
         backgroundColor: TomorrowNightTheme.colors['editor.background'],
     }}
     >
<h2 className='mb-4 bg-gradient-to-r from-red-500  via-pink-500 to-purple-500 bg-clip-text text-transparent font-bold'>Loading Editor...</h2>
{/* <Bars
  height="80"
  width="80"
  color="#ff5869"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/> */}
<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

     </div>
     }
     onChange={(value) => props.setCode(value)}
     theme={props.Theme[0]}
   />
  )
}

export default Monaco