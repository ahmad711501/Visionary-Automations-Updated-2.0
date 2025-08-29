import { HeroGeometric } from "./shape-landing-hero";
import { SparklesCore } from "./sparkles";
import React from "react";

function DemoHeroGeometric() {
    return (
        <div className="relative min-h-screen">
            {/* Sparkles effect */}
            <div className="absolute inset-0 w-full h-full z-20">
                <SparklesCore
                    id="heroSparkles"
                    background="transparent"
                    minSize={0.5}
                    maxSize={2.0}
                    particleDensity={160}
                    className="w-full h-full"
                    particleColor="#00F0FF"
                    speed={1.5}
                />
            </div>
            
            {/* Hero content */}
            <div className="relative z-30">
                <HeroGeometric 
                    badge="Visionary Automations"
                    title1="Automate Your"
                    title2="Business Growth" 
                />
            </div>
        </div>
    );
}

export { DemoHeroGeometric }