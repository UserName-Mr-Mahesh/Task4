import React from 'react'
import style from '../styles/trending.module.css'
import pic1 from '../images/trending/pic1.webp'
import pic2 from '../images/trending/pic2.webp'
import pic3 from '../images/trending/pic3.webp'
import pic4 from '../images/trending/pic4.webp'
import pic5 from '../images/trending/pic5.webp'
import pic6 from '../images/trending/pic6.webp'
import pic7 from '../images/trending/pic7.webp'
import pic8 from '../images/trending/pic8.webp'
import pic9 from '../images/trending/pic9.webp'
import pic10 from '../images/trending/pic10.webp'
import pic11 from '../images/trending/pic11.webp'
import pic12 from '../images/trending/pic12.webp'
import pic13 from '../images/trending/pic13.webp'
import pic14 from '../images/trending/pic14.webp'
import pic15 from '../images/trending/pic15.webp'
import pic16 from '../images/trending/pic16.webp'
import pic17 from '../images/trending/pic17.webp'
import pic18 from '../images/trending/pic18.webp'

const Trending = () => {
  return (
    <div >
        <h2>Trendnig Near You</h2>
        <ul className={style.trending}>
            <li><img src={pic1} alt="" /></li>
            <li><img src={pic2} alt="" /></li>
            <li><img src={pic3} alt="" /></li>
            <li><img src={pic4} alt="" /></li>
            <li><img src={pic5} alt="" /></li>
            <li><img src={pic6} alt="" /></li>
            <li><img src={pic7} alt="" /></li>
            <li><img src={pic8} alt="" /></li>
            <li><img src={pic9} alt="" /></li>
            <li><img src={pic10} alt="" /></li>
            <li><img src={pic11} alt="" /></li>
            <li><img src={pic12} alt="" /></li>
            <li><img src={pic13} alt="" /></li>
            <li><img src={pic14} alt="" /></li>
            <li><img src={pic15} alt="" /></li>
            <li><img src={pic16} alt="" /></li>
            <li><img src={pic17} alt="" /></li>
            <li><img src={pic18} alt="" /></li>
        </ul>
        
    </div>
  )
}

export default Trending