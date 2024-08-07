"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/src/utils/cn";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
  start,
}: {
  words: string[];
  duration?: number;
  className?: string;
  start: boolean;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    if (currentWord) {
      const word = words[words.indexOf(currentWord) + 1] || words[0];
      setCurrentWord(word);
      setIsAnimating(true);
    } else return;
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating && start)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation, start]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "relative z-10 inline-block px-2 text-left text-neutral-900 dark:text-neutral-100",
          className,
        )}
        key={currentWord}
      >
        {currentWord &&
          currentWord.split("").map((letter, index) => (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
      </motion.div>
    </AnimatePresence>
  );
};
