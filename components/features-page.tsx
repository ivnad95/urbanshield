import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"
import { Card } from "@/components/ui/card"
import { ShieldCheck, Droplets, Wind, Sun, Moon, Zap } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-zinc-100" />,
      title: "Advanced Pollution Defense",
      description:
        "Creates an invisible shield against urban pollutants and environmental toxins, protecting your skin from harmful particles.",
    },
    {
      icon: <Droplets className="h-8 w-8 text-zinc-100" />,
      title: "Fast-Absorbing Formula",
      description:
        "Our non-greasy formula absorbs quickly, providing immediate protection without leaving a residue on your skin.",
    },
    {
      icon: <Wind className="h-8 w-8 text-zinc-100" />,
      title: "Urban-Inspired Scent",
      description:
        "A sophisticated fragrance that captures the essence of the modern metropolis, energizing your senses throughout the day.",
    },
    {
      icon: <Sun className="h-8 w-8 text-zinc-100" />,
      title: "Day-Long Protection",
      description: "Designed to withstand the rigors of city life, providing continuous defense from morning to night.",
    },
    {
      icon: <Moon className="h-8 w-8 text-zinc-100" />,
      title: "Overnight Repair",
      description:
        "Works while you sleep to repair and rejuvenate your skin, combating the effects of daily urban exposure.",
    },
    {
      icon: <Zap className="h-8 w-8 text-zinc-100" />,
      title: "Antioxidant Boost",
      description:
        "Packed with powerful antioxidants to neutralize free radicals and prevent premature aging caused by urban pollution.",
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-zinc-100">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-6">Features of Urban Shield</h1>
        <p className="text-xl text-zinc-400 mb-12">
          Discover the innovative features that make Urban Shield the ultimate defense for your skin in the urban
          jungle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 p-6">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h2 className="text-xl font-semibold ml-4 text-white">
                  {feature.title}
                </h2>
              </div>
              <p className="text-zinc-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

