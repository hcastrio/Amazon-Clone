import React from 'react'
import "./Home.css"
import Product from './Product'

export default function Home() {
    return (
        <div className = "home">
            <div className = "home__container">
                <img 
                className = "home__image"
                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt = ""
                />
                <div className = "home__row">
                    <Product 
                        id = "1234567"
                        title = "Take some photos and upload them to meet our monthly thematic challenge, get inspiration and try new subjects"
                        price = {299.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/71HK%2BVTnqBL._AC_SL1500_.jpg"
                        rating = {3}
                    />
                    <Product 
                        id = "1233567"
                        title = "The car Stereo"
                        price = {499.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/71HK%2BVTnqBL._AC_SL1500_.jpg"
                        rating = {2}
                    />
                </div>
                <div className = "home__row">
                    <Product 
                        id = "1234566"
                        title = "The car Stereo"
                        price = {1.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/71HK%2BVTnqBL._AC_SL1500_.jpg"
                        rating = {4}
                    />
                    <Product 
                        id = "1134567"
                        title = "The car Stereo"
                        price = {9.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/71HK%2BVTnqBL._AC_SL1500_.jpg"
                        rating = {5}
                    />
                    <Product 
                        id = "1234577"
                        title = "The car Stereo"
                        price = {99.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/71HK%2BVTnqBL._AC_SL1500_.jpg"
                        rating = {1}
                    />
                </div>
                <div className = "home__row">
                    <Product 
                        id = "1244567"
                        title = "The car Stereo"
                        price = {29.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/71HK%2BVTnqBL._AC_SL1500_.jpg"
                        rating = {5}
                    />
                </div>
            </div>

        </div>
    )
}
