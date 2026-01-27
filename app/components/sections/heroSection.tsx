import Image from "next/image"
import navbarOrgLogo from "@/public/icons/navbarOrgLogo.png"

const HeroSection = () => {
    return (
        <div className={`relative overflow-hidden w-full min-h-[90vh] lg:h-[960px]`}>

            <div className={`hero-bg absolute inset-0`}/>

            <div className={`w-full`}>
                <div className={`
                absolute
                w-full
                text-[11px]
                md:text-[14px]
                font-sans
                font-medium
                flex
                justify-center
                items-center
                h-11
                bg-black
                text-white
                `}>We optimize for the only thing that matters: How many tasks a model solves.
                </div>
            </div>

            <div className={`
            absolute
            h-full
            w-full
            top-14
            px-4 
            flex
            flex-col
            left-1/2
            -translate-x-1/2
            md:max-w-[960px] 
            md:px-6 
            lg:max-w-[1240px] 
            lg:px-8 
            xl:max-w-[1320px] 
            xl:px-0
            `}>
                {/* Navbar */}
                <div className={`
                h-11
                w-full
                flex
                items-center
                justify-between
                `}>
                    <Image
                        src={navbarOrgLogo}
                        alt="Navbar Org Logo"
                        priority
                    />

                    <ul className={`
                    body-text
                    h-full 
                    hidden
                    md:flex 
                    items-center 
                    bg-[#F5F5F5]
                    gap-x-[22px]
                    px-[15px]
                    py-[13px]
                    rounded-xl
                    font-sans
                    cursor-default
                    `}>
                        <li className={`hover:text-blue-700`}>About</li>
                        <li className={`hover:text-blue-700`}>Assistant</li>
                        <li className={`hover:text-blue-700`}>Models</li>
                        <li className={`hover:text-blue-700`}>Affiliates</li>
                        <li className={`hover:text-blue-700`}>Blog</li>
                        <li className={`hover:text-blue-700`}>Contact</li>
                    </ul>

                    <div className={`
                    button-text 
                    h-full 
                    bg-black 
                    text-white
                    flex
                    items-center
                    justify-center
                    px-3
                    md:px-5
                    py-3
                    rounded-xl
                    `}>
                        <span className={`inline md:hidden`}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M140-254.62v-59.99h680v59.99H140ZM140-450v-60h680v60H140Zm0-195.39v-59.99h680v59.99H140Z"/></svg></span>
                        <span className={`hidden md:inline`}>AI Assistant</span>
                    </div>
                </div>

                {/* Hero Section */}
                <div className={`w-full flex-1 flex mt-30 justify-center`}>
                    <div className={`flex flex-col gap-y-[34px]`}>
                        <div className={`md:min-h-[190px] w-full md:w-[740px] flex flex-col gap-y-[14px]`}>
                            <div className={`text-center heading-1`}>Agentic AI Models built for  Autonomous Deep Work.</div>
                            <div className={`text-center text-[17px] font-medium font-sans text-[#464646]`}>Powered by AgentMAX - build reliable agents, workflows, and automation tools that complete real work across apps.</div>
                        </div>

                        <div className={`md:h-[190px] w-full md:w-[740px] flex justify-center items-end`}>
                            <div className={`p-[10px] w-full md:w-[562px] h-[148px] bg-white/20 border border-white  rounded-[33px]`}>
                                <div className={`p-3 h-full w-full border border-orange-400 bg-white rounded-[23px] flex flex-col gap-y-6`}>
                                    <div className={`p-2 h-1/2 w-full font-sans flex items-center text-[#464646]/50`}>Ask, research, or do work</div>
                                    <div className={`w-full h-1/2 flex items-center justify-between`}>
                                        <div className={`h-full flex gap-x-2`}>
                                            <div className={`h-full aspect-square border border-[#464646]/30 rounded-xl flex items-center justify-center`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z"/></svg>
                                            </div>
                                            <div className={`h-full border border-[#464646]/30 rounded-xl flex items-center justify-center gap-x-3 py-1 px-3`}>
                                                <svg role="img" viewBox="0 0 24 24" className={`h-4 w-4`} xmlns="http://www.w3.org/2000/svg"><title>Notion</title><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>
                                                <svg role="img" viewBox="0 0 24 24" className={`h-4 w-4`} xmlns="http://www.w3.org/2000/svg"><title>Notion</title><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>
                                                <svg role="img" viewBox="0 0 24 24" className={`h-4 w-4`} xmlns="http://www.w3.org/2000/svg"><title>Notion</title><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>
                                            </div>
                                        </div>

                                        <div className={`h-full flex gap-x-4`}>
                                            <div className={`h-full flex items-center justify-center gap-x-2`}>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.8811 5.83333H9.33335C9.05721 5.83333 8.83335 5.60948 8.83335 5.33333V2.1057C8.83335 1.61505 8.2003 1.41792 7.92175 1.82183L2.70728 9.3828C2.47853 9.71449 2.71597 10.1667 3.11889 10.1667H6.66669C6.94283 10.1667 7.16669 10.3905 7.16669 10.6667V13.8943C7.16669 14.385 7.79974 14.5821 8.07829 14.1782L13.2928 6.6172C13.5215 6.28551 13.2841 5.83333 12.8811 5.83333Z" stroke="#E36323" stroke-width="1.5" stroke-linejoin="round"/>
                                                </svg>
                                                <div className={`text-[14px] font-sans font-medium`}>Automatic</div>
                                            </div>
                                            <div className={`h-full bg-black aspect-square rounded-xl flex items-center justify-center`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M450-180v-485.08L222.15-437.23 180-480l300-300 300 300-42.15 42.77L510-665.08V-180h-60Z"/></svg>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection