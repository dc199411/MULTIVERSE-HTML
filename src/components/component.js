import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image"
      />
      <h5 className="component-text HeadingThree">{props.heading}</h5>
      <span className="component-text1">{props.text}</span>
    </div>
  )
}

AppComponent.defaultProps = {
  image_alt: 'image',
  heading: 'MULTIVERSE',
  text: 'This design system is fully supported on any device.',
  image_src: '/playground_assets/credit%20card1.svg',
}

AppComponent.propTypes = {
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default AppComponent
