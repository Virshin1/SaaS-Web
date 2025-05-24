import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Scene3D } from "../../../../components/3d/Scene3D";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-9">
      <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-[29px] z-10 pt-24">
          <Badge
            variant="outline"
            className="h-[29px] border-[#2222221a] flex items-center justify-center px-[13px] py-2.5 rounded-[10px]"
          >
            <span className="text-black font-tag font-[number:var(--tag-font-weight)] text-[length:var(--tag-font-size)] tracking-[var(--tag-letter-spacing)] leading-[var(--tag-line-height)] [font-style:var(--tag-font-style)]">
              Version 2.0 is here
            </span>
          </Badge>

          <h1 className="w-[511px] [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,19,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-h1 font-[number:var(--h1-font-weight)] text-transparent text-[length:var(--h1-font-size)] tracking-[var(--h1-letter-spacing)] leading-[var(--h1-line-height)] [font-style:var(--h1-font-style)]">
            Pathway to productivity
          </h1>

          <p className="w-[457px] text-[#010d3e] text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] font-body-large font-[number:var(--body-large-font-weight)] [font-style:var(--body-large-font-style)]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>

          <div className="flex items-center gap-[17px]">
            <Button className="px-[15px] py-2.5 bg-black rounded-[10px] hover:bg-black/90">
              <span className="font-body-bold font-[number:var(--body-bold-font-weight)] text-white text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                Get for free
              </span>
            </Button>

            <Button
              variant="ghost"
              className="px-0 py-2.5 rounded-[10px] hover:bg-transparent hover:opacity-80"
            >
              <span className="font-body-bold font-[number:var(--body-bold-font-weight)] text-black text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] whitespace-nowrap [font-style:var(--body-bold-font-style)]">
                Learn more
              </span>
              <ArrowRightIcon className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute w-[216px] h-[197px] top-0 left-[-100px]">
            <Scene3D type="cylinder" />
          </div>

          <img
            className="w-[648px] h-[648px] object-cover"
            alt="Visual"
            src="/visual.png"
          />
        </div>
      </div>
    </section>
  );
};