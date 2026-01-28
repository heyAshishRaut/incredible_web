const Features = () => {
    return (
        <div className={`w-full bg-gray-100`}>
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
            bg-white
            `}>
                <div className={`h-full w-full flex flex-col items-center gap-y-20`}>
                    <div className={`w-full lg:w-[900px] flex flex-col gap-y-6 items-center`}>
                        <div className={`py-2 px-3 rounded-lg border border-gray-400/50 flex items-center justify-center font-sans font-medium`}>
                            Features
                        </div>
                        <div className={`heading-1 font-poppins text-center tracking-tight leading-[1.2]`}>
                            Why Teams choose Incredible
                        </div>
                        <div className={`text-neutral-500 font-poppins text-justify md:text-center text-[16px]`}>
                            World-class Agentic AI Models capable of thinking, planning and acting.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features