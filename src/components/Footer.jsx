import React from 'react';
import { phone,email,whatsappp,Frame71 } from '../imports/import';
function Footer(props) {
    return (
        <>
            <div className='bg-[#0A142F] h-fit sm:h-[566px] mt-[80px] p-5 sm:px-[144px] pt-[44px]'>
                <h1 className='text-[#FFFFFF] text-2xl font-bold m-auto sm:float-left '>Contact us</h1>

                <div className='flex flex-col sm:flex-row justify-between mt-8 '>


                    <div className='w-[303px]'>
                        <h1 className='text-2xl text-[#FFFFFF] font-semibold'>India</h1>
                        <p className='mt-5 font-normal w-[303px] leading-8 text-[#FFFFFF] text-base'>
                            <span className='font-bold text-[#FFFFFF] text-base block'>
                                Address:
                            </span>
                            SISIPI® Technologies Private Limited
                            4th Floor, Bizness Square , Jubilee Enclave, HITEC City, Hyderabad, Telangana 500084
                        </p>
                        <div className='mt-5'>
                            <div className='flex gap-[13px] items-center  mt-[12px]'>
                                <img src={phone} alt="" />
                                <p className='text-[#FFFF] text-base'>+917075181481</p>
                            </div>
                            <div className='flex gap-[13px] items-center mt-[12px]'>
                                <img src={whatsappp} alt="" />
                                <p className='text-[#FFFF] text-base'>+917075181481</p>
                            </div>
                            <div className='flex gap-[13px] items-center mt-[12px]'>
                                <img src={email} alt="" />
                                <p className='text-[#FFFF] text-base'>contact@sisipi.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[303px] mt-5'>
                        <h1 className='text-2xl text-[#FFFFFF]  font-semibold'>USA</h1>
                        <p className='mt-5 font-normal sm:w-[303px] leading-8 text-[#FFFFFF] text-base w-[311px]'>
                            <span className='font-bold text-[#FFFFFF] text-base block'>
                                Address:
                            </span>

                            SISIPI® Technologies Private Limited
                            4th Floor, Bizness Square , Jubilee Enclave, HITEC City, Hyderabad, Telangana 500084
                        </p>

                    </div>

                    <div className='w-[303px] mt-5'>
                        <h1 className='text-2xl text-[#FFFFFF]  font-semibold'>Links</h1>
                        <ul className='text-[#FFFF] text-sm sm:text-base font-bold flex gap-[12px] sm:flex-col'>
                            <div>
                                <li className='mt-5'>Verified Mark</li>
                                <li className='mt-5'>Certificate</li>
                                <li className='mt-5'>About Us</li>
                            </div>
                            <div>
                                <li className='mt-5'>Contact Us</li>
                                <li className='mt-5'>Privacy Policy</li>
                                <li className='mt-5'>Terms of Servies</li>
                            </div>
                        </ul>                </div>


                </div>

                <div className='mt-[35px] sm:mt-[25px] w-[252px] sm:w-[284px]  sm:m-auto'>
                    <img src={Frame71} alt="" />
                </div>

            </div>
            <div className='m-auto w-full sm:w-full text-center sm:text-left bg-[#FFFFFF] gap-[14px] flex flex-col sm:flex-row justify-between px-0 sm:px-[146px] py-5 font-normal'>
                <p className='text-[#0A142F] text-[12px] sm:text-sm w-[297px] m-auto sm:w-[346px]'>SISIPI© is a Registered Trademark Owned and Managed
                    By SISIPI Technologies Private Limited , SISIPI Inc.</p>

                <p className='text-[#0A142F] text-[12px] sm:text-sm w-[266px] m-auto sm:w-[381px] font-normal '>Copyright © 2024 SISIPI TECHNOLOGIES PRIVATE LIMITED
                    SISIPI Inc. All Rights Reserved</p>
            </div>
        </>
    );
}

export default Footer;