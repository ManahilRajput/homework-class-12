import React from 'react';

const Hero = () => {
  return (
    <div className="w-[1920px] h-[829px] py-[140px] px-[220px] bg-[#043873] grid grid-cols-2 gap-4">

      <div className="flex flex-col w-[656px] h-[361px] gap-[60px]">

        <div className="text-[#FFFFFF] font-bold text-[64px] leading-[77.45px]">Get More Done With Whitespace</div>
        <div className="text-[#FFFFFF] font-normal text-[18px] leading-[30px]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</div>

        <button className="w-[219px] 1  h-[63px] p-[20px] gap-[10px] bg-[#4F9CF9] text-white rounded-lg">Try Whitespace Free</button>
      </div>
      
      <div className="bg-[#C4DEFD] Widt w-[824px] h-[549px] gap-[4px]"></div>
    </div>
  );
};

export default Hero;