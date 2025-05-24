import React from "react";

export const FooterSection = (): JSX.Element => {
  // Footer navigation data
  const footerData = {
    company: {
      title: "Company",
      links: ["About", "Blog", "Careers", "Manifesto", "Press", "Contact"],
    },
    product: {
      title: "Product",
      links: ["Features", "Integrations", "Updates", "FAQ", "Pricing"],
    },
    resources: {
      title: "Resources",
      links: ["Examples", "Community", "Guides", "Docs"],
    },
    legal: {
      title: "Legal",
      links: ["Privacy", "Terms", "Security"],
    },
  };

  // Social media icons
  const socialIcons = [
    { src: "/socials-5.svg", alt: "Socials" },
    { src: "/socials.svg", alt: "Socials" },
    { src: "/socials-3.svg", alt: "Socials" },
    { src: "/socials-4.svg", alt: "Socials" },
    { src: "/socials-1.svg", alt: "Socials" },
    { src: "/socials-2.svg", alt: "Socials" },
  ];

  return (
    <footer className="w-full bg-white">
      <div className="flex justify-between px-5 py-10 bg-black">
        {/* Left column with logo, description and social icons */}
        <div className="flex flex-col gap-[111px]">
          <div className="flex flex-col gap-5">
            {/* Logo with gradient effect */}
            <div className="relative w-10 h-[41px]">
              <div className="relative h-10">
                <div className="w-10 h-[33px] top-1.5 blur-[5.5px] [background:linear-gradient(89deg,rgba(248,123,255,1)_0%,rgba(251,146,207,1)_24%,rgba(255,221,155,1)_48%,rgba(194,240,177,1)_73%,rgba(47,216,254,1)_100%)] absolute left-0" />
                <img
                  className="absolute w-10 h-10 top-0 left-0 object-cover"
                  alt="Logosaas"
                  src="/logosaas-1.png"
                />
              </div>
            </div>

            {/* Company description */}
            <p className="max-w-[240px] font-body-s text-[#bcbcbc] text-[length:var(--body-s-font-size)] tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)]">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website.
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex gap-[35px]">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-6 h-6"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>
        </div>

        {/* Right columns with navigation links */}
        <div className="flex gap-12">
          {/* Product links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-body-s-bold font-[number:var(--body-s-bold-font-weight)] text-white text-[length:var(--body-s-bold-font-size)] tracking-[var(--body-s-bold-letter-spacing)] leading-[var(--body-s-bold-line-height)]">
              {footerData.product.title}
            </h3>
            {footerData.product.links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-body-s font-[number:var(--body-s-font-weight)] text-[#7b7b7b] text-[length:var(--body-s-font-size)] tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)] hover:text-[#bcbcbc] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-body-s-bold font-[number:var(--body-s-bold-font-weight)] text-white text-[length:var(--body-s-bold-font-size)] tracking-[var(--body-s-bold-letter-spacing)] leading-[var(--body-s-bold-line-height)]">
              {footerData.company.title}
            </h3>
            {footerData.company.links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-body-s font-[number:var(--body-s-font-weight)] text-[#7b7b7b] text-[length:var(--body-s-font-size)] tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)] hover:text-[#bcbcbc] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Resources links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-body-s-bold font-[number:var(--body-s-bold-font-weight)] text-white text-[length:var(--body-s-bold-font-size)] tracking-[var(--body-s-bold-letter-spacing)] leading-[var(--body-s-bold-line-height)]">
              {footerData.resources.title}
            </h3>
            {footerData.resources.links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-body-s font-[number:var(--body-s-font-weight)] text-[#7b7b7b] text-[length:var(--body-s-font-size)] tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)] hover:text-[#bcbcbc] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-body-s-bold font-[number:var(--body-s-bold-font-weight)] text-white text-[length:var(--body-s-bold-font-size)] tracking-[var(--body-s-bold-letter-spacing)] leading-[var(--body-s-bold-line-height)]">
              {footerData.legal.title}
            </h3>
            {footerData.legal.links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-body-s font-[number:var(--body-s-font-weight)] text-[#7b7b7b] text-[length:var(--body-s-font-size)] tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)] hover:text-[#bcbcbc] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
