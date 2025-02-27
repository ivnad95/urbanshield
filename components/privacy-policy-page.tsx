"use client";

import { useState } from "react";
import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";

export default function PrivacyPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-zinc-100">
      <SiteHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="flex-1 container py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <div className="flex gap-8 text-sm text-zinc-400 border-b border-zinc-800 pb-6">
              <p>Effective Date: 10.12.2024</p>
              <p>Last Updated: 27.02.2025</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-zinc-900/50 rounded-lg p-6 mb-12 backdrop-blur-sm border border-zinc-800/50">
            <h2 className="text-lg font-semibold mb-4 text-zinc-100">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Introduction", "Information We Collect", "How We Use Your Data", "Contact Us"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-16 text-zinc-300">
            <section id="introduction" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">01.</span> Introduction
              </h2>
              <p>
                Welcome to Radiant Touch, where your privacy is our priority. This Privacy Policy details how we collect, use,
                and protect your personal data when accessing www.radianttouch.pro. RADIANT TOUCH LIMITED, registered in the UK
                under Company No: 16128548 and VAT: GB 483 1331 05, is headquartered at 128 City Road, London, EC1V2NX. We
                are committed to ensuring that your personal information remains secure and handled in compliance with the
                latest data protection regulations.
              </p>
            </section>

            <section id="information-we-collect" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">02.</span> Information We Collect
              </h2>
              <p className="text-lg mb-6">We collect various types of information to enhance our services and improve user experience.</p>
              <div className="grid gap-6">
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-3">Personal Data</h3>
                  <p>This includes your full name, email address, phone number, and billing details. This information is required to process transactions, provide customer support, and communicate important updates regarding your orders or inquiries.</p>
                </div>
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-3">Usage Data</h3>
                  <p>We automatically collect data such as your IP address, device type, browser details, and pages visited to help us analyze website traffic, identify trends, and improve overall performance.</p>
                </div>
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-3">Cookies & Tracking Technologies</h3>
                  <p>We use cookies to personalize your experience, store user preferences, and gather analytical insights. You can manage cookie settings through your browser.</p>
                </div>
              </div>
            </section>

            <section id="how-we-use-your-data" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">03.</span> How We Use Your Data
              </h2>
              <p className="text-lg mb-6">Your data is utilized in multiple ways to provide you with the best experience possible.</p>
              <div className="grid gap-6">
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-3">Order Processing</h3>
                  <p>Your personal data is essential to process transactions, fulfill purchases, and send order confirmations.</p>
                </div>
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-3">Website Functionality</h3>
                  <p>We use collected data to optimize website performance, detect technical issues, and enhance the user interface.</p>
                </div>
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-3">Marketing & Communications</h3>
                  <p>With your explicit consent, we may send promotional offers, newsletters, and personalized recommendations based on your preferences.</p>
                </div>
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-3">Legal Compliance</h3>
                  <p>We may store and process data as required by applicable laws and regulatory obligations.</p>
                </div>
              </div>
            </section>

            <section id="contact-us" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">08.</span> Contact Us
              </h2>
              <p>For any privacy-related concerns or inquiries, email info@radianttouch.pro.</p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

