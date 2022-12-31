import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">MULTIVERSE</span>
          <span>Copyright © 2022 multiverseC2C.</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text02">
              <span className="Large">Social</span>
              <br></br>
            </span>
            <span className="footer-text05">
              <a
                href="https://twitter.com/multiversec2c"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
              <a
                href="https://twitter.com/multiversec2c"
                target="_blank"
                rel="noreferrer noopener"
              >
                <br></br>
              </a>
            </span>
            <a
              href="https://t.me/fntoken"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link2"
            >
              Telegram
            </a>
          </div>
          <div className="footer-container4">
            <span className="footer-text07">
              <a
                href="https://medium.com/@FN_TOKENS"
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link3"
              >
                Medium
              </a>
              <a
                href="https://medium.com/@FN_TOKENS"
                target="_blank"
                rel="noreferrer noopener"
              >
                <br></br>
              </a>
            </span>
            <a
              href="https://discord.gg/AVRFrVGdN9"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link5"
            >
              <span className="footer-text09 Large">Discord</span>
              <br></br>
            </a>
          </div>
        </div>
        <div className="footer-container5">
          <div className="footer-container6">
            <span className="footer-text11 Large">Company</span>
            <span className="footer-text12 Large">About Us</span>
            <span className="footer-text13 Large">Careers</span>
          </div>
          <div className="footer-container7">
            <span className="footer-text14 Large">Pages</span>
            <span className="footer-text15">Home</span>
            <a
              href="https://fntokens.xyz"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link6 Large"
            >
              Futures
            </a>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer>
  )
}

export default Footer
