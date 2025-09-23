"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 0.3,
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for ultra-smooth
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Game your way <br /> to token literacy
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col items-center justify-center overflow-hidden bg-transparent w-full rounded-md z-10",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-100 items-center justify-center isolate z-10 ">
        <motion.div
          initial={{ opacity: 0.5, width: "50vw", scale: 0.8 }}
          whileInView={{ opacity: 1, width: "100vw", scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-full bg-gradient-conic from-[#5b10fd] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "50vw", scale: 0.8 }}
          whileInView={{ opacity: 1, width: "100vw", scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-full bg-gradient-conic from-transparent via-transparent to-[#5b10fd] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-full -translate-y-1/2 rounded-full bg-[#5b10fd] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem", scale: 0.8 }}
          whileInView={{ width: "16rem", scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-[#5b10fd] blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "50vw", scale: 0.8 }}
          whileInView={{ width: "100vw", scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-auto z-50 h-0.5 w-full -translate-y-[7rem] bg-[#5b10fd] "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-20 flex-col items-center px-5 pointer-events-none">
        {children}
      </div>
    </div>
  );
};