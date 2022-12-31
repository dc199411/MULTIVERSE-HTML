import React from 'react'

import PropTypes from 'prop-types'

import './component3.css'

const Component3 = (props) => {
  return (
    <div className="component3-container">
      <h5 className="component3-text HeadingThree">{props.heading}</h5>
      <span>
        <span>
          We have partnered with crosschainbridges.org to bring crosschain
          staking and rewards pools for the MULTIVERSE Token
          visit https://app.crosschainbridge.org/bridge/tokens to Earn.
        </span>
        <br></br>
      </span>
    </div>
  )
}

Component3.defaultProps = {
  heading: 'Rewards',
}

Component3.propTypes = {
  heading: PropTypes.string,
}

export default Component3
