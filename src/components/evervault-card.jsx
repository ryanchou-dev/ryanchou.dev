"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "./utils/cn";
import Image from "next/image";
import cow from "../../public/moo.svg";

function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
	  width: undefined,
	  height: undefined,
	});

	useEffect(() => {
	  // only execute all the code below in client side
	  // Handler to call on window resize
	  function handleResize() {
		// Set window width/height to state
		setWindowSize({
		  width: window.innerWidth,
		  height: window.innerHeight,
		});
	  }

	  // Add event listener
	  window.addEventListener("resize", handleResize);

	  // Call handler right away so state gets updated with initial window size
	  handleResize();

	  // Remove event listener on cleanup
	  return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
  }

export const EvervaultCard = ({
  text,
  className,
}) => {
	const size = useWindowSize();
  let mouseX = useMotionValue(size.width / 3.5)
  let mouseY = useMotionValue(size.height / 3.5)

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(5000);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(5000);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-1/2 sm:h-3/4 relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className=" group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative py-8 px-8  rounded-full flex items-center justify-center text-white font-bold lg:text-6xl text-3xl">
            <div className="absolute w-full h-full bg-white/60 via-[#C3F0F5]/70 from-[#ffdf6b]/70  to-[#a9ff6b]/70 blur-sm rounded-full" />
			<div className="z-10 flex-col flex items-center justify-center">

            <span className="text-black z-20 flex-shrink text-2xl sm:text-3xl lg:text-5xl font-sans font-semibold flex justify-center items-center">
				<Image
							src={cow}
							alt="mascot"
							className="  inline-block lg:w-24 w-12 mr-4 -ml-2 "
						/>
						{text}</span>
			</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0  rounded-2xl bg-gradient-to-tr via-[#C3F0F5] from-[#ffdf6b]  to-[#a9ff6b]  group-hover/card:opacity-100 opacity-30 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl  mix-blend-overlay opacity-30 group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
