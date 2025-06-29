import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CertificateCardProps {
    picture: StaticImageData;
}

export default function CertificateCard({ picture }: CertificateCardProps) {
    return (
        <Image
            src={picture}
            width={400}
            height={400}
            className="transition-all duration-300 ease-in-out hover:scale-103 brightness-70 hover:brightness-100 rounded-2xl"
            alt="mysertif"
        />
    );
}
