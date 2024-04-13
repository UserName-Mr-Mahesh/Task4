import React from 'react'
import playstore from '../images/play_store.png'
import appstore from '../images/app_store.png'
import style from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={style['footer']}>
        <div className={style['promosion']}>
            <ul className={style['apps']}>
                <li>Download Apps</li>
                <li><img src={playstore} alt="" /></li>
                <li><img src={appstore} alt="" /></li>
            </ul>
            <ul className={style['apps']}>
                <li>Connect with us</li>
                <li><FontAwesomeIcon icon={faFacebook} className={style['icon']}/></li>
                <li><FontAwesomeIcon icon={faInstagram} className={style['icon']}/></li>
                <li><FontAwesomeIcon icon={faWhatsapp} className={style['icon']}/></li>
                <li><FontAwesomeIcon icon={faTwitter} className={style['icon']}/></li>
            </ul>

        </div>
        <ul className={style['contact']}>
            <li>Channels</li>|
            <li>About Us</li>|
            <li>Help Center</li>|
            <li>Privacy Policy</li>|
            <li>Terms of Use</li>
        </ul>
        <div className={style['promosion']}>
            <ul className={style['list']}>
                <b>Popular TV Shows</b>
                <li>Mahabharat</li>
                <li>Kahan ho Tum</li>
                <li>Jhansi ki Rani</li>
                <li>Kumkum Bhagya</li>
                <li>Kundali Bhagya</li>
                <li>Bhgya Lakshmi</li>
                <li>Meet</li>
                <li>Annapoorna</li>
                <li>Indira</li>
                <li>Korean Drama</li>
                <li>Pakistani Serials</li>
            </ul>            
            <ul className={style['list']}>
                <b>Premium Movies</b>
                <li>Main</li>
                <li>The Kerala Story</li>
                <li>Khichdi 2</li>
                <li>Sam Bahadur</li>
                <li>Tejas</li>
                <li>Kadak Singh</li>
                <li>Ghoomer</li>
                <li>Gadar 2</li>
                <li>Hanu-Man</li>
                <li>Kisi Ka Bhai Kisi ki Jaan</li>
                <li>Bandaa</li>
                <li>RRR</li>
                <li>Uri: The Surgical Strike</li>
                <li>The Kashmir Files</li>
            </ul>            
            <ul className={style['list']}>
                <b>Popular LIVE TV Channels</b>
                <li>Zee TV HD</li>
                <li>&TV HD</li>
                <li>Zee Marathi HD</li>
            </ul>
            <ul className={style['list']}>
                <b>Popular Web Series</b>
                <li>Love Bites</li>
                <li>Black Windows</li>
                <li>Duranga 2</li>
                <li>Shikarpur</li>
                <li>Taj</li>
                <li>Sunflower</li>
                <li>Tripling</li>
                <li>Pitchers</li>
                <li>Naxalbaari</li>
                <li>Anantham</li>
                <li>Gaalivana</li>
            </ul>
            <ul className={style['list']}>
                <b>Bollywood Top Celebrities</b>
                <li>Sunny Leone</li>
                <li>Disha Patani</li>
                <li>Salman Khan</li>
                <li>Manoj Bajpayee</li>
                <li>Pankaj Tripathi</li>
                <li>Vicky Kaushal</li>
                <li>Sunny Deol</li>
                <li>Ameesha Patel</li>
                <li>Abhishek Bachchan</li>
                <li>Kangana Ranaut</li>
            </ul>
            <ul className={style['list']}>
                <b>Games</b>
                <li>Play</li>
                <li>Stories</li>
                <li>IL T20 2024</li>
                <li>IL T20 Schedule</li>
                <li>Abu Dhabi Knight Riders</li>
                <li>Desert Vipers</li>
                <li>Dubai Capitals</li>
                <li>Gulf Giants</li>
                <li>Mi Emirates</li>
                <li>Sharjah Warriors</li>
            </ul>  
        </div>
        <p className={style['end']}>Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+ Copyright © 2024 Zee Entertainment Enterprises Ltd. All rights reserved.</p>
    </div>
  )
}

export default Footer