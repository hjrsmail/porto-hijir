"use client";

import React from "react";
import { useState, useRef } from "react";
import ThemeToggle from "@/components/ui/theme-toggle";
import NavLink from "./ui/nav-link";
import NavLinkMobile from "./ui/nav-link-mobile";
import { useActiveSection } from "@/hooks/use-active-session";
import Link from "next/link";
import Image from "next/image";

export default function AppNavbar() {

    // Id Selection Navv
    const sectionIds = ['home', 'about', 'skills', 'project', 'contact'];
    const activeId = useActiveSection(sectionIds);

    // Navigation 
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    return (
        <nav className="fixed top-0 w-full z-50 bg-darkk/50 border-b border-y-gray-900 backdrop-blur" >
            <div className="mx-auto max-w-screen-3xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="items-center hidden md:block">
                        <div className="shrink-0 ">
                            {/* <Image
                                width={0}
                                height={0}
                                className="size-8"
                                src=""
                                alt="Your Company"
                            /> */}
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4 bg-white dark:bg-white/30 px-6 py-1 rounded-xl border border-gray-200">
                            {sectionIds.map(id => (
                                <NavLink key={id} targetId={id} activeId={activeId}>
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </NavLink>
                            ))}

                            {/* Dropdown */}
                            {/* <div
                                className="relative text-md font-medium"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <span className="">Other</span>
                                {dropdownOpen && (
                                    <div
                                        ref={dropdownRef}
                                        className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 text-md">
                                        <Link href="/other/team" className="block px-4 py-2 text-gray-700 hover:bg-yellow-500">Our Team</Link>
                                        <Link href="/other/history" className="block px-4 py-2 text-gray-700 hover:bg-yellow-500">History</Link>
                                        <Link href="/other/mission" className="block px-4 py-2 text-gray-700 hover:bg-yellow-500">Mission</Link>
                                    </div>
                                )}
                            </div> */}
                        </div>
                    </div>

                    {/* Theme Toggle */}
                    <div className="flex items-center order-1 md:order-none ">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex order-2 md:order-none md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            ) : (
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 border-b border-gray-700">
                        {sectionIds.map(id => (
                            <NavLinkMobile key={id} targetId={id} activeId={activeId}>
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </NavLinkMobile>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}