"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      (<motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            (<motion.span
              key={word + idx}
              className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-br py-2 from-[#032E3A] to-[#032E3A] [text-shadow:0_0_rgba(0,0,0,0.1)] opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>)
          );
        })}
      </motion.div>)
    );
  };

  return (
    (<div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className=" font-display text-center text-4xl font-bold tracking-[-0.01em] drop-shadow-sm md:text-5xl lg:text-5xl leading-snug lg:leading-[4rem]">
          {renderWords()}
        </div>
      </div>
    </div>)
  );
};