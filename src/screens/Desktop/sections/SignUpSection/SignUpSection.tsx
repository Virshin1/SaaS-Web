import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const SignUpSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative">
        <div className="flex flex-col w-full items-center justify-center py-32 [background:linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(210,220,255,1)_100%)]">
          <div className="flex flex-col items-center gap-10 max-w-[540px] z-10">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,19,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-h2 font-[number:var(--h2-font-weight)] text-center leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
                Sign up for free today
              </h2>

              <p className="text-[#010d3e] text-[length:var(--body-medium-font-size)] text-center tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] font-body-medium font-[number:var(--body-medium-font-weight)] [font-style:var(--body-medium-font-style)] max-w-[447px]">
                Celebrate the joy of accomplishment with an app designed to
                track your progress and motivate your efforts.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-black text-white rounded-[10px] px-[15px] py-2.5 font-body-bold font-[number:var(--body-bold-font-weight)] text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] [font-style:var(--body-bold-font-style)]">
                Get for free
              </Button>

              <Button
                variant="ghost"
                className="flex items-center gap-1 p-2.5 rounded-[10px] font-body-bold font-[number:var(--body-bold-font-weight)] text-black text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] [font-style:var(--body-bold-font-style)]"
              >
                Learn more
                <ArrowRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative images */}
        <img
          className="absolute w-[342px] h-[357px] top-0 left-0 object-cover z-0 rotate-3d"
          alt="Decorative star graphic"
          src="/emojistar-1.png"
        />

        <img
          className="absolute w-[362px] h-[359px] top-[113px] right-0 object-cover z-0 float-rotate"
          alt="Decorative helix graphic"
          src="/helix2-1.png"
        />
      </div>
    </section>
  );
};