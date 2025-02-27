"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Zap,
  BarChart3,
  Lock,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-[100dvh] flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="StreamLine Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold">StreamLine</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Sign In
            </Link>
            <Button>Get Started</Button>
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
          <div className="md:hidden border-t">
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                  Sign In
                </Link>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex mb-2">New Release</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Workflow Like Never Before
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Automate tasks, collaborate seamlessly, and boost productivity with our all-in-one platform. Join
                    thousands of teams already working smarter.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Start Free Trial <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                  <span className="mx-2">•</span>
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>14-day free trial</span>
                  <span className="mx-2">•</span>
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Cancel anytime</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Product Demo"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">Trusted by innovative companies worldwide</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder.svg?height=40&width=120&text=LOGO+${i}`}
                    alt={`Company Logo ${i}`}
                    width={120}
                    height={40}
                    className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to boost productivity
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our platform provides powerful tools to help your team work more efficiently and effectively.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Automation</h3>
                      <p className="text-muted-foreground">
                        Automate repetitive tasks and workflows to save time and reduce errors.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Analytics</h3>
                      <p className="text-muted-foreground">
                        Gain insights into your team's performance with detailed analytics and reports.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Security</h3>
                      <p className="text-muted-foreground">
                        Enterprise-grade security to keep your data safe and compliant.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by businesses worldwide</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our customers have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  quote: "StreamLine has transformed how our team works. We've cut our project delivery time by 40%.",
                  author: "Sarah Johnson",
                  role: "Product Manager, TechCorp",
                },
                {
                  quote:
                    "The automation features alone have saved us countless hours. Best investment we've made this year.",
                  author: "Michael Chen",
                  role: "CTO, GrowthStartup",
                },
                {
                  quote: "Intuitive interface, powerful features, and responsive support. StreamLine has it all.",
                  author: "Emily Rodriguez",
                  role: "Operations Director, ScaleUp Inc.",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="flex flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="rounded-full bg-muted">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${testimonial.author[0]}`}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Choose the plan that's right for your team. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$12",
                  description: "Perfect for individuals and small teams just getting started.",
                  features: ["Up to 5 team members", "Basic automation", "1GB storage", "Email support"],
                },
                {
                  name: "Professional",
                  price: "$29",
                  description: "Ideal for growing teams that need more power and flexibility.",
                  features: [
                    "Up to 20 team members",
                    "Advanced automation",
                    "10GB storage",
                    "Priority support",
                    "Advanced analytics",
                  ],
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "$79",
                  description: "For large organizations with complex needs and security requirements.",
                  features: [
                    "Unlimited team members",
                    "Custom automation",
                    "Unlimited storage",
                    "24/7 dedicated support",
                    "Advanced analytics",
                    "SSO & advanced security",
                  ],
                },
              ].map((plan, i) => (
                <Card key={i} className="flex flex-col p-6 relative">
                  {plan.popular && <Badge className="absolute -top-2 right-6">Most Popular</Badge>}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">/month</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="mt-6 space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to transform your workflow?
                </h2>
                <p className="max-w-[600px] md:text-xl">
                  Join thousands of teams already using StreamLine to boost productivity and streamline their
                  operations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80">
                No credit card required. 14-day free trial. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="StreamLine Logo"
                  width={32}
                  height={32}
                  className="rounded"
                />
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <p className="mt-2 text-muted-foreground max-w-xs">
                Streamline your workflow with our powerful automation platform. Save time, reduce errors, and boost
                productivity.
              </p>
              <div className="mt-4 flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Product</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} StreamLine. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

