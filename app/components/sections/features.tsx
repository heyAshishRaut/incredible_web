import Image from "next/image"
import feature1 from "@/public/backgrounds/features1.png"
import feature2 from "@/public/icons/feature2.png"
import feature4 from "@/public/backgrounds/feature4.png"
import feature5 from "@/public/backgrounds/feature5.png"
import feature6 from "@/public/backgrounds/feature6.png"

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
            `}>
                <div className={`pt-10 md:pt-15 lg:pt-25 bg-white h-full w-full flex flex-col items-center`}>
                    <div className={`mb-20 w-full lg:w-[900px] flex flex-col gap-y-6 items-center`}>
                        <div className={`py-2 px-3 rounded-lg border border-gray-400/50 flex items-center justify-center font-sans font-medium`}>
                            Features
                        </div>
                        <div className={`px-10 md:px-0  heading-1 font-poppins text-center tracking-tight leading-[1.2]`}>
                            Why Teams choose Incredible
                        </div>
                        <div className={`px-10 md:px-0  text-neutral-500 font-poppins text-justify md:text-center text-[16px]`}>
                            World-class Agentic AI Models capable of thinking, planning and acting.
                        </div>
                    </div>
                    <div className={`w-full flex flex-col gap-y-2 md:gap-y-0 md:flex-row`}>
                        <div className={`bg-[#efefef] w-full md:w-1/2 h-[484px] flex flex-col`}>
                            <div className={`font-sans w-full py-4 px-8 flex flex-col gap-y-3 justify-center`}>
                                <div className={`text-[20px] font-medium`}>Unmatched function calling accuracy</div>
                                <div className={`text-[16px] text-neutral-400`}>Models that think before they act. Sophisticated problem-solving and logical decision-making for complex challenges</div>
                            </div>
                            <div className={`relative flex-1 w-full overflow-hidden`}>
                                <Image src={feature1} alt="" fill priority className={`object-cover object-center`}/>
                            </div>
                        </div>

                        <div className={`bg-[#efefef] w-full md:w-1/2 h-[484px] flex flex-col`}>
                            <div className={`font-sans w-full h-[130px] py-4 px-8 flex flex-col gap-y-3 justify-center`}>
                                <div className={`text-[20px] font-medium`}>Easy to build and deploy</div>
                                <div className={`text-[16px] text-neutral-400`}>Converting raw data into actionable insights and clean, usable formats</div>
                            </div>
                            <div className={`flex-1 w-full flex items-center justify-center`}>
                                <Image src={feature2} alt="" height={157} width={276} className={`object-cover object-center`}/>
                            </div>
                        </div>
                    </div>

                    <div className={`relative h-[488px] w-full overflow-hidden`}>
                        <div className={`absolute inset-0 z-10 feature3-bg`}/>
                        <div className={`w-full md:w-[480px] absolute inset-0 z-20 p-10 flex flex-col justify-between`}>
                            <div className={`flex flex-col gap-y-3`}>
                                <div className={`text-white font-sans font-medium text-[20px]`}>Built for agents, not jus chat</div>
                                <div className={`font-sans text-[16px] text-neutral-400`}>
                                    Autonomous execution of multi-step processes
                                </div>
                            </div>

                            <div className={`flex flex-col gap-y-4`}>
                                <div className={`text-neutral-400 text-[16px] font-sans`}>
                                    Using Incredible.one has been a game-changer. It helps me organize and execute tasks faster than ever . It’s like having a super-intelligent
                                    co-worker who never misses a beat.
                                </div>
                                <div className={`flex items-center gap-x-3`}>
                                    <div className={`h-7 w-7 rounded-full bg-neutral-500`}></div>
                                    <div className={`font-sans text-white text-[16px]`}>Lia Michael</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`w-full flex flex-col lg:flex-row`}>
                        <div className={`w-full lg:w-1/3 h-full`}>
                            <div className={`w-full h-[146px] px-[33px] py-[28px] flex flex-col gap-y-3`}>
                                <div className={`font-sans font-medium text-[20px]`}>Lightweight, fast, and simple</div>
                                <div className={`font-sans text-[16px] text-neutral-400`}>
                                    Converting raw data into actionable insights and clean, usable formats
                                </div>
                            </div>
                            <div className={`w-full h-[373px] relative overflow-hidden`}>
                                <Image src={feature4} alt="" fill priority className={`object-cover object-center`}/>
                            </div>
                        </div>

                        <div className={`w-full lg:w-1/3 h-full`}>
                            <div className={`w-full h-[146px] px-[33px] py-[28px] flex flex-col gap-y-3`}>
                                <div className={`font-sans font-medium text-[20px]`}>Lightweight, fast, and simple</div>
                                <div className={`font-sans text-[16px] text-neutral-400`}>
                                    Converting raw data into actionable insights and clean, usable formats
                                </div>
                            </div>
                            <div className={`w-full h-[373px] relative overflow-hidden`}>
                                <Image src={feature5} alt="" fill priority className={`object-cover object-center`}/>
                            </div>
                        </div>

                        <div className={`w-full lg:w-1/3 h-full`}>
                            <div className={`w-full h-[146px] px-[33px] py-[28px] flex flex-col gap-y-3`}>
                                <div className={`font-sans font-medium text-[20px]`}>Lightweight, fast, and simple</div>
                                <div className={`font-sans text-[16px] text-neutral-400`}>
                                    Converting raw data into actionable insights and clean, usable formats
                                </div>
                            </div>
                            <div className={`w-full h-[373px] relative overflow-hidden`}>
                                <Image src={feature6} alt="" fill priority className={`object-cover object-center`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features