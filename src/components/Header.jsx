import React, { useState, useEffect } from "react";

function Header() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // Update screen size state
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        handleResize(); // Check initial screen size
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
        
            <div className="flex justify-between items-center w-full px-5 sm:px-36 py-0 sm:py-0">
                <div className="flex items-center gap-2 sm:gap-[3.42px] h-6 w-[139.81px] sm:w-fit">
                    <img src="/images/whatsapp.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    <p className=" font-semibold sm:font-bold text-sm sm:text-base text-[#333333]">
                        Call/Whatsapp : +917075181481
                    </p>
                </div>
                <div className="bg-[#0083FF] w-[136px] h-[38px] px-[10px] py-[2px] sm:w-48 rounded-xl mt-[20px] mb-[20px] sm:mt-[10px] sm:mb-[10px] grid place-content-center">
                    <p className="font-semibold text-white text-sm sm:text-xl">Schedule Demo</p>
                </div>
            </div>

            <div className="px-5 sm:px-36 bg-[#08245D] h-auto sm:h-20 flex justify-between items-center py-4 sm:py-0">
                <div>
                    <img src="/images/logo.png" alt="" className="sm:w-[140px] w-[120px]" />
                </div>

                
                {isLargeScreen ? (
                    <div className="mt-4 sm:mt-0">
                        <ul className="text-white flex justify-center sm:justify-between items-center gap-2 sm:gap-6">
                            <li className="font-bold text-sm hover:cursor-pointer">Verified Mark Certificate</li>
                            <li className="font-medium text-sm hover:cursor-pointer">About Us</li>
                            <li className="font-medium text-sm hover:cursor-pointer">Contact Us</li>
                        </ul>
                    </div>
                ) : (
                    <div>
                        <img src="/images/hamburger.png" alt="" className="w-6 h-6" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
