import integration from "@/public/backgrounds/integration.png"
import integration1 from "@/public/icons/integration1.png"
import Image from "next/image"

const Integration = () => {
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
                <div className={`h-full w-full flex flex-col items-center gap-y-20`}>
                    <div className={`w-full lg:w-[900px] flex flex-col gap-y-6 items-center`}>
                        <div className={`py-2 px-3 rounded-lg border border-gray-400/50 flex items-center justify-center font-sans font-medium`}>Integration</div>
                        <div className={`heading-1 font-poppins text-center tracking-tight leading-[1.2]`}>Integrations & MCP Support</div>
                        <div className={`text-neutral-500 font-poppins text-justify md:text-center text-[16px]`}>Incredible connects to the tools your team already uses. From calendars, to project management, to collaboration platforms.</div>
                    </div>

                    <div className={`w-full relative overflow-hidden`}>
                        <Image src={integration} alt={`Integration`} priority />
                        <div className={`mt-3 flex flex-col md:flex-row justify-center items-center gap-y-4 py-[27px]`}>
                            <div className={`flex items-center gap-x-2 h-9 w-[280px]`}>
                                <div className={`h-full`}>
                                    <Image src={integration1} alt={``} height={48} width={48} />
                                </div>
                                <div className={`font-sans text-[14px] text-neutral-400`}>Ingests your apps through secure permissions</div>
                            </div>

                            <div className={`flex items-center gap-x-2 h-9 w-[280px]`}>
                                <div className={`h-full`}>
                                    <Image src={integration1} alt={``} height={48} width={48} />
                                </div>
                                <div className={`font-sans text-[14px] text-neutral-400`}>Ingests your apps through secure permissions</div>
                            </div>

                            <div className={`flex items-center gap-x-2 h-9 w-[280px]`}>
                                <div className={`h-full`}>
                                    <Image src={integration1} alt={``} height={48} width={48} />
                                </div>
                                <div className={`font-sans text-[14px] text-neutral-400`}>Ingests your apps through secure permissions</div>
                            </div>
                        </div>
                    </div>

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
                        <span>AI Assistant</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Integration