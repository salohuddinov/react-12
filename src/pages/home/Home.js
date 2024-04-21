import React from 'react'
import './Home.css'
import Baner from '../../components/baner/Baner'
import Main from '../../components/main/Main'



function Home() {
    return (
        <>
            <div className="home">
                <Baner />
                <Main />
            </div>
        </>
    )
}

export default Home