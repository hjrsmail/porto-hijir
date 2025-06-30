import React from "react";
import { Card, CardDescription } from "./ui/card";
import Link from "next/link";
import GithubIcon from "./icons/github-icon";
import LinkedIcon from "./icons/linkedin-icon";
import MailIcon from "./icons/mail-icon";
import { Button } from "./ui/button";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import BackToTop from "./back-to-top";

export default function AppFooter() {
    return (
        <footer id="contact" className="bg-transparent text-black dark:text-gray-300 relative lg:pt-2 max-w-screen-2xl mx-auto">
            <div className="flex flex-col justify-center items-center text-center py-6">
                <p className="text-lg sm:text-3xl md:text-4xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Contact Information
                </p>
                <p className="text-md pt-1 md:text-lg font-light text-black dark:text-gray-400">
                    Let's Get in Touch!
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 w-full px-8 py-4 mx-auto space-y-2 sm:py-8 max-w-7xl sm:px-5">
                <div className="card-github">
                    <Card className=" min-h-[342px] min-w-[300px] mx-auto bg-darkk/30 hover:scale-103 duration-300 transition-all">
                        <div className="bg-gray-800 h-[144px] md:h-[150px] items-center justify-center flex rounded-md">
                            <GithubIcon className="w-20" />
                        </div>
                        <div className="card-title">
                            <h1 className="md:text-3xl font-bold tracking-wider">Github</h1>
                        </div>
                        <div className="border-t border-gray-800 md:w-[342px]">
                            <CardDescription className="mt-4 text-xs sm:text-sm text-black dark:text-gray-300">hijir512@gmail.com
                            </CardDescription>
                        </div>

                        <Link className="" href="https://github.com/hjrsmail" target="_blank" rel="noopener noreferrer">
                            <Button className=" w-full justify-between bg-white dark:bg-gray-800 text-black dark:text-gray-300 ">
                                <p className="text-xs sm:text-sm" >https://github.com/hjrsmail</p>
                                <ArrowUpRightFromSquareIcon />
                            </Button>
                        </Link>

                    </Card>
                </div>
                <div className="card-linkedin">
                    <Card className=" min-h-[342px] min-w-[300px] mx-auto bg-darkk/30 hover:scale-103 duration-300 transition-all">
                        <div className="bg-blue-600/50 h-[144px] md:h-[150px] items-center justify-center flex rounded-md">
                            <LinkedIcon className="w-20" />
                        </div>
                        <div className="card-title">
                            <h1 className="md:text-3xl font-bold tracking-wider">LinkedIn</h1>
                        </div>
                        <div className="border-t border-gray-800 md:w-[342px]">
                            <CardDescription className="mt-4 text-xs sm:text-sm text-black dark:text-gray-300">Hijir Ismail
                            </CardDescription>
                        </div>

                        <Link href="https://www.linkedin.com/in/hijir-ismail" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full justify-between bg-white dark:bg-gray-800 text-black dark:text-gray-300 ">
                                <p className="text-xs sm:text-sm" >https://www.linkedin.com/in/h...</p>
                                <ArrowUpRightFromSquareIcon />
                            </Button>
                        </Link>

                    </Card>
                </div>
                <div className="card-email">
                    <Card className=" min-h-[342px] min-w-[300px] mx-auto bg-darkk/30 hover:scale-103 duration-300 transition-all">
                        <div className="bg-red-600/50 h-[144px] md:h-[150px] items-center justify-center flex rounded-md">
                            <MailIcon className="w-20" />
                        </div>
                        <div className="card-title">
                            <h1 className="md:text-3xl font-bold tracking-wider">Email</h1>
                        </div>
                        <div className="border-t border-gray-800 md:w-[342px]">
                            <CardDescription className="mt-4 text-xs sm:text-sm text-black dark:text-gray-300">hijir512@gmail.com
                            </CardDescription>
                        </div>

                        <Link href="mailto:hijir512@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full justify-between bg-white dark:bg-gray-800 text-black dark:text-gray-300 ">
                                <p className="text-xs sm:text-sm" >mailto:hijir512@gmail.com</p>
                                <ArrowUpRightFromSquareIcon />
                            </Button>
                        </Link>

                    </Card>
                </div>

            </div>


            <div className="border-t border-gray-100 pt-6 mt-2 md:mt-10 flex flex-row gap-5 sm:items-center justify-between dark:border-gray-800 py-8 px-5">
                <p className=" text-xs sm:text-sm text-gray-500 dark:text-gray-400 pointer-events-none">
                    Copyright 2025 &copy; Hijir Ismail.
                </p>

                {/* Button Back to Top */}
                <BackToTop />
            </div>
        </footer >
    );
};

// This code defines a React functional component named `AppFooter` that renders a footer section for a web application.