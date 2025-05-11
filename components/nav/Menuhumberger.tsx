"use client"
import { TiThMenu } from "react-icons/ti";
import { links } from "@/data/NavLink"
import { useState, useEffect } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLine } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";


const Menuhumberger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    // ปิดเมนูอัตโนมัติเมื่อเปลี่ยน path
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Hamburger Button (เฉพาะบนจอเล็ก) */}
            {/* ปุ่มแฮมเบอร์เกอร์ */}
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="cursor-pointer block md:hidden z-50 hover:scale-110 transition-transform duration-200"
                        onClick={handleClick}
                    >
                        <FaRegWindowClose size={30} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="cursor-pointer block md:hidden z-10 hover:scale-110 transition-transform duration-200"
                        onClick={handleClick}
                    >
                        <TiThMenu size={30} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* เมนู */}
            {isOpen && (
                <ul className="fixed top-0 left-0 w-full h-screen bg-black p-4 pt-6 z-40 md:hidden">
                    <h1 className="text-2xl font-bold mb-6 text-center hover:scale-105 transition-transform duration-300">
                        Portfolio
                    </h1>

                    {links.map((link) => (
                        <li
                            key={link.label}
                            className={`text-xl font-semibold border flex justify-center rounded-full my-4 px-6 py-2 border-white hover:scale-105 transition-transform duration-300 ${pathname === link.href
                                    ? "text-white"
                                    : "text-text/50 hover:text-text"
                                }`}
                        >
                            <Link href={link.href} onClick={() => setIsOpen(false)}>
                                <span className="text-primary"> # </span>
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <div className="flex justify-center gap-6 mt-10">
                        <Link target="_blank" href="https://www.facebook.com/">
                            <FaFacebookSquare
                                size={32}
                                className="bg-white text-blue-600 rounded-sm hover:scale-110 transition-transform duration-300"
                                title="Facebook"
                            />
                        </Link>
                        <Link target="_blank" href="https://www.instagram.com/">
                            <FiInstagram
                                size={32}
                                className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-md hover:scale-110 transition-transform duration-300"
                                title="Instagram"
                            />
                        </Link>
                        <Link target="_blank" href="https://line.me/ti/p/">
                            <FaLine
                                size={32}
                                className="text-green-600 bg-white rounded-md hover:scale-110 transition-transform duration-300"
                                title="Line"
                            />
                        </Link>
                    </div>

                    <footer className="border-text border-t mt-99 py-6 text-center hover:scale-105 transition-transform duration-300">
                        @ Copyright 2025. Made by Dechawat
                    </footer>
                </ul>
            )}

        </>

    )
}
export default Menuhumberger