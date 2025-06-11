import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import {
    SiFramer,
    SiTailwindcss,
    SiReact,
    SiJavascript,
    SiCss3,
} from "react-icons/si";
import { RiHome2Fill } from "react-icons/ri";


const IconSideNav = () => {
    return (
        <div className="bg-slate-950 text-slate-100 flex">
            <SideNav />
        </div >
    );
};

const SideNav = () => {
    const [selected, setSelected] = useState(0);

    return (

        <nav className="h-screen w-fit bg-slate-950 p-4 flex flex-col items-center gap-2  border-r border-slate-700" >
            <h1 className="font-extrabold text-2xl">TR</h1>
            <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
                <RiHome2Fill />
            </NavItem>
            <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
                <SiReact />
            </NavItem>
            <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
                <SiJavascript />
            </NavItem>
            <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
                <SiFramer />
            </NavItem>
            <NavItem selected={selected === 4} id={4} setSelected={setSelected}>
                <SiCss3 />
            </NavItem>
        </nav >
    );
};

const NavItem = ({
    children,
    selected,
    id,
    setSelected,
}: {
    children: React.ReactNode;
    selected: boolean;
    id: number;
    setSelected: Dispatch<SetStateAction<number>>;
}) => {
    return (
        <motion.button
            className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
            onClick={() => setSelected(id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="block relative z-10">{children}</span>
            <AnimatePresence>
                {selected && (
                    <motion.span
                        className="absolute inset-0 rounded-md bg-indigo-600 z-0"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                    ></motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default IconSideNav;