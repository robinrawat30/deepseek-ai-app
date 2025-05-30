import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const PromptBox = ({setIsLoading , isLoading}) => {

    const [prompt, setPrompt] = useState('');




    return (
        <>

            <form className={`w-full  ${false ? "max-w-3xl" : "max-w-2xl"} bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>

                <textarea className='outline-none w-full resize-none overflow-hidden break-words bg-transparent'

                    rows={2}
                    placeholder='Message Deepseek'
                    required

                    onChange={(e)=>{
                        setPrompt(e.target.value)
                    }}

                    value={prompt}


                >

                </textarea>

                <div className=" flex items-center justify-between text-sm">
                    <div className=" flex items-center gap-2">
                        <p className="flex items-center gap-2 text-xs border border-gray-300
                        px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition
                        
                         ">
                            <Image className="h-5" src={assets.deepthink_icon} alt='' />
                            DeepThink (R1)
                        </p>

                        <p className="flex items-center gap-2 text-xs border border-gray-300
                        px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition
                        
                         ">
                            <Image className="h-5" src={assets.search_icon} alt='' />
                            Search
                        </p>
                    </div>
                </div>

                <div className="flex  items-center justify-end gap-2">
                    <Image className=" w-4 cursor-pointer " src={assets.pin_icon} alt='arrow-icon' />

                    <button className={`${prompt ? " bg-blue-500" :"bg-[#81817a]"} rounded-full p-2 cursor-pointer`} >

                        <Image className=" w-4 aspect-square " src={prompt ? assets.arrow_icon : assets.arrow_icon_dull} alt='arrow-icon' />

                    </button>
                </div>

            </form>



        </>
    )
}

export default PromptBox
