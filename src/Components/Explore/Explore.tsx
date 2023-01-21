import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from "framer-motion";

const Explore = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (
        <section id="home" className="bg-[#e4e4e4] gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            >
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* HEADINGS */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="text-6xl mt-4">
                            <span className='font-bold'>Discover</span> <br />
                            Collect & sell<br />
                            Digital <span className='font-bold'>Art</span> of <span className='font-bold'>NFTs</span>.
                        </p>
                        <p className='text-2xl mt-8 text-[#d0d0d0]'>Create explore & Collect Digital art NFTs</p>
                    </motion.div>

                    {/* ACTIONS */}
                    <motion.div
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="text-center w-1/4 px-3 py-5 bg-[#a7d3b6] text-white hover:text-[#121416] text-xs hover:bg-[#e4e4e4] hover:shadow-lg focus:bg-[#e4e4e4] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e4e4e4] active:shadow-lg transition duration-150 ease-in-out"
                        >Get started</button>
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="text-center w-1/4 px-3 py-5 bg-[#d5a861] text-white hover:text-[#121416] text-xs hover:bg-[#e4e4e4] hover:shadow-lg focus:bg-[#e4e4e4] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#e4e4e4] active:shadow-lg transition duration-150 ease-in-out"
                        >Get early access</button>
                    </motion.div>
                </div>

                {/* IMAGE */}
                 <div className='flex basis-1/2 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
                 <div className="z-40 pt-16 pl-64">
                    <div className='w-60 p-2 bg-white shadow-lg'>
                        {/*image*/}
                        <img className='h-50 object-cover' alt="home-pageGraphic" src="https://media.architecturaldigest.com/photos/55e8b9a9302ba71f3018249d/master/w_900,h_600,c_limit/dam-images-architecture-2015-09-colorful-buildings-colorful-buildings-05.jpg" />
                        <div className='p-1'>
                            {/*heading*/}
                            <div className='flex items-center justify-between'>
                                <h2 className='font-bold'>Heading</h2>
                                <h2 className='font-bold'>#.01</h2>
                            </div>

                            {/*description*/}
                            <div className='text-[#d0d0d0] flex items-center justify-between'>
                                <h2 className='font-semibold'>Current bid</h2>
                                <h2 className='font-semibold'>Ending In</h2>
                            </div>

                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-bold'>5.64 ETH</h2>
                            <h2 className='font-bold'>12h21m</h2>
                        </div>

                    </div>
                </div>
                
                <div className="z-30 absolute">
                    <div className='w-60 p-2 bg-white shadow-lg '>
                        {/*image*/}
                        <img className='h-50 object-cover' alt="home-pageGraphic" src="https://media.architecturaldigest.com/photos/55e8b9a9302ba71f3018249d/master/w_900,h_600,c_limit/dam-images-architecture-2015-09-colorful-buildings-colorful-buildings-05.jpg" />
                        <div className='p-1'>
                            {/*heading*/}
                            <div className='flex items-center justify-between'>
                                <h2 className='font-bold'>Heading</h2>
                                <h2 className='font-bold'>#.01</h2>
                            </div>

                            {/*description*/}
                            <div className='text-[#d0d0d0] flex items-center justify-between'>
                                <h2 className='font-semibold'>Current bid</h2>
                                <h2 className='font-semibold'>Ending In</h2>
                            </div>

                        </div>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-bold'>5.64 ETH</h2>
                            <h2 className='font-bold'>12h21m</h2>
                        </div>

                    </div>
                </div>
                 </div>
            </motion.div>
        </section>
    )
}

export default Explore