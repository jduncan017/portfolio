"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesAnimation = () => {
  const [init, setInit] = useState(false);
  const [particleLoad, setParticleLoad] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    setParticleLoad(true);
  };

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: {
        color: {
          value: "#00060d",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#004e54",
        },
        links: {
          color: "#004e54",
          distance: 200,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            height: 600,
          },
          value: 200,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 3,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div
        className={`ParticlesContainer transition-all duration-[2s] ${
          particleLoad
            ? "absolute left-0 top-0 h-full w-full overflow-hidden opacity-100"
            : "opacity-0"
        }`}
      >
        <Particles
          className="Particles h-full"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
};
