import React from "react";
import Image from "next/image";

interface CertificateCardProps {
    image: string;
    title: string;
    publisher: string;
    onClick?: () => void;
    className?: string;
}

export default function CertificateCard({
    image,
    title,
    publisher,
    onClick,
    className,
}: CertificateCardProps) {
    return (
        <div
            className={`relative w-full max-w-[400px] aspect-[43/30] overflow-hidden rounded-md group cursor-pointer ${className || ""}`}
            onClick={onClick}
        >
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover brightness-75 transition-all duration-300 ease-in-out group-hover:brightness-100 group-hover:scale-105"
            />


            {/* Overlay Layer */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <h3 className="text-white dark:text-gray-100 text-lg font-semibold drop-shadow-md">
                    {title}
                </h3>
                <p className="text-gray-200 dark:text-gray-300 text-sm drop-shadow">
                    {publisher}
                </p>
            </div>

        </div>
    );
}
