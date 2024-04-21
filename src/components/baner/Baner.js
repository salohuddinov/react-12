import React from 'react'
import './Baner.css'
import banner from '../../images/Offer Banner.png'
import banerimg1 from '../../images/image Product.png'

function Baner() {
    return (
        <div className='container'>
            <img className='banner' src={banner} alt="" />
        </div>

    )
}

export default Baner