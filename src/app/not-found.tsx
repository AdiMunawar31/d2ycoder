import { roadmap3 } from "@/assets";
import Button from "@/components/customs/Button";
import Section from "@/components/pages/Section";
import React from "react";

const Custom404 = () => {
  return (
    <Section
      className="pt-[2rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="sign-in"
    >
      <div className="gradient px-16 text-white min-h-screen flex items-center">
        <div className="container grid grid-cols-12 mx-auto p-4 items-center">
          <div className="col-span-6 text-center p-4">
            <img src={roadmap3.src} alt="Not Found" />
          </div>

          <div className="col-span-6 text-center md:text-left p-4">
            <div>
              <div className="text-6xl font-medium">404</div>
              <div className="text-xl md:text-3xl font-medium mb-4">
                Oops. This page has gone missing.
              </div>
              <div className="text-lg mb-8">
                You may have mistyped the address or the page may have moved.
              </div>
            </div>
            <div className="w-[140px]">
              <Button px={"px-8"} className="hidden lg:flex" href="/">
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Custom404;
