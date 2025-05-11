"use client"
import Link from "next/link"
import { links } from "@/data/NavLink"
import { usePathname } from "next/navigation"
const Navlink = () => {
    const pathname = usePathname();
    const handleScroll = (e: { preventDefault: () => void }, href: any) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",

            });
        }
    }

    return (
        <ul className="gap-4 hidden md:flex ">
            {links.map((link) => (
                <li key={link.label} className={`text-lg font-semibold ${pathname === link.href ? "text-white" : "text-text/50"} hover:text-text transition-all duration-300`}>
                    <a href={link.href} onClick={(e) => handleScroll(e, link.href)}
                        className="cursor-pointer text-lg font-semibold hover:text-text transition-all duration-300" >
                        <span className="text-primary"> # </span>

                        {link.label}</a>
                </li>
            ))}
        </ul>
    )
}
export default Navlink