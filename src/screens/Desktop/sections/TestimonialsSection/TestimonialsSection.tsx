import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

// Testimonial data structure
interface Testimonial {
  id: number;
  content: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
}

// Testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    author: {
      name: "Alex Rivera",
      username: "@jamietechguru00",
      avatar: "/ellipse-1.png",
    },
  },
  {
    id: 2,
    content:
      "I was amazed at how quickly we were able to integrate this app into our workflow.",
    author: {
      name: "Casey Jordan",
      username: "@caseyj",
      avatar: "/ellipse-1-1.png",
    },
  },
  {
    id: 3,
    content:
      "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    author: {
      name: "Jordan Patels",
      username: "@jpatelsdesign",
      avatar: "/ellipse-1-2.png",
    },
  },
  {
    id: 4,
    content:
      "Our team's productivity has skyrocketed since we started using this tool.",
    author: {
      name: "Josh Smith",
      username: "@jjsmith",
      avatar: "/ellipse-1-8.png",
    },
  },
  {
    id: 5,
    content:
      "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    author: {
      name: "Taylor Kim",
      username: "@taylorkimm",
      avatar: "/ellipse-1-5.png",
    },
  },
  {
    id: 6,
    content:
      "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    author: {
      name: "Sam Dawson",
      username: "@dawsontechtips",
      avatar: "/ellipse-1-3.png",
    },
  },
  {
    id: 7,
    content:
      "This app has completely transformed how I manage my projects and deadlines.",
    author: {
      name: "Morgan Lee",
      username: "@morganleewhiz",
      avatar: "/ellipse-1-7.png",
    },
  },
  {
    id: 8,
    content:
      "The customizability and integration capabilities of this app are top-notch.",
    author: {
      name: "Riley Smith",
      username: "@rileysmith1",
      avatar: "/ellipse-1-6.png",
    },
  },
  {
    id: 9,
    content:
      "Its user-friendly interface and robust features support our diverse needs.",
    author: {
      name: "Casey Harper",
      username: "@casey09",
      avatar: "/ellipse-1-4.png",
    },
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full py-14 relative">
      <div className="flex flex-col items-center gap-5 mb-12">
        <Badge
          variant="outline"
          className="px-[13px] py-2.5 rounded-[10px] border-[#2222221a]"
        >
          <span className="font-tag font-[number:var(--tag-font-weight)] text-[length:var(--tag-font-size)] tracking-[var(--tag-letter-spacing)] leading-[var(--tag-line-height)] [font-style:var(--tag-font-style)]">
            Testimonials
          </span>
        </Badge>

        <h2 className="w-full max-w-[540px] text-center font-h2 font-[number:var(--h2-font-weight)] text-[length:var(--h2-font-size)] tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)] [background:linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,19,84,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
          What our users say
        </h2>
      </div>

      <div className="relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-6 lg:px-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white rounded-[20px] border border-solid border-[#f0f0f0] shadow-[0px_7px_14px_#eaeaea]"
            >
              <CardContent className="p-10 flex flex-col gap-5">
                <p className="font-body-medium font-[number:var(--body-medium-font-weight)] text-black text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-2">
                  <Avatar className="w-[42px] h-[42px]">
                    <AvatarImage
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                    />
                    <AvatarFallback>
                      {testimonial.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <span className="font-body-bold font-[number:var(--body-bold-font-weight)] text-black text-[length:var(--body-bold-font-size)] tracking-[var(--body-bold-letter-spacing)] leading-[var(--body-bold-line-height)] [font-style:var(--body-bold-font-style)]">
                      {testimonial.author.name}
                    </span>
                    <span className="font-body-medium font-[number:var(--body-medium-font-weight)] text-black text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
                      {testimonial.author.username}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
