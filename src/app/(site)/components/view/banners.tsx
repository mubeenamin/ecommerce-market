import React from 'react'
import { Banners } from 'types/Banners'
import Image from "next/image";



interface prop {
    data: Banners[]
}

function BannersView({ data }: prop) {
    return (
        <main>
            {data.map((iData) => (
                <div key={iData._id} className=" flex flex-col  gap-y-6 mb-6 md:flex md:flex-row md:gap-x-6 md:space-y-0 md:py-6 cursor-pointer  ">
                    {iData.bannerImages.map((ibanner) => (
                        <div key={ibanner} className='overflow-hidden mx-auto'>
                            <Image src={ibanner} width={650} height={650} alt="banners" className="rounded-md transition duration-700 ease-in-out hover:translate-y-4 hover:scale-105" />
                        </div>
                    ))}
                </div>
            ))}
        </main>
    )
}

export default BannersView