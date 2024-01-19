import React, { useEffect, useState } from 'react';
import Particles from 'react-particles-js';
import './ParticlesAnimation.css';

export const ParticlesAnimation = () => {

  const [ numParticles, setNumParticles ] = useState(120)

  useEffect(() => {
    window.addEventListener('resize', updateParticles)
    updateParticles()
  })

  const updateParticles = () => {
    const viewportWidth = window.innerWidth
    if (viewportWidth > 400) setNumParticles(120)
    else setNumParticles(200)
  }

  return (
    <section className='particles-outer-container'>

      <Particles
        className='particles'
        params={{
          particles: {
            number: {
              value: numParticles,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            size: {
              value: 3,
            },
            move: {
              speed: 0.8,
            },
            color: {
              value: '#752082',
            },
            opacity: {
              value: 0.9,
              anim: {
                enable: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#F600FF',
              opacity: 0.4,
              width: 2,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          }
        }} 
      />

    </section>
  );
}