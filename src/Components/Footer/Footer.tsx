import React from 'react'
import { GiArena } from "react-icons/gi";
import { FaBitcoin } from "react-icons/fa";
import { GiCrystalGrowth } from "react-icons/gi";

const Footer = () => {
    return (
        <footer className='fixed bottom-0 items-center justify-center'>
            <div className='flex items-center justify-between'>
                <div className='bg-[#121416] px-20 h-full'>
                    <div className='mx-auto flex items-center justify-around'>
                        <div className='p-8'>
                            <p className='text-white font-semibold text-2xl'>Supported By</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='p-8'>
                                <p className='text-white text-3xl'><GiArena /></p>
                            </div>
                            <div className='p-8'>
                                <p className='text-white text-3xl'><FaBitcoin /></p>
                            </div>
                            <div className='p-8'>
                                <p className='text-white text-3xl'><GiCrystalGrowth /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#e4e4e4] px-20'>
                    <div className='mx-auto flex items-center justify-center'>
                        <div className='p-2'>
                            <p className='font-bold text-5xl'>12.1K+</p>
                            <p className='text-[#d0d0d0] text-xl'>Art Work</p>
                        </div>
                        <div className='p-2'>
                            <p className='font-bold text-5xl'>11M+</p>
                            <p className='text-[#d0d0d0] text-xl'>Artist</p>
                        </div>
                        <div className='p-2'>
                            <p className='font-bold text-5xl'>45K+</p>
                            <p className='text-[#d0d0d0] text-xl'>Auction</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer