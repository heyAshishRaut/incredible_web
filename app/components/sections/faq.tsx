import FaqQna from "@/app/components/faqQna";

const Faq = () => {
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
                <div className={`h-full w-full flex flex-col gap-y-20 items-center`}>
                    <div className={`w-full lg:w-[900px] flex flex-col gap-y-6 items-center`}>
                        <div className={`py-2 px-3 rounded-lg border border-gray-400/50 flex items-center justify-center font-sans font-medium`}>
                            FAQ
                        </div>
                        <div className={`px-10 md:px-0  heading-1 font-poppins text-center tracking-tight leading-[1.2]`}>
                            Frequently Asked Questions
                        </div>
                    </div>
                    <div className={`w-full md:w-[80%] lg:w-[740px] mx-auto flex justify-center`}>
                        <FaqQna/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq