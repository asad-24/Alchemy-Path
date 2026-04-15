import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] text-[#F7F5F2] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl mb-6 tracking-tight">The Alchemy Path</h3>
            <p className="text-sm opacity-60 leading-relaxed font-light">
              For women who feel there is more… and refuse to settle for less.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-medium mb-6 tracking-widest uppercase opacity-50">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm opacity-60 hover:opacity-100 hover:text-[#C6A86B] transition-all font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-60 hover:opacity-100 hover:text-[#C6A86B] transition-all font-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work-with-me" className="text-sm opacity-60 hover:opacity-100 hover:text-[#C6A86B] transition-all font-light">
                  Work With Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-medium mb-6 tracking-widest uppercase opacity-50">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/terms" className="text-sm opacity-60 hover:opacity-100 hover:text-[#C6A86B] transition-all font-light">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-[#F7F5F2]/5 text-center">
          <p className="text-xs opacity-50 tracking-wider font-light">
            © {new Date().getFullYear()} The Alchemy Path. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
