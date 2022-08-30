import React from 'react'
import './style/header.css'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className="header">
        <div className="header-left">
            <img src="https://tse2.mm.bing.net/th?id=OIP.q9s2sSjwz87hMp3bE2WpmwHaHa&pid=Api&P=0" alt='' />
            <div className="header-search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header-right">

        </div>
    </div>
  )
}

export default Header