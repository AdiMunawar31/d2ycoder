import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import SearchBox from "@/components/customs/SearchBox";

const FeaturesHeader = () => {
  return (
    <Section
      className="pt-[8rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="features-header"
    >
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-xl"
          title="Lets explore the modern tools"
        />

        <div className="flex justify-center -mt-8">
          <SearchBox width="w-1/2" onSearch={(query) => console.log(query)} />
        </div>
      </div>
    </Section>
  );
};

export default FeaturesHeader;
