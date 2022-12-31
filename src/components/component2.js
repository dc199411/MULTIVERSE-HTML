import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <span>{props.text}</span>
    </div>
  )
}

Component2.defaultProps = {
  text: 'You can aquire the MULTIVERSE Token by bridging on the following platforms crosschainbridge.org and Multichain the crosschain router protocol.',
}

Component2.propTypes = {
  text: PropTypes.string,
}

export default Component2
