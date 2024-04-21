import React from 'react'
import './Header.css'
import { FaCaretDown } from "react-icons/fa";
import person from '../../images/profile_close_2.svg'
import shop from '../../images/Cart.svg'
import { FaRegHeart } from "react-icons/fa6";
import serch from '../../images/search-icon.svg'
import logo from '../../images/FOOTER.svg'
import { Link } from 'react-router-dom';



function Header() {
    return (
        <div className='container'>
            <div className="header__top">
                <h2 className="header__top__left">
                    EN <FaCaretDown /> USD <FaCaretDown />
                </h2>
                <div className="header__top__right">
                    <h3><img src={person} alt="" />My profile</h3>
                    <h3><img src={shop} alt="" /> Items</h3>
                    <h3> <FaRegHeart /> like</h3>
                    <h3> <img src={serch} alt="" />$0.00</h3>
                </div>
            </div>
            <div className="header__bootm">
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>
                <div className="header__items">
                    <Link to={'/'}>
                        <h2>HOME</h2>
                    </Link>
                    <h2>BAGS</h2>
                    <h2>SNEAKERS</h2>
                    <h2>BELT</h2>
                    <h2>CONTACT</h2>
                </div>
            </div>
        </div>
    )
}

export default Header