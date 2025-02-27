"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import SiteHeader from "./site-header"
import SiteFooter from "./site-footer"

export default function PreOrderPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  // Single product configuration
  const product = {
    name: "Urban Shield Moisturiser",
    price: 41.22,
    description:
      "Advanced skincare with pollution-defense technology, designed for everyday urban protection.",
  }

  const subtotal = product.price * quantity

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-zinc-100">
      <SiteHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Product Image Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blendBoard%20%281%29.jpg-9wgjlvYmvbrxCNhRyWfQN1DGdH6FZf.jpeg"
                    alt="Urban Shield Product"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product.png-s8uZz1xeXLII5XYuAicCZaNUcd5xY1.jpeg"
                        alt={`Urban Shield Product View ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details and Order Form */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{product.name}</h1>
                  <p className="mt-2 text-xl font-semibold text-zinc-100">£{product.price.toFixed(2)}</p>
                  <p className="mt-4 text-zinc-400">{product.description}</p>
                </div>

                {/* Quantity controls remain */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="quantity" className="text-base">
                      Quantity
                    </Label>
                    <div className="mt-2 flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={decreaseQuantity}
                        className="h-10 w-10 border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                        className="h-10 w-20 border-zinc-800 bg-zinc-900 text-center text-zinc-100"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={increaseQuantity}
                        className="h-10 w-10 border-zinc-800 bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t border-zinc-800 pt-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>Shipping calculated at checkout</span>
                  </div>
                  <Button size="lg" className="w-full bg-zinc-100 text-black hover:bg-zinc-200" asChild>
                    <Link href="/checkout/pre-order">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Proceed to Checkout
                    </Link>
                  </Button>
                </div>

                <div className="space-y-4 rounded-lg bg-zinc-900 p-4">
                  <h3 className="font-semibold">Product Details</h3>
                  <ul className="list-inside list-disc space-y-2 text-zinc-400">
                    <li>Advanced pollution defense formula</li>
                    <li>Fast-absorbing, non-greasy texture</li>
                    <li>Sophisticated urban-inspired scent</li>
                    <li>Dermatologically tested</li>
                    <li>Cruelty-free and vegan</li>
                  </ul>
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

