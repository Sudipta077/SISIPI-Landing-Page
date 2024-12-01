import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import VmcCard from '../components/VmcCard';
import VmcRefCard from '../components/VmcRefCard';
import FeaturesCard from '../components/FeaturesCard';
import Footer from '../components/Footer';
import {sec1Img1,
    eligibility,
    beforeDeploy,
    beforeAfterSmall,
    afterDeploy,
    VMC,
    sec1Img2,
    feature8,
    feature7,
    feature6,
    feature5,
    feature4,
    feature3,
    feature2,
    feature1,
    protection,
    filter,
    money,
    verifiedBadge,
    vmc,
    vmc2,
    vmc1,
    cuate,
    google,
    forbes,
    apple,
    zoho,
    au,
    beforeAfter,
    vmcRefLarge,
    vmcRefSmall,
    whySI,
    whatsapp,
    whatsappp,
    phone,email,
    logo,VmcRef1,VmcRef2,sipibimi} from '../imports/import';


const carouselItems = [
    {
        id: 1,
        image: sec1Img1,
        text: 'Amazon With VMC/BIMI'
    },
    {
        id: 2,
        image: sec1Img2,
        text: 'Airtel With VMC/BIMI'
    }
];

const features = [
    {

        image: feature1,
        text: 'Brand Protection'
    },
    {

        image: feature2,
        text: 'Trusted Recognition'
    }, {

        image: feature3,
        text: 'Boost E-Mail Engagement'
    }, {

        image: feature4,
        text: 'Brand Value'
    }, {

        image: feature5,
        text: 'Unique Sales Strategy'
    }, {

        image:feature6,
        text: 'Value Addition to the Client'
    }, {

        image: feature7,
        text: 'Authentic Unified Experience'
    }, {

        image: feature8,
        text: 'Best Lead To Sale Conversions'
    },

];

const VmcData = [
    {
        id: 1,
        image:protection,
        text: 'Increase Brand Protection'
    },
    {
        id: 2,
        image: filter,
        text: 'Beat the Leads Journey with Unique Branding'
    },
    {
        id: 2,
        image: money,
        text: 'Increase Sales with Verified Blue Tick Mark'
    }
];

const Vmcref =
{

    large: VmcRef1,
    small: VmcRef2
}

