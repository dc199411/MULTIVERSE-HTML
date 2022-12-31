import React from 'react'

import PropTypes from 'prop-types'

import './list-item.css'

const ListItem = (props) => {
  return (
    <div className="list-item-container">
      <h5 className="list-item-text HeadingThree">{props.new_prop}</h5>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  description:
    'You can aquire the MULTIVERSE Token on polygon on the following decentralized exchanges. Sushiswap, Dodo, Uniswap, and orion protocol the contract address is "0xFFec5b0Ec59a5760a3273764a9d100F782d8e221"',
  new_prop: 'Decentralized Exchanges',
}

ListItem.propTypes = {
  description: PropTypes.string,
  new_prop: PropTypes.string,
}

export default ListItem
