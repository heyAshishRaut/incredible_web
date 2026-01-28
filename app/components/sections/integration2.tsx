const sidebar = [
    {
        name: "Text Generation"
    },
    {
        name: "Web Search"
    },
    {
        name: "Deep Research"
    },
    {
        name: "Image Generation"
    },
    {
        name: "Video Generation"
    },
    {
        name: "OCR + File Intelligence"
    },
    {
        name: "Agents with Tools"
    },
    {
        name: "Agents with MCP"
    },
    {
        name: "Multi-Step Workflows"
    },
]

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
                        <div className={`heading-1 font-poppins text-center tracking-tight leading-[1.2]`}>Build with agentic intelligence — in minutes, not months.</div>
                        <div className={`text-neutral-500 font-poppins text-justify md:text-center text-[16px]`}>A production-ready API with reliable function calling, deep reasoning, high throughput, and affordable token pricing.</div>
                    </div>

                    <div className={`w-full lg:w-[816px] flex gap-x-8`}>
                        <div className={`hidden md:flex self-start p-1 bg-neutral-100 rounded-2xl md:w-[224px] flex-col gap-y-[2px]`}>
                            {
                                sidebar.map((e, i) => (
                                    <div className={`cursor-default font-sans text-neutral-500 h-[45px] w-[45px] md:w-full flex items-center justify-center hover:bg-white rounded-xl`}>
                                        <span>{e.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`relative p-3 w-[560px] h-[508px]`}>
                            <div className={`absolute rounded-2xl inset-0 integration2-bg`}/>
                            <div className={`absolute inset-0 z-10 p-5 h-full w-full`}>
                                <div className={`h-full w-full flex flex-col justify-between`}>
                                    <div className={`w-full flex justify-between`}>
                                        <div className={`flex gap-x-2`}>
                                            <div className={`h-4 w-4 rounded-full bg-gray-100`}></div>
                                            <div className={`h-4 w-4 rounded-full bg-gray-100`}></div>
                                            <div className={`h-4 w-4 rounded-full bg-gray-100`}></div>
                                        </div>

                                        <div className={`w-1/2 bg-gray-100 rounded-full h-4`}></div>

                                        <div className={`hidden md:invisible md:flex gap-x-2`}>
                                            <div className={`h-4 w-4 rounded-full bg-gray-100`}></div>
                                            <div className={`h-4 w-4 rounded-full bg-gray-100`}></div>
                                            <div className={`h-4 w-4 rounded-full bg-gray-100`}></div>
                                        </div>
                                    </div>

                                    <div className={`shadow-[0_10px_30px_rgba(0,0,0,0.14)] w-full h-[46px] bg-white rounded-xl flex items-center justify-center gap-x-2`}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.055 3.24C12.9439 2.84692 12.7075 2.50087 12.3816 2.25449C12.0558 2.0081 11.6585 1.87485 11.25 1.875H8.75C7.89167 1.875 7.16667 2.4525 6.945 3.24M13.055 3.24C13.1008 3.40167 13.125 3.57333 13.125 3.75C13.125 3.91576 13.0592 4.07473 12.9419 4.19194C12.8247 4.30915 12.6658 4.375 12.5 4.375H7.5C7.33424 4.375 7.17527 4.30915 7.05806 4.19194C6.94085 4.07473 6.875 3.91576 6.875 3.75C6.875 3.57333 6.9 3.40167 6.945 3.24M13.055 3.24C13.5933 3.28083 14.1283 3.33167 14.6608 3.39333C15.5775 3.5 16.25 4.29083 16.25 5.21417V16.25C16.25 16.7473 16.0525 17.2242 15.7008 17.5758C15.3492 17.9275 14.8723 18.125 14.375 18.125H5.625C5.12772 18.125 4.65081 17.9275 4.29917 17.5758C3.94754 17.2242 3.75 16.7473 3.75 16.25V5.21417C3.75 4.29083 4.42167 3.5 5.33917 3.39333C5.87336 3.33148 6.40875 3.28036 6.945 3.24" stroke="#4D4D4D" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <div className={`text-[14px] text-neutral-500 font-sans`}>Copy Code</div>
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

export default Integration