import HeroSection from "@/app/components/sections/heroSection"
import UseCases from "@/app/components/sections/useCases"
import Integration from "@/app/components/sections/integration"
import Integration2 from "@/app/components/sections/integration2"
import Build from "@/app/components/sections/build"
import Features from "@/app/components/sections/features"
import Security from "@/app/components/sections/security"
import StartUsingAI from "@/app/components/sections/startUsingAI"
import Faq from "@/app/components/sections/faq"
import Footer from "@/app/components/sections/footer"

export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection/>
            <UseCases/>
            <Integration/>
            <Integration2/>
            <Build/>
            <Features/>
            <Security/>
            <StartUsingAI/>
            <Faq/>
            <Footer/>
        </div>
    )
}
