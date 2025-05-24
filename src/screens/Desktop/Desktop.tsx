import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { OverviewSection } from "./sections/OverviewSection/OverviewSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { ProductFeaturesSection } from "./sections/ProductFeaturesSection/ProductFeaturesSection";
import { SignUpSection } from "./sections/SignUpSection/SignUpSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Desktop = (): JSX.Element => {
  const companyLogos = [
    {
      name: "Acme",
      src: "/acme-1.png",
      width: "146px",
      height: "8",
      left: "0",
    },
    {
      name: "Quantum",
      src: "/quantum-1.png",
      width: "125px",
      height: "8",
      left: "205px",
    },
    {
      name: "Echo",
      src: "/echo-1.png",
      width: "40",
      height: "7",
      left: "388px",
    },
    {
      name: "Celestia",
      src: "/celestia-1.png",
      width: "115px",
      height: "7",
      left: "606px",
    },
    {
      name: "Pulse",
      src: "/pulse-1.png",
      width: "101px",
      height: "22px",
      left: "780px",
    },
    {
      name: "Apex",
      src: "/apex-1.png",
      width: "85px",
      height: "27px",
      left: "939px",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1200px] relative">
        <div className="flex flex-col items-center w-full">
          {/* Top Banner */}
          <div className="flex w-full items-center justify-center gap-2 px-[110px] py-3.5 bg-black">
            <div className="flex flex-wrap w-[486px] items-center justify-center gap-[8px_8px] relative self-stretch">
              <div className="relative w-[310px] h-[18px] mt-[-1.00px] font-body-small-tag font-[number:var(--body-small-tag-font-weight)] text-[#ffffff99] text-[length:var(--body-small-tag-font-size)] tracking-[var(--body-small-tag-letter-spacing)] leading-[var(--body-small-tag-line-height)] [font-style:var(--body-small-tag-font-style)]">
                This page is included in a free SaaS Website Kit.
              </div>

              <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-small-tag font-[number:var(--body-small-tag-font-weight)] text-white text-[length:var(--body-small-tag-font-size)] tracking-[var(--body-small-tag-letter-spacing)] leading-[var(--body-small-tag-line-height)] [font-style:var(--body-small-tag-font-style)]">
                  View the complete Kit
                </div>
                <ArrowRightIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Main Sections */}
          <NavigationBarSection />
          <HeroSection />
          <ProductFeaturesSection />
          <OverviewSection />
          <PricingSection />
          <TestimonialsSection />
          <SignUpSection />
          <FooterSection />

          {/* Company Logos Section */}
          <section className="relative w-full py-8">
            <div className="relative w-full max-w-[1024px] mx-auto px-4">
              <div className="relative h-[80px] flex items-center justify-center">
                {companyLogos.map((logo, index) => (
                  <img
                    key={index}
                    className="absolute object-cover"
                    style={{
                      width: logo.width,
                      height: logo.height,
                      left: logo.left,
                      top:
                        logo.name === "Pulse"
                          ? "5px"
                          : logo.name === "Echo" || logo.name === "Celestia"
                            ? "0.5px"
                            : logo.name === "Apex"
                              ? "3px"
                              : "0",
                    }}
                    alt={logo.name}
                    src={logo.src}
                  />
                ))}
              </div>
              <div className="w-full h-full absolute top-0 left-0 [background:linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,1)_100%)]" />
            </div>
          </section>
        </div>

        {/* Decorative Image */}
        <img
          className="absolute w-[248px] h-[318px] top-[629px] right-0 object-cover"
          alt="Half torus"
          src="/half-torus-1.png"
        />
      </div>
    </div>
  );
};
