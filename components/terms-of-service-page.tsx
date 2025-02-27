"use client";

import SiteHeader from "./site-header";
import SiteFooter from "./site-footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-black text-zinc-100">
      <SiteHeader
        mobileMenuOpen={false}
        setMobileMenuOpen={function (open: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
      <main className="flex-1 container py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>
            <div className="border-b border-zinc-800 pb-6" />
          </div>

          {/* Quick Navigation */}
          <div className="bg-zinc-900/50 rounded-lg p-6 mb-12 backdrop-blur-sm border border-zinc-800/50">
            <h2 className="text-lg font-semibold mb-4 text-zinc-100">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Introduction", id: "introduction" },
                { name: "Products & Orders", id: "products-orders" },
                { name: "Returns & Refunds", id: "returns-refunds" },
                { name: "Website Usage", id: "website-usage" },
                { name: "Limitation of Liability", id: "limitation-of-liability" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-16 text-zinc-300">
            <section id="introduction" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">01.</span> Introduction
              </h2>
              <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50">
                <p className="leading-relaxed">
                  By accessing www.radianttouch.pro, you agree to comply with these Terms and Conditions set by RADIANT TOUCH LIMITED, 
                  a company registered in the UK (Company No: 16128548, VAT: GB 483 1331 05) with its office at 128 City Road, 
                  London, EC1V2NX. These Terms govern the use of our website and services, and you are encouraged to read them 
                  carefully before making a purchase or using our platform.
                </p>
              </div>
            </section>

            <section id="products-orders" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">02.</span> Products & Orders
              </h2>
              <div className="space-y-6">
                <p className="text-lg">Our website offers skincare products designed for urban protection, and all purchases are subject to the following terms:</p>
                <div className="grid gap-4">
                  <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                    <h3 className="font-semibold text-zinc-100 mb-2">Pre-orders & Availability</h3>
                    <p>Products available for pre-order are subject to estimated shipping dates, which may be adjusted due to supply chain constraints.</p>
                  </div>
                  <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                    <h3 className="font-semibold text-zinc-100 mb-2">Pricing Policy</h3>
                    <p>All prices are listed in GBP and may be updated periodically without prior notice.</p>
                  </div>
                  <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                    <h3 className="font-semibold text-zinc-100 mb-2">Order Cancellation</h3>
                    <p>We reserve the right to cancel orders due to stock limitations, payment verification issues, or suspected fraudulent activities. In such cases, customers will be notified and refunded accordingly.</p>
                  </div>
                  <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                    <h3 className="font-semibold text-zinc-100 mb-2">Product Disclaimer</h3>
                    <p>We do not guarantee that our skincare products will work identically for every customer. Individual results may vary, and we do not provide medical claims regarding their efficacy.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="returns-refunds" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">03.</span> Returns & Refunds
              </h2>
              <div className="space-y-6">
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-2">Return Window</h3>
                  <p>Customers may return unopened products within 14 days of receipt.</p>
                </div>
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-2">Return Shipping</h3>
                  <p>The customer is responsible for return shipping costs unless the return is due to a defect or incorrect item received.</p>
                </div>
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-2">Refund Processing</h3>
                  <p>Approved refunds will be processed within 7 business days via the original payment method.</p>
                </div>
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
                  <h3 className="font-semibold text-zinc-100 mb-2">Non-Returnable Items</h3>
                  <p>Opened or used products cannot be returned due to hygiene and safety regulations.</p>
                </div>
              </div>
            </section>

            <section id="website-usage" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">04.</span> Website Usage
              </h2>
              <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50">
                <p className="leading-relaxed">
                  Users must not engage in any illegal, abusive, or unauthorized activities while using this website.
                </p>
                <p className="leading-relaxed">
                  We are not responsible for any external content linked from our platform, including third-party websites or advertisements.
                </p>
                <p className="leading-relaxed">
                  Any attempt to gain unauthorized access to our website, servers, or customer data will result in legal action and potential reporting to authorities.
                </p>
              </div>
            </section>

            <section id="limitation-of-liability" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">05.</span> Limitation of Liability
              </h2>
              <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50">
                <p className="leading-relaxed">
                  To the fullest extent permitted by law, Radiant Touch LIMITED shall not be held liable for any direct, indirect, 
                  incidental, or consequential damages arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The use of our website or services.</li>
                  <li>Errors, interruptions, or security breaches beyond our control.</li>
                  <li>Third-party content, links, or external services integrated into our platform.</li>
                  <li>Any adverse reactions from using our skincare products. Customers should conduct a patch test before full use.</li>
                </ul>
              </div>
            </section>

            <section id="indemnification" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">06.</span> Indemnification
              </h2>
              <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50">
                <p className="leading-relaxed">
                  By using our website and services, you agree to indemnify and hold Radiant Touch LIMITED harmless from any claims, 
                  liabilities, damages, losses, or expenses (including legal fees) arising from your misuse of our website, breach 
                  of these Terms, or infringement of any rights.
                </p>
              </div>
            </section>

            <section id="governing-law" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">07.</span> Governing Law
              </h2>
              <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50">
                <p className="leading-relaxed">
                  These Terms and Conditions are governed by the laws of the United Kingdom. Any disputes arising from the use of 
                  this website or services shall be subject to the jurisdiction of UK courts.
                </p>
              </div>
            </section>

            <section id="changes-to-terms" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">08.</span> Changes to Terms
              </h2>
              <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50">
                <p className="leading-relaxed">
                  We may modify these Terms at any time, and such changes will take effect upon publication on our website. 
                  Continued use of our services constitutes acceptance of the updated Terms.
                </p>
              </div>
            </section>

            <section id="contact" className="scroll-mt-20">
              <h2 className="text-3xl font-bold text-zinc-100 mb-6 flex items-center gap-3">
                <span className="text-zinc-500">09.</span> Contact
              </h2>
              <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800/50">
                <p className="leading-relaxed">
                  For any inquiries, concerns, or disputes regarding these Terms, please contact us at info@radianttouch.pro.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

