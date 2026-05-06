"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import "./Navbar.css";

type NavbarProps = {
    onClientsClick?: () => void;
};

export default function Navbar({ onClientsClick }: NavbarProps) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const isProjectsPage = pathname === "/ourprojects";

    return (
        <>
            <nav className="navbar glass">
                {/* <h2>V-Square</h2> */}

                {/* Hamburger */}
                <div className="hamburger" onClick={() => setOpen(!open)}>
                    <span className={open ? "line active" : "line"}></span>
                    <span className={open ? "line active" : "line"}></span>
                    <span className={open ? "line active" : "line"}></span>
                </div>
            </nav>

            {/* Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="menu-overlay glass"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                    >
                        {/* ✅ Show Home ONLY on projects page */}
                        {isProjectsPage && (
                            <Link href="/" onClick={() => setOpen(false)}>
                                Home
                            </Link>
                        )}

                        {/* <Link href="#work" onClick={() => setOpen(false)}>
                            Work
                        </Link> */}


                        {!isProjectsPage && (
                            <Link href="/ourprojects" onClick={() => setOpen(false)}>
                                Projects
                            </Link>
                        )}

                        {!isProjectsPage &&
                            <Link href="#contact" onClick={() => setOpen(false)}>
                                Contact
                            </Link>
                        }
                        {!isProjectsPage &&
                            <Link href="#client" onClick={() => setOpen(false)}>
                                Clients
                            </Link>
                        }

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}