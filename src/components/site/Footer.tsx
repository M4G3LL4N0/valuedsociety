import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 pb-16 md:px-8 md:pb-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-[#0a0f1b]/80 px-6 py-8 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#f5c19d_0%,#f08d68_55%,#b98cff_100%)] shadow-[0_0_20px_rgba(240,141,104,0.45)]" />
            <span className="text-lg font-semibold text-white">
              ValuedSociety
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 text-white/50">
            A premium platform for structured human betterment.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-white/55 md:flex md:items-center md:gap-8">
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/how-it-works" className="transition hover:text-white">
            How it works
          </Link>
          <Link href="/product" className="transition hover:text-white">
            Product
          </Link>
          <Link href="/investors" className="transition hover:text-white">
            Investors
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
          <Link href="/waitlist" className="transition hover:text-white">
            Waitlist
          </Link>
        </div>
      </div>
    </footer>
  );
}
