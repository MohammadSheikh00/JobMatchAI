import React, { useRef } from 'react';
import './Header.css';
import clickSound from './zapsplat_household_switch_button_lawnmower_plastic_click_fast_001_110042.mp3';

function Header({ scrollToFeatures, scrollToFooter }) {
  const audioRef = useRef(new Audio(clickSound));

  const handleClick = (scrollAction) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    if (scrollAction) scrollAction();
  };

  return (
    <header className="header">
      <div className="logo">JobMatchAI</div>
      <nav className="nav">
        <button className="nav-link" onClick={() => handleClick(scrollToFeatures)}>About Us</button>
        <button className="nav-link" onClick={() => handleClick(scrollToFooter)}>Contact Us</button>
      </nav>
    </header>
  );
}

export default Header;
