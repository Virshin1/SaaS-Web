import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: "/icons-30.svg",
    title: "Integration ecosystem",
    description: "Track your progress and motivate\nyour efforts everyday.",
    learnMoreLink: "#",
  },
  {
    icon: "/icons-31.svg",
    title: "Goal setting and tracking",
    description: "Set and track goals with\nmanageable task breakdowns.",
    learnMoreLink: "#",
  },
  {
    icon: "/icons-25.svg",
    title: "Secure data encryption",
    description: "Ensure your data's safety with top-\ntier encryption.",
    learnMoreLink: "#",
  },
  {
    icon: "/icons-21.svg",
    title: "Customizable notifications",
    description: "Get alerts on tasks and deadlines\nthat matter most.",
    learnMoreLink: "#",
  },
];

export const ProductFeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-28">
      <div className="container mx-auto max-w-[1200px] flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-10 mb-10">
          <div className="flex flex-col items-center gap-5">
            <Badge
              variant="outline"
              className="px-[13px] py-2.5 font-tag text-black"
            >
              Boost your productivity
            </Badge>

            <div className="flex flex-col items-center gap-5">
              <h2 className="w-[540px] text-center font-h2 text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,19,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                A more effective way to track progress
              </h2>

              <p className="w-[535px] text-center text-[#010d3e] font-body-large text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)]">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website in just minutes with the set of
                free components for Framer.
              </p>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative w-full">
            <img
              className="w-full h-auto object-cover"
              alt="Product image"
              src="/product-image.png"
            />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mt-10">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-none">
                <CardContent className="flex flex-col items-start gap-2.5 p-0 py-10">
                  <img
                    className="w-6 h-6"
                    alt={`${feature.title} icon`}
                    src={feature.icon}
                  />

                  <h5 className="font-h5 text-black text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)]">
                    {feature.title}
                  </h5>

                  <div className="flex flex-col h-[77px] gap-2.5 w-full">
                    <p className="text-black font-body-medium text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)]">
                      {feature.description}
                    </p>

                    <a
                      href={feature.learnMoreLink}
                      className="flex items-center gap-1 text-black font-body-medium text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)]"
                    >
                      Learn more
                      <ArrowRightIcon className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <img
          className="absolute w-[167px] h-[248px] bottom-0 left-0 object-cover rotate-3d"
          alt="Torus"
          src="/torus-1.png"
        />

        <img
          className="absolute w-[181px] h-[262px] top-1/2 right-0 object-cover float-rotate"
          alt="Pyramid"
          src="/pyramid-1.png"
        />
      </div>
    </section>
  );
};