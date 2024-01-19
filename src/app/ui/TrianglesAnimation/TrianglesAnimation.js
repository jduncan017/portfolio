import React from 'react';
import './TrianglesAnimation.css';

export const TrianglesAnimation = () => {

  const buildTringles = () => {
    let triangles = []
    for ( let i = 1; i <= 7; i++ ) {
      triangles.push(<polygon className={`triangle triangle-${i}`} key={i} points='500,200 759,650 241,650' />)
    }
    return (
      <svg className='triangle-container' viewBox='0 0 1000 1000'>
        { triangles }
      </svg>
    )
  }

  return (
    <section className='triangles-outer-container'>
      { buildTringles() }
    </section>
  );
}
