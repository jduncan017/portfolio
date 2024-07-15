"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const CalloutParticles = ({ id }) => {
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
      fpsLimit: 60,
      particles: {
        color: {
          value: "#fff",
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.6,
          straight: false,
        },
        number: {
          value: 100,
        },
        opacity: {
          value: 0.6,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 0.6,
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div
        className={`ParticlesContainer flex w-full items-center transition-all duration-[2s] ${
          particleLoad
            ? "absolute left-0 top-0 h-full w-full overflow-hidden opacity-100"
            : "opacity-0"
        }`}
      >
        <Particles
          className="Particles h-[60%] w-full"
          id={id}
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
};
