"use client";

import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";


import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <section className="relative grid h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200">
            <div className="relative z-10 flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
                >
                    Tyler Ruiz
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl bg-gradient-to-br  bg-clip-text text-center text-2xl font-medium leading-tight text-transparent sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight mb-6"
                >
                    <ContainerTextFlip className="mt-4" />
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed"
                >
                    I specialize in building dynamic and responsive web applications using technologies like Next.JS, React, PostgreSQL, and more!
                    Explore the rest of my portfolio to learn about me, my projects, and my experience.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        border,
                        boxShadow,
                    }}
                    whileHover={{
                        scale: 1.015,
                    }}
                    whileTap={{
                        scale: 0.985,
                    }}
                    onClick={() => {
                        window.scrollTo({
                            top: window.innerHeight,
                            behavior: 'smooth'
                        });
                    }}
                    className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 cursor-pointer"
                >
                    Scroll and learn about me!
                    <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.button>
            </div>

        </section>
    );
};