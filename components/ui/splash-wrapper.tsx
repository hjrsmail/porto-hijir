"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./splash-screen";

export default function SplashWrapper({ children }: { children: React.ReactNode }) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsReady(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Splash Layer */}
            <div className={`fixed inset-0 z-50 transition-opacity duration-700 ease-in-out
                ${isReady ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <SplashScreen />
            </div>

            {/* Content Layer – tidak dibatasi tinggi layar */}
            <div className={`transition-opacity duration-700 ease-in-out
                ${isReady ? "opacity-100" : "opacity-0"}`}>
                {children}
            </div>
        </>
    );
}
