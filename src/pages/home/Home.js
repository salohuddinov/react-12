import React from 'react'
import './Home.css'
import Baner from '../../components/baner/Baner'
import Main from '../../components/main/Main'
import Fobanner from '../../components/fobanner/Fobanner'



function Home() {
    return (
        <>
            <div className="home">
                <Baner />
                <Main />
                <Fobanner />
            </div>
        </>
    )
}

export default Home