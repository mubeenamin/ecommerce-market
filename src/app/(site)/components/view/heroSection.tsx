"use client"
import { PortableText } from '@portabletext/react'
import React from 'react'
import { Hero } from 'types/Hero'
import { Button } from '../ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface prop {
    data: Hero[]
}

function HeroSectionView({ data }: prop) {
    return (
        <main>

            {data.map((hItem) => (
                <div key={hItem._id}

                >
                    <div className=" rounded-b-lg"
                    >
                        <div className=" py-8 md:flex md:flex-row  md:w-full flex flex-col-reverse mx-auto  md:py-28 ">
                            <div
                                className="md:ml-8 md:basis-1/2  py-8 mt-6 md:py-28 text-center  space-y-4 md:space-y-0 md:flex md:flex-col md:gap-y-8 "
                            >
                                <motion.div className="scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-tight lg:text-5xl"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                                    <PortableText value={hItem.content} />
                                </motion.div>
                                <div>
                                    <Button variant={"outline"} className=" w-32 text-sm rounded-full  border-2 hover:bg-purple-400 hover:text-white md:font-bold transition duration-700 ease-in-out hover:translate-y-1 hover:scale-110">
                                        Shop Now
                                    </Button>
                                </div>
                            </div>
                            <div className="  md:flex flex mx-auto ">
                                <motion.div className="relative bg-purple-400 blur-2xl w-32 h-32 md:w-96 md:h-96 rounded-full"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 1, ease: [0, 0.71, 0.2, 1.01] }}></motion.div>
                                <motion.div
                                    initial={{ x: 1000 }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 1.5 }}
                                    className='absolute'>
                                    <Image
                                        src={hItem.heroSectionImages[0]}
                                        width={400}
                                        height={400}
                                        alt="hero"
                                        className="hidden md:object-contain md:block "
                                    />
                                    <Image
                                        src={hItem.heroSectionImages[0]}
                                        width={150}
                                        height={150}
                                        alt="hero"
                                        className="object-contain md:hidden"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default HeroSectionView