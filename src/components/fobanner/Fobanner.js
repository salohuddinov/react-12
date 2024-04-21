import React from 'react'
import './Fobanner.css'
import banerimg from '../../images/shoes-shoe-png-transparent-shoe-images-pluspng-17 1.png'

function Fobanner() {
    return (
        <div>
            <div className="Fobanner__section">
                <div className="section__left">
                    <h2>Adidas Men Running
                        Sneakers</h2>
                    <p>Performance and design. Taken right to the edge.</p>
                    <button>SHOP NOW</button>
                </div>
                <img className="section__right" src={banerimg} alt="" />
            </div>
        </div>
    )
}

export default Fobanner