"use client";

import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/outline";


export default function BackToTop() {

    return (
        <>
            {/* Back to Top */}
            <Link href="" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }} className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 inline-flex items-center gap-1">
                <ArrowUpIcon className="size-4" />
                <p className="">Back to Top</p>
            </Link>
        </>
    )

}