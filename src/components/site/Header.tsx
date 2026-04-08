import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1020]/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[linear-gradient(135deg,#f5c19d_0%,#f08d68_55%,#b98cff_100%)] shadow-[0_0_20px_rgba(240,141,104,0.45)]" />
          <span className="text-lg font-semibold tracking-tight text-white">
            ValuedSociety
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/68 md:flex">
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/how-it-works" className="transition hover:text-white">
            How it works
          </Link>
          <Link href="/product" className="transition hover:text-white">
            Product
          </Link>
          <Link href="/waitlist" className="transition hover:text-white">
            Waitlist
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/waitlist"
            className="rounded-full border border-white/12 bg-[linear-gradient(135deg,#f5a56b_0%,#ee7f7d_48%,#ac84ff_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(201,122,255,0.22)] transition hover:scale-[1.02]"
          >
            Join Waitlist
          </Link>
        </div>

        <Link
          href="/waitlist"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 md:hidden"
        >
          Join
        </Link>
      </div>
    </header>
  );
}
