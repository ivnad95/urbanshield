"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SiteHeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export default function SiteHeader({ mobileMenuOpen, setMobileMenuOpen }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">URBAN SHIELD</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/features"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="/benefits"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="/technology"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Technology
          </Link>
          <Link
            href="/checkout/invest"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
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
  )
}

