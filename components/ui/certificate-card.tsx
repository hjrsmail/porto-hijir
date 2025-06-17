import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CertificateCardProps {
    picture: StaticImageData;
}

export default function CertificateCard({ picture }: CertificateCardProps) {
    return (
        <div className="rounded-lg overflow-hidden border border-gray-900 bg-transparent shadow-sm">
            <div className="relative">
                <Image
                    src={picture}
                    className="transition-all duration-300 ease-in-out hover:scale-103 brightness-70 hover:brightness-100"
                    alt="mysertif"
                />
            </div>
        </div>
    );
}
