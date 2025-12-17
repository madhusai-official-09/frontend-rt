// components/Home/Navbar/MobileNav.tsx
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";
import { Button } from "@/components/ui/button";

type Props = {
  showNav: boolean;
  closeNav: () => void;
  onStart?: () => void;
};

/**
 * NavItem - hover & active styles:
 * - Hover → cool cyan/blue aurora gradient + glow + subtle scale
 * - Active → teal pill + small dark dot on the right
 */
const NavItem: React.FC<{
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}> = ({ label, href, active = false, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        relative block w-full px-4 py-3 rounded-xl text-[16px] font-medium
        transition-all duration-300 ease-out
        ${active ? "bg-[#032C31] text-white shadow-inner border border-white/10" : "text-gray-300"}
        hover:bg-gradient-to-r hover:from-[#5AE2FF33] hover:via-[#2AB8F733] hover:to-[#1471FF33]
        hover:shadow-[0_0_18px_#00E5FF33] hover:scale-[1.02]
      `}
    >
      <span className="select-none">{label}</span>

      {/* active right dot */}
      {active && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-black/60 rounded-full" />
      )}
    </Link>
  );
};

const MobileNav: React.FC<Props> = ({ closeNav, showNav, onStart }) => {
  const pathname = usePathname();
  if (!showNav) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeNav} />

      {/* outer gradient stroke -> inner blurred glass card */}
      <div
        className="relative z-10 w-full max-w-md rounded-2xl p-[1px] bg-gradient-to-r from-cyan-600/30 via-transparent to-cyan-400/15 shadow-2xl"
        style={{ WebkitBackdropFilter: "saturate(120%)" }}
      >
        {/* inner glass card */}
        <div
          className="rounded-2xl bg-black/70 backdrop-blur-lg border border-white/6
                     shadow-[0_10px_30px_rgba(0,0,0,0.6)] p-6 transition-transform duration-250"
        >
          {/* subtle top-left highlight */}
          <div className="pointer-events-none absolute -top-6 left-6 w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500/20 to-transparent blur-xl opacity-30" />

          {/* header */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                <img src="/ai logo.png" alt="logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-bold text-lg">DETECTION.AI</h3>
            </div>

            <button aria-label="Close menu" onClick={closeNav} className="p-2 rounded-md text-slate-300 hover:text-red-600">
              <CgClose size={20} />
            </button>
          </div>

          {/* links */}
          <nav className="space-y-3 mt-1">
            {NavLinks.map((link) => {
              const href = (link as any).url ?? "/";
              const label = (link as any).Label ?? (link as any).label ?? "Link";

              const active =
                pathname === href || pathname === href + "/" || (typeof href === "string" && pathname.startsWith(href));

              return (
                <NavItem
                  key={(link as any).id ?? label}
                  label={label}
                  href={href}
                  active={active}
                  onClick={closeNav}
                />
              );
            })}
          </nav>

          {/* divider */}
          <div className="h-px bg-white/6 my-6" />

          {/* CTA */}
          <div className="mt-2">
            <Button
              onClick={() => {
                onStart?.();
                closeNav();
              }}
              className="w-full rounded-xl py-3 text-black bg-red-600 hover:bg-red-700"
            >
              Start Detection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
