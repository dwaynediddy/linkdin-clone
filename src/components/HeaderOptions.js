import React from 'react'
import '../style/headerOption.css'

const HeaderOptions = ({ Icon, title }) => {
  return (
    <div className="header-option">
        {Icon && <Icon className="header-option-icon" />}
        <h3 className="header-option-title">{title}</h3>
    </div>
  )
}

export default HeaderOptions