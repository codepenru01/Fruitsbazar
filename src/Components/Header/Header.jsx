import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header className="site-header">
        <div className="head">
          <div className="container">
            <div className="header__inner">
              <a className='logo__link' href="index.html">
                <img src="./src/Components/Img/logo.svg" alt="svg" width="202" height="24" />
              </a>
              <div className="input__groups">
                <label className='input__label'>
                  <img src="./src/Components/Img/search.svg" alt="svg" width="24" height="24" />
                  <input type="text" placeholder='Search For Products' name="text" id="text" />
                </label>
                <div className="icons">
                  <a href="#link">
                    <img src="./src/Components/Img/map.svg" alt="svg" width="48" height="48" />
                  </a>
                  <a href="#link">
                    <img src="./src/Components/Img/love.svg" alt="svg" width="48" height="48" />
                  </a>
                  <a href="#link">
                    <img src="./src/Components/Img/cart.svg" alt="svg" width="48" height="48" />
                  </a>
                  <a href="#link">
                    <img src="./src/Components/Img/account.svg" alt="svg" width="48" height="48" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="container">
            <div className="header__body">
              <ul className="navbar">
                <li className="navbar__items align">
                  <a className="navbar__item-link" href="#link">All Categories</a>
                  <img src="./src/Components/Img/bottom.svg" alt="svg" width="12" height="12" />
                </li>
                <li className="navbar__items">
                  <a className="navbar__items-link" href="#link">Special offers</a>
                </li>
                <li className="navbar__items">
                  <a className="navbar__items-link" href="#link">Track order</a>
                </li>
                <li className="navbar__items">
                  <a className="navbar__items-link" href="#link">Sell On</a>
                </li>
                <li className="navbar__items">
                  <a className="navbar__items-link" href="#link">Contact Us</a>
                </li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header