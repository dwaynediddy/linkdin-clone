import React from 'react'
import './style/header.css'
import HeaderOptions from './components/HeaderOptions'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className="header">
        <div className="header-left">
            <img src="https://tse2.mm.bing.net/th?id=OIP.q9s2sSjwz87hMp3bE2WpmwHaHa&pid=Api&P=0" alt='' />
            <div className="header-search">
                <SearchIcon />
                <input type="text" placeholder="search" />
            </div>
        </div>
        <div className="header-right">
          <HeaderOptions Icon={HomeIcon} title='Home' />
          <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
          <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
          <HeaderOptions Icon={ChatIcon} title='Messaging' />
          <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
          <HeaderOptions  alt='user avatar'avatar='https://tse2.mm.bing.net/th?id=OIP.f1IszCjHtBlCEXYmy9hsQwHaHa&pid=Api&P=0' title='me' />
        </div>
    </div>
  )
}

export default Header