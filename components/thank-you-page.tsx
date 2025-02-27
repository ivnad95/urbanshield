"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { useState } from "react"
import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"

const DynamicThankYouContent = dynamic(() => import("./thank-you-content"), {
  ssr: false,
})

export default function ThankYouPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-zinc-100">
      <SiteHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicThankYouContent />
            </Suspense>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

