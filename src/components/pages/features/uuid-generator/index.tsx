import React from "react";
import Section from "../../Section";
import Heading from "../../Heading";
import FormUUIDGenerator from "./FormUUIDGenerator";

const UUIDGenerator = () => {
  return (
    <Section
      className="pt-[8rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="url-shortener"
    >
      <div className="container relative z-2">
        <div className="flex relative z-1 flex-col w-full justify-center bg-transparent pb-20">
          <Heading
            className="md:max-w-md lg:max-w-xl"
            title="Easily Generate UUID!"
          />
          <div className="-mt-16 w-full text-center">
            have a simple way to generate UUIDs
          </div>

          <FormUUIDGenerator />
        </div>
      </div>
    </Section>
  );
};

export default UUIDGenerator;
