import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature card data for mapping
const featureCards = [
  {
    id: 1,
    image: "/cube-helix-1.png",
    title: "Integration ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },
  {
    id: 2,
    image: "/cube-helix-1-1.png",
    title: "Goal setting and tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
];

export const OverviewSection = (): JSX.Element => {
  return (
    <section className="w-full py-24">
      <div className="flex flex-col items-center gap-[60px] max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center gap-5">
          <Badge
            variant="outline"
            className="font-tag font-[number:var(--tag-font-weight)] text-black text-[length:var(--tag-font-size)] tracking-[var(--tag-letter-spacing)] leading-[var(--tag-line-height)] [font-style:var(--tag-font-style)]"
          >
            Everything you need
          </Badge>

          <div className="flex flex-col items-center gap-5 max-w-[540px]">
            <h2 className="text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,19,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-h2 font-[number:var(--h2-font-weight)] text-transparent text-center leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
              Streamlined for easy management
            </h2>

            <p className="text-[#010d3e] text-[length:var(--body-large-font-size)] text-center tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] font-body-large font-[number:var(--body-large-font-weight)] [font-style:var(--body-large-font-style)]">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {featureCards.map((card) => (
            <Card
              key={card.id}
              className="w-[486px] border border-solid border-[#1b1b1b14] shadow-[0px_7px_24px_#24262b] rounded-[20px]"
            >
              <CardContent className="flex flex-col items-center p-10">
                <img
                  className="w-[329px] h-[329px] object-cover"
                  alt="Cube helix"
                  src={card.image}
                />

                <div className="flex flex-col w-[385px] items-center">
                  <h4 className="w-fit text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] whitespace-nowrap mt-[-1.00px] [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,19,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-h4 font-[number:var(--h4-font-weight)] text-transparent text-center leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                    {card.title}
                  </h4>

                  <p className="w-[345px] h-[69px] text-[#010d3e] text-[length:var(--body-medium-font-size)] text-center tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] font-body-medium font-[number:var(--body-medium-font-weight)] [font-style:var(--body-medium-font-style)]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
