"use client";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import { useEffect, ReactNode } from "react";

type SectionBorderProps = {
    children: ReactNode;
    className?: string;
    padding?: string;
};

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

function SectionBorder({ children, className = "", padding = "p-6" }: SectionBorderProps) {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, [color]);

    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
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
            className={`rounded-2xl transition-all duration-300 ${padding} ${className}`}
        >
            {children}
        </motion.section>
    );
}

export default SectionBorder;
