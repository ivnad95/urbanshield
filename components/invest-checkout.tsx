"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, TrendingUp, Info } from "lucide-react"
import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"

export default function InvestCheckout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [investmentAmount, setInvestmentAmount] = useState(1000)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  // Investment tiers
  const investmentTiers = [
    { amount: 50, description: "Micro Investor" },
    { amount: 100, description: "Starter Investor" },
    { amount: 1000, description: "Seed Investor" },
    { amount: 5000, description: "Angel Investor" },
    { amount: 10000, description: "Strategic Partner" },
    { amount: 25000, description: "Major Stakeholder" },
    { amount: 50000, description: "Founding Investor" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would process the investment here
    window.location.href = "/thank-you?type=investment"
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-zinc-100">
      <SiteHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Investment Checkout</h1>

              <div className="grid gap-10 lg:grid-cols-5">
                {/* Investment Form */}
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Investor Information */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Investor Information</h2>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" required className="border-zinc-800 bg-zinc-900 text-zinc-100" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" required className="border-zinc-800 bg-zinc-900 text-zinc-100" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required className="border-zinc-800 bg-zinc-900 text-zinc-100" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" className="border-zinc-800 bg-zinc-900 text-zinc-100" />
                      </div>
                    </div>

                    {/* Investment Amount */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Investment Amount</h2>
                      <div className="space-y-4">
                        <RadioGroup
                          value={investmentAmount.toString()}
                          onValueChange={(value) => setInvestmentAmount(Number.parseInt(value))}
                          className="space-y-2"
                        >
                          {investmentTiers.map((tier) => (
                            <div key={tier.amount} className="flex items-start space-x-2">
                              <RadioGroupItem
                                value={tier.amount.toString()}
                                id={`tier-${tier.amount}`}
                                className="mt-1"
                              />
                              <div className="grid gap-1">
                                <Label htmlFor={`tier-${tier.amount}`} className="font-medium">
                                  £{tier.amount.toLocaleString()} - {tier.description}
                                </Label>
                                <p className="text-sm text-zinc-400">
                                  {tier.amount >= 10000
                                    ? "Includes quarterly investor updates and early access to new products."
                                    : "Includes investor updates and recognition on our website."}
                                </p>
                              </div>
                            </div>
                          ))}
                        </RadioGroup>

                        <div className="space-y-2">
                          <Label htmlFor="custom-amount">Custom Amount</Label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center text-zinc-400">£</span>
                            <Input
                              id="custom-amount"
                              type="number"
                              min="50"
                              value={investmentAmount}
                              onChange={(e) => setInvestmentAmount(Number.parseInt(e.target.value) || 50)}
                              className="border-zinc-800 bg-zinc-900 pl-8 text-zinc-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Payment Information</h2>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <Label htmlFor="credit-card" className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4" />
                            Credit Card
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="wire-transfer" id="wire-transfer" />
                          <Label htmlFor="wire-transfer">Wire Transfer</Label>
                        </div>
                      </RadioGroup>

                      {paymentMethod === "credit-card" && (
                        <div className="space-y-4 rounded-lg bg-zinc-900 p-4">
                          <div className="space-y-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input
                              id="card-number"
                              placeholder="1234 5678 9012 3456"
                              required
                              className="border-zinc-800 bg-zinc-800 text-zinc-100"
                            />
                          </div>
                          <div className="grid gap-4 sm:grid-cols-3">
                            <div className="space-y-2">
                              <Label htmlFor="expiry-month">Expiry Month</Label>
                              <Select>
                                <SelectTrigger className="border-zinc-800 bg-zinc-800 text-zinc-100">
                                  <SelectValue placeholder="MM" />
                                </SelectTrigger>
                                <SelectContent>
                                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                                    <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                                      {month.toString().padStart(2, "0")}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="expiry-year">Expiry Year</Label>
                              <Select>
                                <SelectTrigger className="border-zinc-800 bg-zinc-800 text-zinc-100">
                                  <SelectValue placeholder="YY" />
                                </SelectTrigger>
                                <SelectContent>
                                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                                    <SelectItem key={year} value={year.toString().slice(-2)}>
                                      {year}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvc">CVC</Label>
                              <Input
                                id="cvc"
                                placeholder="123"
                                required
                                className="border-zinc-800 bg-zinc-800 text-zinc-100"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {paymentMethod === "wire-transfer" && (
                        <div className="space-y-4 rounded-lg bg-zinc-900 p-4">
                          <p className="text-sm text-zinc-400">
                            Wire transfer details will be sent to your email after completing this form. Please note
                            that your investment will only be confirmed after the wire transfer is received.
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={agreedToTerms}
                          onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                          className="mt-1"
                        />
                        <div className="grid gap-1.5">
                          <Label htmlFor="terms" className="text-sm font-medium leading-none">
                            I agree to the investment terms and conditions
                          </Label>
                          <p className="text-sm text-zinc-400">
                            By checking this box, I acknowledge that I have read and agree to the investment terms, and
                            understand the risks associated with this investment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-zinc-100 text-black hover:bg-zinc-200"
                      disabled={!agreedToTerms}
                    >
                      Complete Investment
                    </Button>
                  </form>
                </div>

                {/* Investment Summary */}
                <div className="lg:col-span-2">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <div className="p-6">
                      <h2 className="mb-4 text-xl font-semibold">Investment Summary</h2>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            <span>Investment Amount</span>
                          </div>
                          <span>£{investmentAmount.toLocaleString()}</span>
                        </div>
                        <Separator className="bg-zinc-800" />
                        <div className="rounded-lg bg-zinc-800 p-4">
                          <div className="flex items-start gap-2">
                            <Info className="h-5 w-5 text-zinc-400 mt-0.5" />
                            <div className="space-y-2">
                              <h3 className="font-medium">Investment Information</h3>
                              <p className="text-sm text-zinc-400">
                                Your investment in Urban Shield helps us bring innovative skincare products to market.
                                As an investor, you'll receive:
                              </p>
                              <ul className="text-sm text-zinc-400 space-y-1 list-disc pl-5">
                                <li>Quarterly investor updates</li>
                                <li>Early access to new products</li>
                                <li>Invitation to annual investor meetings</li>
                                {investmentAmount >= 10000 && <li>One-on-one meetings with the founding team</li>}
                                {investmentAmount >= 25000 && <li>Input on product development roadmap</li>}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

