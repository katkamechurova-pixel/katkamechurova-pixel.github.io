import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DuckLogo } from "@/components/HeroSection";

const navItems = [
  { label: "Úvod", href: "/#hero" },
  { label: "O mně", href: "/#about" },
  { label: "Služby", href: "/#services" },
  { label: "Ceník", href: "/#pricing" },
  { label: "Kontakt", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/85 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="/" className="flex items-center gap-2">
          <DuckLogo className="w-8 h-8" />
          <span className="font-heading font-bold text-lg text-gradient">Ducktorka<span className="text-pastel-pink">.cz</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#contact"
              className="inline-block px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Objednat návštěvu
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border/50 px-4 pb-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-block px-5 py-2 rounded-full bg-accent text-accent-foreground font-semibold text-sm"
              >
                Objednat návštěvu
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
