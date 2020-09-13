import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
  
          <div className="home__row">
            <Product
              id="12321341"
              title= 'Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Graphite Grey'
              price={599.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg"
            />
            <Product
              id="11321341"
              title= 'Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i7-9750H, NVIDIA GeForce RTX 2060, 15.6" Full HD IPS 144Hz Display, 16GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Waves MaxxAudio, Backlit Keyboard, AN515-54-728C'
              price={1018.19}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
            />
            <Product
              id="49538094"
              title="HP 24-inch All-in-One Touchscreen Desktop Computer, AMD Athlon Silver 3050U Processor, 4 GB RAM, 256 GB SSD, Windows 10 Home (24-df0030, White), Snow White"
              price={569.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/8145YRalbjL._AC_SL1500_.jpg"
            />
          </div>
  
          <div className="home__row">
            <Product
              id="4903855"
              title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
              price={349.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71Q8gm97H8L._AC_SL1500_.jpg"
            />
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
  
          <div className="home__row">
            <Product
              id="90829932"
              title="Samsung 70 Inch BE70T-H 4K PRO TV with Easy Digital Signage Software with HDMI, USB, TV Tuner and Speakers 250 nits (LH70BETHLGFXGO)"
              price={849.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/91F3W7Ccw%2BL._AC_SL1500_.jpg"
            />
            <Product
              id="90829332"
              title = 'Sony XBR-77A9G 77 Inch TV: MASTER Series BRAVIA OLED 4K Ultra HD Smart TV with HDR and Alexa Compatibility'
              price={546.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/91e1nDHTBUL._AC_SL1500_.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;