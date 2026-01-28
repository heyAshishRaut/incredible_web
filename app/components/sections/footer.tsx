import Image from "next/image"
import logo from "@/public/icons/footerLogo.png"
import name from  "@/public/icons/img_2.png"

const Footer = () => {
    return (
        <div className={`overflow-hidden relative w-full`}>
            <div className={`hidden lg:block w-full absolute inset-0 footerImg-bg z-10`}/>
            <div className={`
            h-full
            w-full
            top-14
            px-4 
            mx-auto
            md:max-w-[960px] 
            md:px-6 
            lg:max-w-[1240px] 
            lg:px-25 
            xl:max-w-[1320px] 
            xl:px-25
            py-10
            md:py-15
            lg:py-25
            `}>
                <div className={`relative h-[787px] w-full`}>

                    <div className={`relative z-20 w-full md:h-[360px] flex flex-col gap-y-3 md:flex-row lg:gap-x-6`}>
                        <div className={`p-4 h-[360px] md:h-full w-full md:w-1/3 bg-black rounded-[14px] flex flex-col justify-between items-start`}>
                            <div className={`w-[80%] flex flex-col gap-y-1.5`}>
                                <div className={`relative h-8 w-34`}>
                                    <Image src={logo} alt=" " fill priority className={`object-cover object-center`}/>
                                </div>
                                <div className={`text-neutral-400 font-sans text-[16px]`}>Incredible goes beyond conversation to become an AI assistant that actually does work for you.</div>
                            </div>

                            <div className={`w-full flex flex-col gap-y-1.5`}>
                                <input placeholder="example@gmail.com" className={`font-sans px-3 bg-white w-full py-2 rounded-lg`}/>
                                <div className={`py-2 rounded-lg bg-neutral-500/60 text-white font-sans text-center`}>Contact Us</div>
                            </div>
                        </div>

                        <div className={`p-6 h-[360px] md:h-full w-full md:w-2/3 rounded-[14px] bg-[#e5e5e5] flex flex-col justify-between`}>
                            <div className={`text-[14px] md:text-[16px] w-full flex justify-between font-sans text-neutral-400`}>
                                <div className={`flex flex-col gap-y-1`}>
                                    <div className={`font-medium text-black mb-3`}>PRODUCT</div>
                                    <div>Assistant</div>
                                    <div>Model</div>
                                    <div>Contact</div>
                                </div>

                                <div className={`flex flex-col gap-y-1`}>
                                    <div className={`font-medium text-black mb-3`}>OTHER</div>
                                    <div>About</div>
                                    <div>Affiliates</div>
                                    <div>Blogs</div>
                                </div>

                                <div className={`flex flex-col gap-y-1`}>
                                    <div className={`font-medium text-black mb-3`}>LEGAL</div>
                                    <div>Terms & Condition</div>
                                    <div>Privacy Policy</div>
                                </div>
                            </div>

                            <div className={`h-7 w-full flex justify-between items-center`}>
                                <div className={`text-[14px] md:text-[16px] text-neutral-400 font-sans`}>Incredible, all rights reserved, 2025</div>
                                <div className={`h-full flex gap-x-1.5`}>
                                    <div className={`h-full aspect-square bg-neutral-300 rounded-lg`}></div>
                                    <div className={`h-full aspect-square bg-neutral-300 rounded-lg`}></div>
                                    <div className={`h-full aspect-square bg-neutral-300 rounded-lg`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer