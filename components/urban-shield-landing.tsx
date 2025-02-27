"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Droplets, Wind, ArrowRight, Instagram, Facebook, Twitter, Menu, X } from "lucide-react"
import { useState } from "react"
import SiteFooter from "./site-footer"

export default function UrbanShieldLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight">URBAN SHIELD</span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/benefits" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Benefits
            </Link>
            <Link href="/technology" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Technology
            </Link>
            <Link href="/checkout/invest" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Invest
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-zinc-100 text-black hover:bg-zinc-200" asChild>
              <Link href="/pre-order">Pre-Order</Link>
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800">
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="/features"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/benefits"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link
                href="/technology"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Technology
              </Link>
              <Link
                href="/checkout/invest"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Invest
              </Link>
              <Button className="w-full bg-zinc-100 text-black hover:bg-zinc-200" asChild>
                <Link href="/pre-order" onClick={() => setMobileMenuOpen(false)}>
                  Pre-Order
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product.png-s8uZz1xeXLII5XYuAicCZaNUcd5xY1.jpeg"
              alt="Urban nightscape with product"
              fill
              className="object-cover brightness-75 filter blur-[1px]"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6 py-24 md:py-32">
            <div className="max-w-[600px] space-y-8">
              <Badge className="bg-zinc-100 text-black hover:bg-zinc-200">Coming Soon</Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Protect Your Skin in the Urban Jungle</h1>
              <p className="text-lg md:text-xl text-zinc-200">
                Advanced skincare with pollution-defense technology, designed for the modern urbanite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-zinc-100 text-black hover:bg-zinc-200" asChild>
                  <Link href="/pre-order">
                    Pre-Order Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-zinc-100 bg-zinc-100 text-black hover:bg-zinc-200 hover:text-black"
                  asChild
                >
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-24 md:py-32 bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative aspect-square">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blendBoard%20%281%29.jpg-9wgjlvYmvbrxCNhRyWfQN1DGdH6FZf.jpeg"
                  alt="Urban Shield Product"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-8">
                <Badge className="bg-zinc-100 text-black hover:bg-zinc-200">Features</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Advanced Protection for Urban Life</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Pollution Defense</h3>
                      <p className="text-zinc-400">
                        Creates an invisible shield against urban pollutants and environmental toxins.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                      <Droplets className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Fast-Absorbing</h3>
                      <p className="text-zinc-400">Non-greasy formula that absorbs quickly for immediate protection.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
                      <Wind className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Urban Scent</h3>
                      <p className="text-zinc-400">Sophisticated fragrance inspired by the modern metropolis.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-24 md:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
              Benefits of Urban Shield
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <h3 className="text-xl font-semibold mb-3 text-zinc-100">24/7 Protection</h3>
                <p className="text-zinc-300">Continuous defense against urban pollutants throughout your day.</p>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <h3 className="text-xl font-semibold mb-3 text-zinc-100">Skin Rejuvenation</h3>
                <p className="text-zinc-300">Promotes natural skin renewal and repair processes.</p>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <h3 className="text-xl font-semibold mb-3 text-zinc-100">Antioxidant Boost</h3>
                <p className="text-zinc-300">Rich in antioxidants to combat free radical damage.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="w-full py-24 md:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="bg-zinc-100 text-black hover:bg-zinc-200 mb-4">Technology</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">The Science of Urban Protection</h2>
              <p className="text-zinc-400">
                Our proprietary formula combines advanced molecular technology with natural ingredients to create the
                ultimate urban defense system for your skin.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Molecular Shield",
                  description: "Creates an invisible barrier that blocks pollutants and environmental toxins.",
                },
                {
                  title: "Smart Hydration",
                  description: "Adapts to your skin's needs throughout the day, providing optimal moisture levels.",
                },
                {
                  title: "Anti-Pollution Complex",
                  description: "Neutralizes harmful free radicals and prevents pollution-induced aging.",
                },
              ].map((item, i) => (
                <Card key={i} className="bg-zinc-900 border-zinc-800 p-6">
                  <h3 className="text-xl font-semibold mb-3 text-zinc-100">{item.title}</h3>
                  <p className="text-zinc-300">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="invest" className="w-full py-24 md:py-32 bg-gradient-to-b from-zinc-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Be Part of the Urban Shield Revolution
              </h2>
              <p className="text-zinc-300 max-w-2xl">
                We're seeking visionary investors to join us in bringing Urban Shield to market. Help us protect urban
                skin worldwide.
              </p>
              <Button size="lg" className="bg-zinc-100 text-black hover:bg-zinc-200" asChild>
                <Link href="/checkout/invest">
                  Invest Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

