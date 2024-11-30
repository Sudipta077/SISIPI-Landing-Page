import React from 'react';

function VmcCard({ data }) {
    return (
        <div 
        className='w-[190px] sm:w-[360.93px] h-[140px] sm:h-[220px] shadow-lg grid place-content-center border-[2px] py-[30px] px-[22px] rounded-sm flex-shrink-0 '
    >
        <div>
            <img src={data.image} alt="" className='m-auto h-[35px] w-[30px] sm:h-[59.5px] sm:w-[51px]'/>
            <p className='text-sm sm:text-lg mt-2 sm:mt-[29.7px] font-bold'>{data.text}</p>
        </div>
    </div>
    
    );
}

export default VmcCard;