import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className='bg-[#043873] w-[1920px] h-[461px] gap-[200px] px-[220px] pt-[140px] pb-[32px] '>
        <div className='w-[1480px] h-[289px] gap-[100px] '>

            <div className='w-[1480px] h-[169px] gap-[100px] flex'>

                <div className='w-[295px] h-[169px] gap-[15px]'>
            <Image src={'/logo.png'} alt={'logo'} width={191} height={34}/>
            <p className='w-[240px] h-[120px] font-normaltext-[18px] leading-[30px] text-[#F7F7EE]'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>

            <div className='w-[295px] h-[127px] gap-[15px]'>
                <p className='font-bold text-[18px] leading-[21.78px] text-[#FFFFFF]'>Product</p>
                <ul className='text-[#FFFFFF] font-normal text-[16px] leading-[20px]'>
                    <li>Overview</li>
                    <li>Pricing</li>
                    <li>Customer stories</li>
                </ul>
            </div>

            <div className='w-[295px] h-[130px] gap-[16px]'>
                <p className='font-bold text-[18px] leading-[21.78px] text-[#FFFFFF]'>Resources</p>
                <ul className='text-[#FFFFFF] font-normal text-[16px] leading-[20px]'>
                    <li>Blog</li>
                    <li>Guides & tutorials</li>
                    <li>Help center</li>
                </ul>
            </div>

            <div className='w-[295px] h-[130px] gap-[16px]'>
                <p className='font-bold text-[18px] leading-[21.78px] text-[#FFFFFF]'>Company</p>
                <ul className='text-[#FFFFFF] font-normal text-[16px] leading-[20px]'>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Media kit</li>
                </ul>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Footer