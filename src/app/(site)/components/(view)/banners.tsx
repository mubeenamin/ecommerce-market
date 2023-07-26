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
                <div key={iData._id} className="space-y-6 md:flex md:flex-row md:gap-x-6 md:space-y-0 md:py-6 cursor-pointer ">
                    {iData.bannerImages.map((ibanner) => (
                        <div key={ibanner} >
                            <Image src={ibanner} width={650} height={650} alt="banners" className="transition duration-700 ease-in-out hover:translate-y-4 hover:scale-105 hover:overflow-hidden" />
                        </div>
                    ))}
                </div>
            ))}
        </main>
    )
}

export default BannersView