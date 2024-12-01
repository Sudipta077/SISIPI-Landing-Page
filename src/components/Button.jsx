import React from 'react';
import { rightArrow } from '../imports/import';
function Button({text}) {
    return (
        <div className= 'm-auto sm:ml-0 bg-[#08245D] w-fit  h-[60px] rounded-[80px] px-4 py-[15px] flex gap-2 justify-between items-center mt-[22px] sm:mt-10'>
                <p className='text-[#FFFFFF] text-sm sm:text-xl font-semibold'>{text}</p>
                <img src={rightArrow} alt="" className='h-10 w-10'/>
        </div>
    );
}

export default Button;