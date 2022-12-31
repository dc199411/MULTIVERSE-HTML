import React from 'react'

import PropTypes from 'prop-types'

import Component2 from './component2'
import './component4.css'

const Component4 = (props) => {
  return (
    <div className="component4-container">
      <h5 className="component4-text HeadingThree">{props.heading}</h5>
      <Component2></Component2>
    </div>
  )
}

Component4.defaultProps = {
  heading: 'Bridges',
}

Component4.propTypes = {
  heading: PropTypes.string,
}

export default Component4
