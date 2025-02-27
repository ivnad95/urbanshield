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
import { CreditCard, ShoppingCart } from "lucide-react"
import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"

export default function PreOrderCheckout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  // Mock order details
  const orderDetails = {
    product: "Urban Shield Premium",
    quantity: 1,
    price: 79.99,
    shipping: 4.99,
  }

  const subtotal = orderDetails.price * orderDetails.quantity
  const total = subtotal + orderDetails.shipping

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would process the payment here
    window.location.href = "/thank-you?type=order"
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-zinc-100">
      <SiteHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">Checkout</h1>

              <div className="grid gap-10 lg:grid-cols-5">
                {/* Checkout Form */}
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Contact Information</h2>
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

                    {/* Shipping Address */}
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Shipping Address</h2>
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" required className="border-zinc-800 bg-zinc-900 text-zinc-100" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                        <Input id="address2" className="border-zinc-800 bg-zinc-900 text-zinc-100" />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required className="border-zinc-800 bg-zinc-900 text-zinc-100" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State/Province</Label>
                          <Select>
                            <SelectTrigger className="border-zinc-800 bg-zinc-900 text-zinc-100">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ca">California</SelectItem>
                              <SelectItem value="ny">New York</SelectItem>
                              <SelectItem value="tx">Texas</SelectItem>
                              {/* Add more states as needed */}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP / Postal Code</Label>
                          <Input id="zip" required className="border-zinc-800 bg-zinc-900 text-zinc-100" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select defaultValue="us">
                          <SelectTrigger className="border-zinc-800 bg-zinc-900 text-zinc-100">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            {/* Add more countries as needed */}
                          </SelectContent>
                        </Select>
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
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
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
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-zinc-100 text-black hover:bg-zinc-200">
                      Complete Order
                    </Button>
                  </form>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-2">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <div className="p-6">
                      <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <ShoppingCart className="h-4 w-4" />
                            <span>
                              {orderDetails.product} × {orderDetails.quantity}
                            </span>
                          </div>
                          <span>£{(orderDetails.price * orderDetails.quantity).toFixed(2)}</span>
                        </div>
                        <Separator className="bg-zinc-800" />
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>£{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span>£{orderDetails.shipping.toFixed(2)}</span>
                        </div>
                        <Separator className="bg-zinc-800" />
                        <div className="flex justify-between font-semibold">
                          <span>Total</span>
                          <span>£{total.toFixed(2)}</span>
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

