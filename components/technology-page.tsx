import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"
import { Card } from "@/components/ui/card"
import { Microscope, FlaskConical, Leaf, Code, CircuitBoard, Atom } from "lucide-react"

export default function TechnologyPage() {
  const technologies = [
    {
      icon: <Microscope className="h-8 w-8 text-zinc-100" />,
      title: "Advanced Research",
      description: "Developed through years of scientific research and clinical testing.",
    },
    {
      icon: <FlaskConical className="h-8 w-8 text-zinc-100" />,
      title: "Innovative Formula",
      description: "Proprietary blend of active ingredients for maximum protection.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-zinc-100" />,
      title: "Natural Ingredients",
      description: "Combined with cutting-edge synthetic compounds for optimal results.",
    },
    {
      icon: <Code className="h-8 w-8 text-zinc-100" />,
      title: "Smart Delivery",
      description: "Targeted delivery system ensures maximum effectiveness.",
    },
    {
      icon: <CircuitBoard className="h-8 w-8 text-zinc-100" />,
      title: "Nano Technology",
      description: "Microscopic particles provide deep penetration and protection.",
    },
    {
      icon: <Atom className="h-8 w-8 text-zinc-100" />,
      title: "Molecular Shield",
      description: "Creates an invisible protective barrier at the molecular level.",
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-zinc-100">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold mb-6">Technology Behind Urban Shield</h1>
        <p className="text-xl text-zinc-400 mb-12">
          Discover the cutting-edge technology that powers our innovative skincare solution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 p-6">
              <div className="flex items-center mb-4">
                {tech.icon}
                <h2 className="text-xl font-semibold ml-4 text-white">
                  {tech.title}
                </h2>
              </div>
              <p className="text-zinc-400">{tech.description}</p>
            </Card>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}





