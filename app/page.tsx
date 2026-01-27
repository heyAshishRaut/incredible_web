import HeroSection from "@/app/components/sections/heroSection"
import UseCases from "@/app/components/sections/useCases"

export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection/>
            <UseCases/>
        </div>
    )
}
