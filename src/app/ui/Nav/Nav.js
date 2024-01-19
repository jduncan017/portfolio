import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';

export const Nav = () => {

  const [ mobileNavVisible, setMobileNavVisible ] = useState(false);
  const [ animateClass, setAnimateClass ] = useState('hidden');
  const [ hamburgerBtnTurnLeft, setHamburgerBtnTurnLeft ] = useState('');
  const mobileNavRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  const handleClickOutside = event => {
    if (mobileNavVisible && !mobileNavRef.current.contains(event.target)) {
      onHamburgerClick();
    }
  }

  const performSmoothScroll = sectionName => {
    document.querySelector(`#${sectionName}-section`).scrollIntoView({behavior: 'smooth'});
    onHamburgerClick();
  }

  const printNavButtons = () => {
    const navHeadings = ['home', 'about', 'simon', 'experience', 'projects', 'contact'];
    const navButtons = navHeadings.map(heading => {
      return <button tabIndex='0' aria-label={`${heading} section`} key={`${heading}`} onClick={() => performSmoothScroll(`${heading}`)} className='nav-buttons'>{`${heading}`}</button>
    })
    return navButtons;
  }

  const onHamburgerClick = () => {
    if (mobileNavVisible) {
      setHamburgerBtnTurnLeft('hamburger-button-turn-left')
      setMobileNavVisible(false);
      setAnimateClass('mobile-menu animate-slide-out');
      setTimeout(() => {
        setAnimateClass('hidden');
      }, 800);
    } else {
      setMobileNavVisible(true);
    }
  }

  return (
    <nav>
      <div ref={mobileNavRef} className='mobile-nav-container'>
        <button onClick={onHamburgerClick} aria-label='toggle menu visibility' className={ !mobileNavVisible ? `hamburger-button ${hamburgerBtnTurnLeft}` : 'hamburger-button-active' }></button>
        <div className={ mobileNavVisible ? 'mobile-menu animate-slide-in' : `${animateClass}`}>
          { printNavButtons() }
        </div>
      </div>
      <div className='full-nav-container'>
        { printNavButtons() }
      </div>
    </nav>
  );
}
