import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <span>{props.text}</span>
    </div>
  )
}

Component1.defaultProps = {
  text: 'You can aquire the MULTIVERSE Token on polygon on the following decentralized exchanges. Sushiswap, Dodo, Uniswap, and orion protocol the contract address is "0xFFec5b0Ec59a5760a3273764a9d100F782d8e221"',
}

Component1.propTypes = {
  text: PropTypes.string,
}

export default Component1
