import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CertificateCardProps {
    picture: StaticImageData;
    onClick?: () => void;
    className?: string
}


export default function CertificateCard({ picture, onClick, className }: CertificateCardProps) {
    return (
        <div className={`relative w-full max-w-[400px] aspect-[43/30] overflow-hidden rounded-md ${className || ''}`}>
            <Image
                onClick={onClick}
                src={picture}
                alt="mysertif"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-all duration-300 ease-in-out hover:scale-103 brightness-70 hover:brightness-100 rounded-md hover:shadow-lg shadow-gray-300 dark:shadow-gray-800"
            />
        </div>
    );
}



