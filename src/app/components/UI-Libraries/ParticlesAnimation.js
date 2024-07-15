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
        image: "url('/bg1.jpg')",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: "#00060d",
          },
          opacity: 1,
        },
        enable: true,
      },
      clear: true,

      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {},
      },
      particles: {
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            height: 600,
          },
          value: 150,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 30,
          },
        },
      },
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
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
