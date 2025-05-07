'use client';

import { assets } from '@/assets/assets';
import PromptBox from '@/components/PromptBox';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import React, { useState } from 'react'

const page = () => {

  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>

      <div>
        <div className="flex h-screen ">

          {/* sidebar */}

          <Sidebar expand={expand} setExpand={setExpand} />

          <div className=" flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
            <div className="md:hidden absolute px-4 top-6 flex items-center justify-baseline w-full" >
              <Image src={assets.menu_icon} className="rotate-180" alt="menu-icon" onClick={() => (expand ? setExpand(false) : setExpand(true))}></Image>
              <Image src={assets.chat_icon} className="rotate-180" alt="chat-icon"></Image>
            </div>

            {
              messages.length === 0 ? (
                <>

                  <div className="flex items-center  gap-3">
                    <Image src={assets.logo_icon} alt="logo" className='h-16' />
                    <p className="text-2xl font-medium">Hi , I am DeepSeek.</p>
                  </div>
                  <p className="text-sm mt-2 ">How can I help you today ?</p>

                </>
              ) :
                (
                  <div>



                  </div>
                )
            }
            {/* prompt box */}
            <PromptBox isLoading={isLoading} setIsLoading = {setIsLoading}/>
            <p className=" text-xs absolute bottom-1 text-gray-500">AI-generated , for reference only</p>

          </div>

        </div>
      </div>

    </>
  )
}

export default page
