import React from 'react'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Aboutus from '../Aboutus/Aboutus'
import Ourservices from '../Ourservices/Ourservices'

function Homepage() {
    return (
        <div>
            <Header/>
            <Banner />
            <Aboutus/>
            <Ourservices/>
        </div>
    )
}

export default Homepage