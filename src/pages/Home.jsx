import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import VmcCard from '../components/VmcCard';
import VmcRefCard from '../components/VmcRefCard';

const carouselItems = [
    {
        id: 1,
        image: '/images/sec1-img1.png',
        text: 'Amazon With VMC/BIMI'
    },
    {
        id: 2,
        image: '/images/sec1-img2.png',
        text: 'Airtel With VMC/BIMI'
    }
];

const VmcData = [
    {
        id: 1,
        image: '/images/protection.png',
        text: 'Increase Brand Protection'
    },
    {
        id: 2,
        image: '/images/filter.png',
        text: 'Beat the Leads Journey with Unique Branding'
    },
    {
        id: 2,
        image: '/images/money.png',
        text: 'Increase Sales with Verified Blue Tick Mark'
    }
];

const Vmcref = 
    {

        large: '/images/VmcRef1.png',
        small: '/images/VmcRef2.png'
    }
  


function Home() {
    const [activeItem, setActiveItem] = useState(1);

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


    const activeCarouselItem = carouselItems.find((item) => item.id === activeItem);

    return (
        <>
            <Header />

            {/* section 1 */}
            <div className='flex flex-col-reverse sm:flex-row justify-between bg-gradient-to-r from-[#E5F2FF] to-[#FFFFFF] w-full  h-fit px-5 sm:px-36 pb-5 sm:pb-[60px]'>
                {/* text */}
                <div className=' w-full sm:w-[580px] sm:h-auto mt-5 sm:mt-[106px] text-center sm:text-left'>
                    <h1 className='text-[#0083FF] text-xl sm:text-[56px] font-bold leading-snug sm:leading-tight'>
                        Convert Your Leads
                    </h1>
                    <p className='text-[#333333] font-semibold text-sm sm:text-[28px] mt-3 leading-normal sm:leading-relaxed'>
                        into Sales/Revenue by Enforcing
                    </p>

                    <div className='flex items-center justify-center sm:justify-start gap-[10px] mt-3'>
                        <h1 className='text-[#0083FF] text-xl sm:text-[36px] font-semibold leading-snug'>
                            Verified Blue Tick Mark Badge
                        </h1>
                        <img src="/images/verified.png" className='h-[30px] w-[30px]' alt="Verified Badge" />
                    </div>

                    <p className='text-[#333333] font-semibold text-sm sm:text-[28px] mt-3 leading-normal sm:leading-relaxed'>
                        to Your Business Mail Id with a
                    </p>
                    <h1 className='text-[#0083FF] text-xl sm:text-[36px] font-semibold mt-3 leading-snug'>
                        Verified Mark Certificate (VMC)
                    </h1>
                    <div className="mt-5">
                        <Button text={"Get Your Verified Mark Certificate Now"} />
                    </div>
                </div>


                <div className='h-[351px] sm:h-[451px]  w-full sm:w-[313px] mt-5 sm:mt-[69px] relative'>

                    <div className="carousel">
                        <div className="carousel-item w-full">
                            <img
                                src={activeCarouselItem.image}
                                alt=""
                                className='object-contain object-center h-[281.43px] w-[480px]'
                            />
                        </div>


                        <div className='absolute  sm:mt-0 h-fit bottom-0 w-full grid place-content-center'>
                            <p className='text-[#08245D] text-2xl w-[156px] text-center font-semibold'>
                                {activeCarouselItem.text}
                            </p>


                            <div className='flex gap-5 w-full justify-center mt-2'>
                                {carouselItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveItem(item.id)}
                                        className='h-2 w-2 rounded-full border'
                                        style={{
                                            borderColor: activeItem === item.id ? '#0083FF' : '#08245D',
                                            backgroundColor: activeItem === item.id ? '#0083FF' : 'transparent'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 2 */}

            <div className='bg-[#08245D] sm:h-[502px] w-full p-5 sm:px-[145px] mt-[30px] sm:mt-0'>

                <h1 className='text-[#FFFFFF] text-center font-semibold text-xl leading-normal sm:text-[46px]  pt-5 sm:pt-[60.8px] px-0 sm:px-[80px] w-full'>Process to Get VMC and Verified Blue Tick
                    to Your Business E-Mail Ids</h1>

                {
                    isLargeScreen ?
                        <img src="/images/VMC.png" alt="" className='mt-[33.2px] mb-[57.12px]' />
                        :

                        <div className='text-center'>
                            <img src="/images/VMC2.png" alt="" className='mt-[33.2px] m-auto' />
                            <img src="/images/VMC1.png" alt="" className='mt-[33.2px] m-auto' />

                        </div>
                }


            </div>

            {/* section 3 */}

            <div className='px-5 sm:px-[144px] mt-5 sm:mt-20 mb-[40.81px]'>
                <div className='flex flex-col sm:flex-row items-center'>
                    <div>
                        <img src="/images/cuate.png" alt="" className='w-[260px] h-[182px] sm:w-[574px]  sm:h-[401.01px]' />
                    </div>

                    <div className='w-[350px] sm:w-[542px] ml-0 sm:ml-[37.5px] text-left sm:text-center mt-0 sm:mt-[12px]'>
                        <h1 className='font-semibold text-[#0083FF] text-xl sm:text-[46px] text-center sm:text-left leading-normal'>What is BIMI?</h1>
                        <p className='text-[#333333] sm:text-left text-center text-sm sm:text-lg'>Brand Indicators for Message Identification, or BIMI, is a specification allowing for the display of brand logos next to authenticated e-mails a Verified Blue Mark to recognize the brand Authenticity.</p>
                    </div>

                </div>

                <div className='m-auto text-center mt-[30px] sm:mt-[80.99px]'>
                    <h1 className='text-[##333333] leading-normal text-xl sm:text-[46px] font-semibold'>Convert Your Leads</h1>
                    <h1 className='text-[#0083FF] text-xl sm:text-[46px] font-bold'>Verified Mark Certificate ‘VMC’</h1>

                    <div className=' flex mt-[11.95px] sm:mt-[40.7px] gap-[30.46px] w-full overflow-x-auto lg:overflow-x-visible'>
                        {VmcData.map((item, index) => (
                            <VmcCard key={index} data={item} />
                        ))}
                    </div>


                </div>

            </div>

            {/* section 4 */}

            <div className='bg-[#E5F2FF] p-5 sm:px-[142px]   w-full h-fit sm:h-[585px]'>

                <div className='bg-[#08245D] w-[350px] sm:w-[679px] h-[60px] sm:h-[51px] m-auto rounded-[12px] px-[20px] py-[10px]'>
                    <p className='text-[#FFFFFF] font-bold text-[14px] sm:text-[18px] text-center'>Kill Impersonation with Verified Badge Right Next to Your Business Mail ID</p>
                </div>

                {/* text */}
                <div className='flex flex-col sm:flex-row items-center mt-[30px] '>
                    <div className='w-[350px] sm:w-[522px] text-center sm:text-left'>
                        <h1 className='text-[#0083FF] text-[20px]  sm:text-[46px] font-bold'>Get Your Verified Mark Certificate Now</h1>
                        <p className='text-[#333333] text-[14px] sm:text-[18px] mt-[16px]'>Verified Mark Certificate (VMC) in Collaboration with BIMI an E-Mail Specification ‘Brand Indicators for Message Identification’ is the only way to Showcase your Brand Logo Along with Verified Blue Tick Verified Badge Symbol in Your Mail Id to Build Confidence, Transparency and Brand Awareness in E-Mail Communications with Your Clients/Customers.</p>
                        <Button text={"Schedule Product Demo"} />
                    </div>

                    <div className='ml-0 mt-[20.5px] sm:mt-0 sm:ml-[54px]'>
                        <img src="/images/beforeAfter.png" alt="" />
                    </div>
                </div>

            </div>

            {/* section 5 */}

            <div className='p-5 sm:px-[144px] m-auto'>

                <div className='w-[350px] sm:w-[835px] m-auto'>
                    <h1 className='text-[#0083FF] tex-[20px] sm:text-[46px] font-bold text-center'>Reference of Brands Before and After VMC/BIMI Deployment</h1>
                    <p className='text-[14px] sm:text-[18px] font-[600] text-center mt-[14px]'>BIMI/VMC E-Mail Specification once Implemented will Propagate in both Web and Mobile Views.</p>
                </div>

                <div className='flex flex-col w-[350px] sm:w-full sm:flex-row items-center mt-[22px]'>
                    {
                        isLargeScreen ? 
                        
                        <VmcRefCard img={Vmcref.large} />
                        :
                        <VmcRefCard img={Vmcref.small} />
                           
                                                          
                      
                    }
                </div>

            </div>

        </>
    );
}

export default Home;
