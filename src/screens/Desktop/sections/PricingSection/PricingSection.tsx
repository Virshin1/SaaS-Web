import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";

// Define pricing plan data for better maintainability
const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    popular: false,
    buttonText: "Get started for free",
    buttonVariant: "default",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
    textColor: "text-black",
    bgColor: "bg-neutral-100",
  },
  {
    name: "Pro",
    price: "$9",
    popular: true,
    buttonText: "Sign up now",
    buttonVariant: "secondary",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
    textColor: "text-white",
    bgColor: "bg-black",
  },
  {
    name: "Business",
    price: "$19",
    popular: false,
    buttonText: "Sign up now",
    buttonVariant: "default",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
    textColor: "text-black",
    bgColor: "bg-neutral-100",
  },
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center py-16 px-4">
      <div className="flex flex-col items-center gap-10 max-w-6xl">
        <div className="flex flex-col items-center gap-5 text-center">
          <Badge
            variant="outline"
            className="font-tag text-black px-[13px] py-2.5"
          >
            Boost your productivity
          </Badge>

          <h2 className="w-full max-w-[540px] text-center font-h2 text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,19,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
            A more effective way to track progress
          </h2>

          <p className="w-full max-w-[535px] text-center font-body-large text-[#010d3e] text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)]">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {pricingPlans.map((plan, index) => {
            const isMiddlePlan = index === 1;

            return (
              <Card
                key={plan.name}
                className={`${plan.bgColor} border border-solid ${isMiddlePlan ? "border-transparent md:scale-110 md:my-[-20px]" : "border-[#eff0f6]"} rounded-3xl shadow-general-shadow-02`}
              >
                <CardHeader className="pt-10 pb-0 px-10">
                  <div className="flex items-center justify-between">
                    <h5
                      className={`font-h5 ${isMiddlePlan ? "text-[#ffffff99]" : "text-neutral-600"} text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)]`}
                    >
                      {plan.name}
                    </h5>

                    {plan.popular && (
                      <Badge
                        variant="outline"
                        className="border-[#ffffff33] px-[13px] py-2.5"
                      >
                        <span className="[background:linear-gradient(90deg,rgba(221,125,255,1)_0%,rgba(225,205,134,1)_29%,rgba(139,203,146,1)_51%,rgba(113,194,239,1)_76%,rgba(59,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-tag text-[length:var(--tag-font-size)] tracking-[var(--tag-letter-spacing)] leading-[var(--tag-line-height)]">
                          Most Popular
                        </span>
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-1 mt-8">
                    <span
                      className={`font-h2 ${plan.textColor} text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] whitespace-nowrap`}
                    >
                      {plan.price}
                    </span>
                    <div className="relative h-[42.78px] w-[78px]">
                      <span
                        className={`absolute top-5 left-0 font-h5 ${isMiddlePlan ? "text-[#999999]" : "text-neutral-600"} text-[length:var(--h5-font-size)] tracking-[var(--h5-letter-spacing)] leading-[var(--h5-line-height)]`}
                      >
                        /monthly
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="px-10 pt-8">
                  <Button
                    className={`w-full justify-center ${isMiddlePlan ? "bg-white text-black" : "bg-black text-white"} rounded-[10px] font-body-bold text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)]`}
                  >
                    {plan.buttonText}
                  </Button>

                  <div className="flex flex-col gap-5 mt-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <CheckIcon className={plan.textColor} size={20} />
                        </div>
                        <span
                          className={`font-body-s ${plan.textColor} text-[length:var(--body-s-font-size)] tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)]`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
