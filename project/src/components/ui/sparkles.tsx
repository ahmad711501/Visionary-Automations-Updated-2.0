"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    // Container is loaded
  };

  const generatedId = useId();
  
  return (
    <div 
      className={cn("opacity-100", className)}
      style={{ width: '100%', height: '100%' }}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true as any,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor || "#00F0FF",
                animation: {
                  h: {
                    enable: true,
                    speed: 5,
                    sync: false,
                  },
                },
              },
              links: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "out",
                },
                random: true,
                speed: speed || 2,
                straight: false,
                path: {
                  enable: false,
                },
                trail: {
                  enable: false,
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: particleDensity || 160,
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.8,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 1,
                  decay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: minSize || 1, max: maxSize || 3 },
                animation: {
                  enable: true,
                  speed: 2,
                  sync: false,
                  startValue: "random",
                  destroy: "none",
                  minimumValue: 0.1,
                },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.05,
                  opacity: 1,
                },
                lines: {
                  enable: false,
                },
              },
              life: {
                duration: {
                  value: 3,
                  sync: false,
                },
                count: 0,
              },
              roll: {
                darken: {
                  enable: false,
                  value: 0,
                },
                enable: false,
                enlighten: {
                  enable: true,
                  value: 0,
                },
                mode: "vertical",
                speed: 25,
              },
              tilt: {
                direction: "random",
                enable: true,
                value: 10,
                animation: {
                  enable: true,
                  speed: 10,
                  sync: false,
                },
              },
              wobble: {
                distance: 5,
                enable: true,
                speed: {
                  angle: 50,
                  move: 10,
                },
              },
              zIndex: {
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
};