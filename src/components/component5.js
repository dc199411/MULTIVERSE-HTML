import React from 'react'

import PropTypes from 'prop-types'

import Component1 from './component1'
import './component5.css'

const Component5 = (props) => {
  return (
    <div className="component5-container">
      <h5 className="component5-text HeadingThree">{props.heading}</h5>
      <Component1></Component1>
    </div>
  )
}

Component5.defaultProps = {
  heading: 'Decentralized Exchanges',
}

Component5.propTypes = {
  heading: PropTypes.string,
}

export default Component5
