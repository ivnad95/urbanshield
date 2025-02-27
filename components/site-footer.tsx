import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-zinc-100">Radiant Touch</div>
            <div className="space-y-2 text-sm text-zinc-400">
              <p>
                Protecting your skin in the urban jungle.
              </p>
              <address className="not-italic mt-4 text-zinc-400">
                128 City Road<br />
                London, EC1V2NX<br />
                United Kingdom
              </address>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <div className="text-sm font-semibold text-zinc-100">Legal</div>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-zinc-100 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-zinc-100 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="text-sm font-semibold text-zinc-100">Contact</div>
            <div className="space-y-2 text-sm text-zinc-400">
              <a href="mailto:info@radianttouch.pro" className="hover:text-zinc-100 transition-colors block">
                info@radianttouch.pro
              </a>
              <p className="text-xs mt-4">
                Company No: 16128548<br />
                VAT: GB 483 1331 05
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-400">
          <p>Copyright ©2025 Radiant Touch LIMITED, United Kingdom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

