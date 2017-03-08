import React from 'react'

const Nav = ({ viewPortfolio }) => {
return (
<nav className="nav">
  <svg width="40px" height="40px" viewBox="40 20 40 40" version="1.1">
    <g id="Logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(40.000000, 20.000000)">
      <rect id="Rectangle-2" fill="#4990E2" x="0" y="0" width="40" height="40"></rect>
      <rect id="Rectangle-3" fill="#FFFFFF" x="3" y="3" width="34" height="34"></rect>
      <text id="AW" fontFamily="Garamond" fontSize="21" fontWeight="normal" letterSpacing="-2" fill="#4990E2">
        <tspan x="4.5361816" y="27">A</tspan>
        <tspan x="16.1904541" y="27">W</tspan>
      </text>
    </g>
  </svg>

  <div className="nav__buttons">
    <a className="nav__button" onClick={viewPortfolio}>
      Portfolio
    </a>
    <a className="nav__button">
      Photos
    </a>
  </div>

  <div className="nav__socials">
    <a className="nav__social">
      <span className="fa fa-medium"></span>
    </a>
    <a className="nav__social">
      <span className="fa fa-linkedin"></span>
    </a>
    <a className="nav__social">
      <span className="fa fa-github"></span>
    </a>
    <a className="nav__social">
      <span className="fa fa-envelope"></span>
    </a>
  </div>
</nav>
)}

export default Nav