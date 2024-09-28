import React from "react";
import Section from "../Section";
import Arrow from "@/assets/svg/Arrow";
import { benefits } from "@/lib/data";
import ClipPath from "@/assets/svg/ClipPath";
import { GradientLight } from "../home/design/Benefits";
import Heading from "../Heading";
import { Label } from "@radix-ui/react-label";
import Button from "@/components/customs/Button";
import { listFeatures } from "@/lib/data/list_features";

const ListAllFeatures = () => {
  return (
    <Section
      crosses
      crossesOffset="lg:translate-y-[9rem]"
      className="pt-[12rem] -mt-[5.25rem]"
      customPaddings
      id="features-list"
    >
      <Label className="text-3xl flex justify-center">All Features</Label>
      <div className="flex flex-wrap gap-10 my-12 px-16 ">
        {listFeatures.map((item) => (
          <div
            className={`md:flex p-0.25 rounded-[2rem] bg-conic-gradient`}
            key={item.id}
          >
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[23rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.description}</p>
                <div className="flex items-center mt-auto hover:scale-95 transition-transform">
                  <Button px={"px-9"} className="flex" href={item.link}>
                    Try this
                  </Button>
                  <Arrow />
                </div>
              </div>

              <GradientLight />

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl.src}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ListAllFeatures;
