import UseCasesQnA from "@/app/components/useCasesQnA"

const UseCases = () => {
    return (
        <div className={`w-full min-h-[1079px]`}>
            <div className={`
            h-full
            w-full
            top-14
            px-4 
            mx-auto
            md:max-w-[960px] 
            md:px-6 
            lg:max-w-[1240px] 
            lg:px-8 
            xl:max-w-[1320px] 
            xl:px-0
            `}>
                <div className={`w-full h-full py-[100px] flex flex-col gap-y-[80px] items-center`}>
                    <div className={`w-full lg:w-[900px] flex flex-col gap-y-6 items-center`}>
                        <div className={`py-2 px-3 rounded-lg border border-gray-400/50 flex items-center justify-center font-sans font-medium`}>Use Cases</div>
                        <div className={`heading-1 font-poppins text-center tracking-tight leading-[1.2]`}>The Assistant That Actually Does the Work Across All Your Tools</div>
                        <div className={`text-neutral-500 font-poppins text-justify md:text-center text-[16px]`}>The Incredible Assistant connects to your tools (Gmail, Notion, Sheets, HubSpot, Slack, Calendar, and more) and performs real tasks — not just chats. It drafts, summarizes, researches, updates, files, organizes, schedules, posts, sends, and executes.</div>
                    </div>

                    <div className={`w-full lg:w-[1126px] flex flex-col gap-y-[50px] lg:gap-y-0 lg:flex-row gap-x-[50px]`}>
                        <div className={`order-2 lg:order-1 flex-1 h-full lg:h-[564px]`}>
                            <UseCasesQnA/>
                        </div>

                        <div className={`min-h-[564px] w-full lg:w-[640px] order-1 rounded-[14px] relative overflow-hidden`}>
                            <div className={`absolute inset-0 use-case-bg`}/>
                            <div className={`h-full w-full`}>
                                <div className={`absolute h-full w-full flex flex-col p-4`}>
                                    <div className={`self-end p-3 bg-white/50 w-[80%] md:w-1/2 rounded-[12px] font-sans text-[15px] shadow-[0_6px_16px_rgba(0,0,0,0.08)]`}>
                                        Hey Incredible! Add 50 - Sub-sheets to my weekly tracker spreadsheets
                                    </div>
                                    <div className={`mt-10 p-[6px] rounded-[12px] w-full md:w-[477px] h-[184px] bg-white/50 flex flex-col gap-y-[6px]`}>
                                        <div className={`w-full h-11 bg-black/5 rounded-[6px] py-3 px-4 flex gap-x-3 items-center`}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.9422 12.3172L14.1922 16.0672C14.0749 16.1845 13.9159 16.2503 13.75 16.2503C13.5841 16.2503 13.4251 16.1845 13.3078 16.0672C13.1905 15.9499 13.1247 15.7909 13.1247 15.625C13.1247 15.4591 13.1905 15.3001 13.3078 15.1828L15.9914 12.5H10C7.84581 12.4977 5.78051 11.641 4.25727 10.1177C2.73403 8.59449 1.87727 6.52919 1.875 4.375C1.875 4.20924 1.94085 4.05027 2.05806 3.93306C2.17527 3.81585 2.33424 3.75 2.5 3.75C2.66576 3.75 2.82473 3.81585 2.94194 3.93306C3.05915 4.05027 3.125 4.20924 3.125 4.375C3.12707 6.19773 3.85206 7.94521 5.14092 9.23408C6.42979 10.5229 8.17727 11.2479 10 11.25H15.9914L13.3078 8.56719C13.1905 8.44991 13.1247 8.29085 13.1247 8.125C13.1247 7.95915 13.1905 7.80009 13.3078 7.68281C13.4251 7.56554 13.5841 7.49965 13.75 7.49965C13.9159 7.49965 14.0749 7.56554 14.1922 7.68281L17.9422 11.4328C18.0003 11.4909 18.0464 11.5598 18.0779 11.6357C18.1093 11.7115 18.1255 11.7929 18.1255 11.875C18.1255 11.9571 18.1093 12.0385 18.0779 12.1143C18.0464 12.1902 18.0003 12.2591 17.9422 12.3172Z" fill="black"/>
                                            </svg>
                                            <div className={`font-sans`}>Text</div>
                                        </div>
                                        <div className={`flex-1 w-full 
                                        [mask-image:linear-gradient(to_top,transparent,black_70%,black)]
                                        [-webkit-mask-image:linear-gradient(to_top,transparent,black_70%,black)]
                                        `}>
                                            <div className={`px-2 h-full w-full grid grid-cols-3 md:grid-cols-4 grid-rows-3 gap-[6px]`}>
                                                {Array.from({ length: 12 }).map((_, index) => (
                                                    <div key={index} className={`flex items-center justify-center gap-x-1 md:gap-x-2 px-2 bg-white border border-gray-300 rounded-full`}>
                                                        <svg className={`h-5 w-5 md:h-6 md:w-6`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clip-path="url(#clip0_454_14070)">
                                                                <path d="M9.24783 9.95288H7.29221V8.85743H9.24897V9.95345L9.24783 9.95288ZM11.2046 2.75415V6.19714H14.6476L11.2046 2.75415ZM11.9867 8.85743H10.03V9.95345H11.9867V8.85743ZM11.9867 10.7356H10.03V11.8316H11.9867V10.7356ZM14.647 6.48406V15.5873C14.647 16.1061 14.227 16.5261 13.7082 16.5261H5.57014C5.44685 16.5261 5.32478 16.5018 5.21088 16.4547C5.09698 16.4075 4.99349 16.3383 4.90631 16.2512C4.73026 16.0751 4.63135 15.8363 4.63135 15.5873V3.69294C4.63135 3.1742 5.05139 2.75415 5.57014 2.75415H10.9171V6.48406H14.647ZM12.7689 8.0753H6.50893V12.6137H12.7694V8.07472L12.7689 8.0753ZM9.24783 10.7356H7.29221V11.8316H9.24897V10.7356H9.24783Z" fill="#20A464"/>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_454_14070">
                                                                    <rect width="13.772" height="13.772" fill="white" transform="translate(2.75439 2.75439)"/>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        <div className={`text-[12px] font-sans`}>Add Sheet</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`absolute w-full bottom-0 left-1/2 -translate-x-1/2 p-4`}>
                                        <div className={`p-[10px] w-full md:w-full h-[148px] bg-white/20 border border-white  rounded-[33px]`}>
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
                </div>
            </div>
        </div>
    )
}

export default UseCases