import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"
import { Card } from "@/components/ui/card"
import { Heart, Brain, Shield, Battery, Clock, Star } from "lucide-react"

export default function BenefitsPage() {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-zinc-100" />,
      title: "Healthier Skin",
      description: "Protects and nourishes your skin, maintaining its natural balance and vitality.",
    },
    {
      icon: <Brain className="h-8 w-8 text-zinc-100" />,
      title: "Stress Reduction",
      description: "Aromatherapeutic properties help reduce urban stress and promote wellbeing.",
    },
    {
      icon: <Shield className="h-8 w-8 text-zinc-100" />,
      title: "Environmental Protection",
      description: "Creates a barrier against pollution, UV rays, and other environmental stressors.",
    },
    {
      icon: <Battery className="h-8 w-8 text-zinc-100" />,
      title: "Long-lasting Energy",
      description: "Keeps your skin energized and protected throughout the entire day.",
    },
    {
      icon: <Clock className="h-8 w-8 text-zinc-100" />,
      title: "Time-Saving",
      description: "Quick-absorbing formula fits seamlessly into your daily routine.",
    },
    {
      icon: <Star className="h-8 w-8 text-zinc-100" />,
      title: "Premium Quality",
      description: "Made with high-grade ingredients for maximum effectiveness and safety.",
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-zinc-100">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-6">Benefits of Urban Shield</h1>
        <p className="text-xl text-zinc-400 mb-12">
          Experience the transformative benefits of Urban Shield in your daily skincare routine.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 p-6">
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h2 className="text-xl font-semibold ml-4 text-white">
                  {benefit.title}
                </h2>
              </div>
              <p className="text-zinc-400">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

