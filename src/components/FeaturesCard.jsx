import React from 'react';

function FeaturesCard({ data }) {
    return (
        <div className=" w-[150px] sm:w-[500px] h-[50px] sm:h-[80px]  flex items-center pl-4 py-[10px] rounded-[16px]" style={{ boxShadow: '0px 4px 84px 0px #0000000A' }}>
            <div className="w-fit h-fit  box-border flex items-center">

                <div className=''>
                    <img src={data.image} alt="" />
                </div>
                <p className='ml-4 text-[12px] sm:text-lg text-[#333333]'>{data.text}</p>
            </div>
        </div>
    );
}

export default FeaturesCard;
