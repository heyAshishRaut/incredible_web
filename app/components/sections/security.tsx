import security1 from "@/public/icons/security1.png"
import security2 from "@/public/icons/security2.png"
import security3 from "@/public/icons/security3.png"
import Image from "next/image"

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
                <div className={`h-full w-full flex flex-col items-center gap-y-20`}>
                    <div className={`w-full lg:w-[900px] flex flex-col gap-y-6 items-center`}>
                        <div
                            className={`py-2 px-3 rounded-lg border border-gray-400/50 flex items-center justify-center font-sans font-medium`}>
                            Security
                        </div>
                        <div className={`heading-1 font-poppins text-center tracking-tight leading-[1.2]`}>
                            Security. Reliable. Trusted
                        </div>
                        <div className={`text-neutral-500 font-poppins text-justify md:text-center text-[16px]`}>
                            Enforcement of security procedures cross organization High-availability architecture + live
                            status monitoring No-train by default with regional data options (EU / US) Optional DPA and
                            custom tenant deployments on request
                        </div>
                    </div>

                    <div className={`w-full flex flex-col lg:flex-row`}>
                        <div className={`w-full lg:w-1/3 h-[234px] border border-gray-300 flex flex-col items-center justify-center gap-y-7`}>
                            <Image src={security1} alt="" height={100} width={100}/>
                            <div className={`font-sans text-[16px]`}>Lightweight, fast, and simple.</div>
                        </div>

                        <div className={`w-full lg:w-1/3 h-[234px] border border-gray-300 flex flex-col items-center justify-center gap-y-7`}>
                            <Image src={security2} alt="" height={100} width={100}/>
                            <div className={`font-sans text-[16px]`}>SOC 2 Type II compliance (In progress, Vanta).
                            </div>
                        </div>

                        <div className={`w-full lg:w-1/3 h-[234px] border border-gray-300  flex flex-col items-center justify-center gap-y-7`}>
                            <Image src={security3} alt="" height={100} width={100}/>
                            <div className={`font-sans text-[16px]`}>ISO 27001 compliance (In progress, Vanta)</div>
                        </div>
                    </div>

                    <div className={`h-21 w-full md:w-[436px] text-gray-400 font-sans text-[16px] flex flex-col items-center gap-y-3`}>
                        <div className={`text-center`}>
                            We do not train our models on customer data and we use isolated processing environments.
                        </div>
                        <div>
                            Visit <span className={`font-medium text-black`}>trust.incredible.one</span> for additional info
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security