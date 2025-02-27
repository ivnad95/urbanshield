"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Calendar, Mail } from "lucide-react"

export default function ThankYouContent() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "order"

  const isOrder = type === "order"
  const isInvestment = type === "investment"

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="flex justify-center mb-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900">
          <CheckCircle2 className="h-10 w-10 text-zinc-100" />
        </div>
      </div>

      <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
        {isOrder ? "Thank You for Your Pre-Order!" : "Thank You for Your Investment!"}
      </h1>

      <p className="mb-8 text-zinc-400 md:text-lg">
        {isOrder
          ? "Your pre-order has been received and is being processed. We'll send you a confirmation email shortly with all the details."
          : "Your investment has been received and is being processed. We'll send you a confirmation email shortly with all the details and next steps."}
      </p>

      <div className="mb-8 rounded-lg bg-zinc-900 p-6 text-left">
        <h2 className="mb-4 text-xl font-semibold">{isOrder ? "Order Summary" : "Investment Summary"}</h2>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-zinc-400">{isOrder ? "Order Number" : "Reference Number"}:</span>
            <span>
              {isOrder
                ? "#URB-" + Math.floor(100000 + Math.random() * 900000)
                : "#INV-" + Math.floor(100000 + Math.random() * 900000)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-zinc-400">Date:</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>

          {isOrder && (
            <div className="flex justify-between">
              <span className="text-zinc-400">Estimated Delivery:</span>
              <span>{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
            </div>
          )}

          {isInvestment && (
            <div className="flex justify-between">
              <span className="text-zinc-400">Next Steps:</span>
              <span>Investor Welcome Package</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">What's Next?</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-zinc-900 p-4 text-left">
            <div className="mb-2 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <h4 className="font-medium">Check Your Email</h4>
            </div>
            <p className="text-sm text-zinc-400">
              {isOrder
                ? "We've sent a confirmation email with your order details."
                : "We've sent a confirmation email with your investment details and next steps."}
            </p>
          </div>

          <div className="rounded-lg bg-zinc-900 p-4 text-left">
            <div className="mb-2 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <h4 className="font-medium">{isOrder ? "Track Your Order" : "Stay Updated"}</h4>
            </div>
            <p className="text-sm text-zinc-400">
              {isOrder
                ? "We'll keep you updated on your order status and shipping information."
                : "We'll keep you updated on company progress and important milestones."}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button asChild className="bg-zinc-100 text-black hover:bg-zinc-200">
          <Link href="/">Return to Home</Link>
        </Button>

        <Button asChild variant="outline" className="border-zinc-800 bg-transparent hover:bg-zinc-900">
          <Link href={isOrder ? "/pre-order" : "#"}>
            {isOrder ? "Continue Shopping" : "Learn More About Urban Shield"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

