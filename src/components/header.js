import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <div className="header-container1">
            <img
              alt={props.image_alt}
              src={props.image_src1}
              className="header-image"
            />
          </div>
          <div className="header-menu">
            <Link to="/" className="header-navlink Large">
              Home
            </Link>
            <a
              href="https://fntokens.xyz"
              target="_blank"
              rel="noreferrer noopener"
              className="header-link Large"
            >
              FUTURES
            </a>
            <a
              href="https://mvdex.netlify.com"
              target="_blank"
              rel="noreferrer noopener"
              className="header-link1"
            >
              DEX
            </a>
            <a
              href="https://fntokens4.wixsite.com/mvheroes"
              target="_blank"
              rel="noreferrer noopener"
              className="header-link2"
            >
              <span className="Large header-text">MV-HERORES</span>
              <br></br>
            </a>
          </div>
          <div className="header-container2">
            <div className="header-container3">
              <div className="header-container4"></div>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
          <div className="header-container5">
            <div
              data-thq="thq-dropdown"
              className="header-thq-dropdown list-item"
            >
              <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle"
                  >
                    <span className="header-text2">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle1"
                  >
                    <span className="header-text3">Sub-menu Item</span>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle2"
                  >
                    <span className="header-text4">Sub-menu Item</span>
                  </div>
                </li>
              </ul>
            </div>
            <a
              href="https://fntokens.xyz"
              target="_blank"
              rel="noreferrer noopener"
              className="header-link3"
            >
              <PrimaryPinkButton
                button="Trade Now"
                className="header-component"
              ></PrimaryPinkButton>
            </a>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-link4">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink1 Large">
              Home
            </Link>
            <span className="header-text5 Large">Profile</span>
            <Link to="/coming-soon" className="header-navlink2 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_src1: '/playground_assets/logowithtext-200h.png',
}

Header.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Header
