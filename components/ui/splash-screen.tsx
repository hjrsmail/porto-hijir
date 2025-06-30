// components/ui/SplashScreen.tsx
"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function SplashScreen() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gradient-to-tr from-gray-950 to-darkk">
            <DotLottieReact
                src="/animations/loading.json"
                autoplay
                loop
                style={{ width: 600, height: 600 }}
            />
        </div>
    );
}
