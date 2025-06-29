'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import codeDark from '@/public/images/code.webp';
import codeLight from '@/public/images/code_light.webp';
import { useEffect, useState } from 'react';

export default function CodeImage() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Supaya tidak error hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const imageSrc = resolvedTheme === 'dark' ? codeDark : codeLight;

    return (
        <div className="absolute top-27 left-115 z-0 transform-3d lg:block">
            <Image
                src={imageSrc}
                width={370}
                placeholder="empty"
                className="rotate-x-10 -rotate-y-15 rotate-z-10 rounded-lg duration-500 hover:-translate-x-10 hover:translate-y-10 hover:translate-z-10 hover:rotate-x-0 hover:rotate-y-0 hover:rotate-z-0"
                alt="Gambar Code"
            />
        </div>
    );
}
