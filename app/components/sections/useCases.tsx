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
                    <div className={`w-[633px] flex flex-col gap-y-6 items-center`}>
                        <div className={`py-2 px-3 rounded-lg border border-gray-400/50 flex items-center justify-center font-sans font-medium`}>Use Cases</div>
                        <div className={`text-[36px] font-medium font-poppins text-center tracking-tight leading-[1.2]`}>The Assistant That Actually Does the Work Across All Your Tools</div>
                        <div className={`text-neutral-500 font-poppins text-center text-[16px]`}>The Incredible Assistant connects to your tools (Gmail, Notion, Sheets, HubSpot, Slack, Calendar, and more) and performs real tasks — not just chats. It drafts, summarizes, researches, updates, files, organizes, schedules, posts, sends, and executes.</div>
                    </div>

                    <div className={`h-[564px] w-[1126px] flex gap-x-[50px]`}>
                        <div className={`flex-1 h-full`}>
                            
                        </div>
                        <div className={`relative w-[640px] h-full overflow-hidden`}>
                            <div className={`absolute inset-0 use-case-bg`}/>
                            <div className={`w-full`}>
                                <div className={`absolute h-full w-full flex flex-col p-4`}>
                                    <div className={`self-end p-3 bg-white/70 w-1/2 rounded-xl font-sans text-[14px] shadow-[0_6px_16px_rgba(0,0,0,0.08)]`}>
                                        Hey Incredible! Add 50 - Subsheets to my weekly tracker spreadsheets
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