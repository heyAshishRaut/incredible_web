import start from "@/public/backgrounds/startUsingAI.png"
const Security = () => {
    return (
        <div className={`w-full`}>
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
                <div className={`rounded-4xl relative overflow-hidden w-full h-[450px] md:min-h-[377px]`}>
                    <div style={{backgroundImage: `url(${start.src})`}} className={`absolute bg-no-repeat inset-0 z-0 bg-cover bg-center lg:bg-contain`}>
                        <div className={`absolute inset-0 z-20 text-white font-sans p-11`}>
                            <div className={`h-full w-full flex flex-col gap-y-3 items-center justify-center`}>
                                <div className={`text-[28px] lg:text-[36px] leading-none text-white text-center`}>Start using AI that actually work</div>
                                <div className={`w-full md:w-[600px] text-center text-neutral-400 text-[16px]`}>Whether you want to get your work done faster, or build the next agentic product, Incredible is the platform that makes it possible.</div>
                                <div className={`mt-3 flex text-black gap-x-3 text-[14px] lg:text-[16px]`}>
                                    <div className={`bg-white py-2 px-4 rounded-full`}>Try AI Assistant</div>
                                    <div className={`bg-black text-white py-2 px-5 rounded-full`}>Explore AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security