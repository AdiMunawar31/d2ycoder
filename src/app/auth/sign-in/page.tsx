import { grid, heroBackground, service1, service2 } from "@/assets";
import Section from "@/components/pages/Section";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

const SignIn = () => {
  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="sign-in"
    >
      <div className="container relative">
        <div className="flex relative z-1 flex-wrap min-h-screen w-full content-center justify-center bg-transparent pb-20">
          <div className="flex relative overflow-hidden shadow-md p-0.5 rounded-[1.5rem] bg-conic-gradient">
            <div className="absolute top-0 left-0 max-w-full">
              <img
                className="w-full"
                src={grid.src}
                width={550}
                height={550}
                alt="Grid"
              />
            </div>
            <div
              className="flex relative z-1 flex-wrap content-center justify-center rounded-l-3xl bg-black bg-[length:100%_100%] md:max-w-[23rem]"
              style={{ width: "24rem", height: "32rem" }}
            >
              <div className="w-72">
                <h1 className="text-xl font-semibold">Welcome back</h1>
                <small className="text-gray-400">
                  Welcome back! Please enter your details
                </small>
                <form className="mt-4">
                  <div className="mb-3">
                    <Label className="mb-2 block text-xs font-semibold">
                      Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full py-2 px-4 rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 text-gray-500"
                    />
                  </div>
                  <div className="mb-3">
                    <Label className="mb-2 block text-xs font-semibold">
                      Password
                    </Label>
                    <Input
                      type="password"
                      placeholder="*****"
                      className="block w-full py-2 px-4 rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 text-gray-500"
                    />
                  </div>
                  <div className="mb-3 flex flex-wrap content-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="mr-1 checked:bg-purple-700"
                    />{" "}
                    <label
                      htmlFor="remember"
                      className="mr-auto text-xs font-semibold"
                    >
                      Remember for 30 days
                    </label>
                    <a
                      href="#"
                      className="text-xs font-semibold text-purple-700"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mb-3">
                    <button className="mb-8 block w-full text-center text-white bg-purple-600 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                      Sign in
                    </button>
                    <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                      <img
                        className="w-5 mr-2"
                        src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                      />
                      Sign in with Google
                    </button>
                  </div>
                </form>
                {/* Footer */}
                <div className="text-center">
                  <span className="text-xs text-gray-400 font-semibold">
                    Don't have account?
                  </span>
                  <a href="#" className="text-xs font-semibold text-purple-700">
                    {" "}
                    Sign up
                  </a>
                </div>
              </div>
            </div>
            {/* Login banner */}
            <div
              className="flex flex-wrap content-center bg-black justify-center rounded-r-3xl"
              style={{ width: "24rem", height: "32rem" }}
            >
              <img
                className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-3xl"
                src={service2.src}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
        <img
          src={heroBackground.src}
          className="w-full"
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
    </Section>
  );
};

export default SignIn;
