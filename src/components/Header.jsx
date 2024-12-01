import React, { useState, useEffect } from "react";
import {whatsapp,logo, hamburger} from '../imports/import';
function Header() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

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
            {/* Top Bar */}
            <div className="flex justify-between items-center w-full px-5 sm:px-36 py-0 sm:py-0">
                <div className="flex items-center gap-2 sm:gap-[3.42px] h-6 w-[139.81px] sm:w-fit">
                    <img src={whatsapp} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                    <p className="font-semibold sm:font-bold text-sm sm:text-base text-[#333333]">
                        Call/Whatsapp : +917075181481
                    </p>
                </div>
                <div className="bg-[#0083FF] w-[136px] h-[38px] px-[10px] py-[2px] sm:w-48 rounded-xl mt-[20px] mb-[20px] sm:mt-[10px] sm:mb-[10px] grid place-content-center">
                    <p className="font-semibold text-white text-sm sm:text-xl">Schedule Demo</p>
                </div>
            </div>

            {/* Navigation */}
            <div className="px-5 sm:px-36 bg-[#08245D] h-auto sm:h-20 flex justify-between items-center py-4 sm:py-0">
                <div>
                    <img src={logo} alt="" className="sm:w-[140px] w-[120px]" />
                    
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
                    <div onClick={() => setIsSideBarOpen(true)}>
                        <img src={hamburger} alt="Menu" className="w-6 h-6 hover:cursor-pointer" />
                    </div>
                )}
            </div>

            {/* Sidebar */}
            {isSideBarOpen && (
                <div className="fixed top-0 right-0 w-full h-full bg-[#08245D] text-white z-50 transition-transform duration-300 transform translate-x-0">
                    <button
                        onClick={() => setIsSideBarOpen(false)}
                        className="absolute top-4 right-4 text-white text-2xl font-bold"
                    >
                        ✕
                    </button>
                    <div className="h-full flex flex-col items-center justify-center space-y-6">
                        <ul className="text-white text-center space-y-6">
                            <li className="font-bold text-sm hover:cursor-pointer">Verified Mark Certificate</li>
                            <li className="font-medium text-sm hover:cursor-pointer">About Us</li>
                            <li className="font-medium text-sm hover:cursor-pointer">Contact Us</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
