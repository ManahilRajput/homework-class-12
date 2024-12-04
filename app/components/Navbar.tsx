import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='w-[1920] h-[92px] bg-[#043873] justify-between py-[16px] px-[220px] flex items-center'>
        
        <div>
            <Image src={'/logo.png'} alt={'logo'} width={191} height={34}/>
        </div>

        <div className='w-[737.5px] h-[60px] flex items-center gap-[60px]'>
          <div className='w-[549px] h-[23px]'>
            <ul className='flex justify-between text-[#FFFFFF] leading-[23px] font-semibold text-[18px] gap-[32px]'>

                <li >Products</li>
                <li >Solutions</li>
                <li>Recourses</li>
                <li>Pricing</li>
            </ul>
</div>

    <button className='rounded-lg bg-[#FFE492] w-[126px] h-[60px] py-4 px-10 gap-[10px]'>Login</button>

        </div>
    </div>
    </>
  )
}

export default Navbar