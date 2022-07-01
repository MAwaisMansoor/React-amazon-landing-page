import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import './Header.css';

function Header() {
  return (
    <div className="header">
      <img className="header__logo"
        src='https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png '
        alt='logo' />

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">

        <div className="header__navItem">
          <span className="header__navItemOne">Hello,</span>
          <span className="header__navItemTwo">Sign in</span>
        </div>

        <div className="header__navItem">
          <span className="header__navItemOne">Returns</span>
          <span className="header__navItemTwo">& Orders</span>
        </div>

        <div className="header__navItem">
          <span className="header__navItemOne">Your</span>
          <span className="header__navItemTwo">Prime</span>
        </div>

        <div className="header__navBasket">
          <ShoppingBasketIcon />
          <span className="header__navItemTwo header__basketCount">0</span>
        </div>

      </div>
    </div>
  )
}

export default Header