const verified = [
    {

        image: google,

    },
    {

        image: forbes,

    },
    {

        image: apple,

    },
    {

        image: zoho,

    },
    {

        image: au,

    },


];



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
                        <img src={verifiedBadge} className='h-[30px] w-[30px]' alt="Verified Badge" />
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
                        <div className="carousel-item w-[313px] border">
                            <img
                                src={activeCarouselItem.image}
                                alt=""
                                className='object-contain object-center h-[281.43px] w-full sm:w-[480px]'
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
                        <img src={VMC} alt="" className='mt-[33.2px] mb-[57.12px]' />
                        :

                        <div className='text-center'>
                            <img src={vmc2} alt="" className='mt-[33.2px] m-auto' />
                            <img src={vmc1} alt="" className='mt-[33.2px] m-auto' />

                        </div>
                }


            </div>

            {/* section 3 */}

            <div className='px-5 sm:px-[144px] mt-5 sm:mt-20 mb-[40.81px]'>
                <div className='flex flex-col sm:flex-row items-center'>
                    <div>
                        <img src={cuate} alt="" className='w-[260px] h-[182px] sm:w-[574px]  sm:h-[401.01px]' />
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

            <div className='bg-[#E5F2FF] p-5 sm:px-[142px]  w-full h-fit sm:pb-[60px]'>

                <div className='mt-0 sm:mt-[40px] bg-[#08245D] w-full p-2 sm:w-[679px] h-[60px] sm:h-[51px] m-auto rounded-[12px] px-[45px] sm:px-[20px] py-[10px] sm:py-[10px] grid place-content-center'>
                    <p className='text-[#FFFFFF] font-bold text-[14px] w-[260px] sm:w-full sm:text-[18px] text-center'>Kill Impersonation with Verified Badge Right Next to Your Business Mail ID</p>
                </div>

                {/* text */}
                <div className='flex flex-col sm:flex-row items-center mt-[30px] '>
                    <div className='w-[350px] sm:w-[522px] text-center sm:text-left'>
                        <h1 className='text-[#0083FF] text-[20px]  sm:text-[46px] font-bold'>Get Your Verified Mark Certificate Now</h1>
                        <p className='text-[#333333] text-[14px] sm:text-[18px] mt-[16px]'>Verified Mark Certificate (VMC) in Collaboration with BIMI an E-Mail Specification ‘Brand Indicators for Message Identification’ is the only way to Showcase your Brand Logo Along with Verified Blue Tick Verified Badge Symbol in Your Mail Id to Build Confidence, Transparency and Brand Awareness in E-Mail Communications with Your Clients/Customers.</p>
                        <Button text={"Schedule Product Demo"} />
                    </div>

                    <div className='ml-0 mt-[20.5px] sm:mt-0 sm:ml-[54px] h-[218px] sm:h-[404px] w-[300px] sm:w-[556px]'>
                        <img src={beforeAfter} alt="" />
                    </div>
                </div>

            </div>

            {/* section 5 */}

            <div className='p-5 sm:px-[144px] m-auto'>

                <div className='w-full sm:w-[835px] m-auto'>
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

            {/* section 6 */}

            <div className='w-full border  bg-gradient-to-l from-[#0083FF] to-[#08245D] h-fit sm:h-[431px] flex flex-col sm:flex-row items-center px-[10px] pt-5 pb-[70px] sm:pb-0 sm:px-[144px]  sm:py-[21px]'>

                <h1 className={`${isLargeScreen ? 'hidden' : 'block'} text-xl text-center sm:text-[46px] font-semibold text-[#FFFFFF] leading-normal`}>
                    Why SISIPI® for VMC/BIMI ?
                </h1>

                <div className={`${isLargeScreen ? 'block' : 'hidden'} w-[135px] h-[140.78px] sm:w-[374px] sm:h-[390px] grid place-content-center`}>
                    <img src={whySI} alt="" />
                </div>

                <div className='m-auto w-full   sm:w-[702px] h-[160px] sm:h-[178px] ml-0 sm:ml-[76px] '>
                    <h1 className={`${isLargeScreen ? 'block' : 'hidden'} text-xl sm:text-[46px] font-semibold text-[#FFFFFF] leading-normal`}>
                        Why SISIPI® for VMC/BIMI ?
                    </h1>

                    <div className='flex flex-row w-[350px] sm:w-[702px] items-center mt-[12px] px-5 am:px-0'>
                        <div className={`${isLargeScreen ? 'hidden' : 'block'} flex-shrink-0 w-[135px] h-[140.78px] sm:w-[374px] sm:h-[390px]`}>
                            <img src={whySI} alt="" />
                        </div>

                        <div className='ml-[14px] sm:ml-[-14px]'>
                            <p className='w-[201px] sm:w-[702px] h-[160px] font-normal sm:font-medium text-sm sm:text-lg text-[#FFFFFF]'>
                                SISIPI Inc. (California Incorporated) and
                                SISIPI® Technologies Private Limited (INDIA Incorporation) , is the official partner Connector E-Mail Specification Provider in Association with OEM and BIMI. And has successfully deployed VMC/BIMI for  4500+ Brands World Wide.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            {/* Feature cards */}
            <div className='p-5 sm:px-[144px] m-auto'>

                <div className='grid-cols-2 grid gap-6  p-4'>
                    {
                        features.map((item) => (
                            <FeaturesCard data={item} />

                        ))
                    }
                </div>
            </div>

            {/* section 7 */}

            <div className='h-[160px] sm:h-[530px]'>
                <img src={sipibimi} alt="" />
            </div>

            {/* section 8 */}

            <div className='h-fit px-5 sm:px-[144px]  mt-[80px]'>
                <h1 className='text-[#0083FF] text-xl sm:text-[46px] font-bold m-auto text-center'>Before and After VMC/BIMI Deployment</h1>

                <div className='flex sm:flex-col m-auto justify-center gap-[74px]'>
                    <div className='mt-[40px]'>
                        <h2 className='text-[#0083FF] text-sm sm:text-lg font-bold '>Before VMC/BIMI</h2>
                        <div className={`${isLargeScreen ? 'block' : 'hidden'} mt-[12px]`} >
                            <img src={beforeDeploy} alt="" />
                        </div>
                    </div>

                    <div className='mt-[40px]'>
                        <h2 className='text-[#0083FF] text-sm sm:text-lg font-bold'>After VMC/BIMI</h2>
                        <div className={`${isLargeScreen ? 'block' : 'hidden'} mt-[12px]`} >
                            <img src={afterDeploy}alt="" />
                        </div>
                    </div>
                </div>
                <div className={`${isLargeScreen ? 'hidden' : ' block'} mt-[10px]`}>
                    <img src={beforeAfterSmall} alt="" />
                </div>

            </div>



            {/* section 9 */}

            <div className='bg-[#08245D] w-full h-fit px-5 pb-5 sm:pb-0 sm:h-[969px] mt-[80px]'>
                <h1 className='leading-normal text-xl sm:text-[46px] font-semibold text-center m-auto text-[#FFFFFF] w-[350px]  sm:w-[871px] pt-5 sm:pt-[62px]'>
                    Eligibility & Process to get Verified Mark Certificate (Business E-Mail Blue Tick)
                </h1>

                <div className='px-5 w-full sm:w-[1236px] h-[313px] sm:h-[611px] m-auto mt-5 sm:mt-[32px]'>
                    <img src={eligibility} alt="" className='w-full sm:w-fit h-full m-auto' />
                </div>

                <p className=' sm:font-bold text-sm sm:text-lg text-[#FFFFFF] text-center m-auto w-[90%] sm:w-[781px]'>
                    If your Brand Name or Brand Logo is not yet Trademarked, we will help you to get one with
                    our Top-Notch Dedicated Trademark Attorney Team.
                </p>

            </div>

            {/* section 10 */}
            <div className='m-auto'>
                <h1 className='text-[#0083FF] text-xl w-[240px] sm:w-full sm:text-[46px] font-bold m-auto text-center mt-5 sm:mt-[80px]'>
                    Articles on Verified Mark Certificate By BIMI
                </h1>

                <div className='flex mt-[11.95px] sm:mt-[40.7px] gap-[30.46px] w-full overflow-x-auto lg:overflow-x-visible'>
                <div className='flex gap-[12px] sm:gap-[64px] justify-center'>
                        {verified.map((item, index) => (
                            <div
                                key={index}
                                className='w-[134px] sm:w-[200px] grid place-content-center h-[70px] sm:h-[100px] rounded-lg p-4 shadow'
                                style={{ boxShadow: '0px 4px 70px 0px #0000000F' }}
                            >
                                <img src={item.image} alt="" />
                            </div>
                        ))}
                    </div>
                       
                    </div>
                  
                </div>
        


            {/* section 11 */}
            <Footer />
        </>
    );
}

export default Home;
