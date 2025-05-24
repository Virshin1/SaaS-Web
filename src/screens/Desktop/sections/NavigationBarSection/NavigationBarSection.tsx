import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationBarSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "About", href: "#" },
    { label: "Features", href: "#" },
    { label: "Customers", href: "#" },
    { label: "Updates", href: "#" },
    { label: "Help", href: "#" },
  ];

  return (
    <header className="w-full flex items-center justify-between p-5 bg-[#eaeefe] backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)]">
      {/* Logo and brand section */}
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10">
          <div className="w-10 h-[33px] top-1.5 absolute left-0 blur-[5.5px] [background:linear-gradient(89deg,rgba(248,123,255,1)_0%,rgba(251,146,207,1)_24%,rgba(255,221,155,1)_48%,rgba(194,240,177,1)_73%,rgba(47,216,254,1)_100%)]" />
          <img
            className="absolute w-10 h-10 top-0 left-0 object-cover"
            alt="Logosaas"
            src="/logosaas-1.png"
          />
        </div>

        <span className="font-body-s font-[number:var(--body-s-font-weight)] text-black text-[length:var(--body-s-font-size)] tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)] [font-style:var(--body-s-font-style)]">
          made by
        </span>

        <img
          className="w-[68px] h-[22px]"
          alt="Black horizontal"
          src="/black-horizontal-1.svg"
        />
      </div>

      {/* Navigation menu */}
      <NavigationMenu className="max-w-none">
        <NavigationMenuList className="flex items-center gap-6">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                className="font-body-medium font-[number:var(--body-medium-font-weight)] text-[#00000099] text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)] hover:text-black transition-colors"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <Button className="px-[15px] py-2.5 bg-black rounded-[10px] text-white font-body-bold font-[number:var(--body-bold-font-weight)] text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
              Get for free
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
