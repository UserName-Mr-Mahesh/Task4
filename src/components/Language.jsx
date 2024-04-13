import React from 'react'
import style from '../styles/kannada.module.css'
import pic1 from '../images/language/pic1.webp'
import pic2 from '../images/language/pic2.webp'
import pic3 from '../images/language/pic3.webp'
import pic4 from '../images/language/pic4.webp'
import pic5 from '../images/language/pic5.webp'
import pic6 from '../images/language/pic6.webp'
import pic7 from '../images/language/pic7.webp'
import pic8 from '../images/language/pic8.webp'
import pic9 from '../images/language/pic9.webp'
import pic10 from '../images/language/pic10.webp'
import pic11 from '../images/language/pic11.webp'

const Language = () => {
  return (
    <div>
        <h2>Explore In Your Language</h2>
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
            
        </ul>
    </div>
  )
}

export default Language