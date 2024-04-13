import React from 'react'
import style from '../styles/top10.module.css'
import pic1 from '../images/top10/pic1.webp'
import pic2 from '../images/top10/pic2.webp'
import pic3 from '../images/top10/pic3.webp'
import pic4 from '../images/top10/pic4.webp'
import pic5 from '../images/top10/pic5.webp'
import pic6 from '../images/top10/pic6.webp'
import pic7 from '../images/top10/pic7.webp'
import pic8 from '../images/top10/pic8.webp'
import pic9 from '../images/top10/pic9.webp'
import pic10 from '../images/top10/pic10.webp'

const Top10 = () => {
  return (
    <div>
        <h2>Top 10 Movies in India</h2>
        <ul className={style.trending}>
            <li>
                <div className={style.image}>
                    <div className={style.number}>1</div>
                    <div><img src={pic1} alt="" /></div>
                </div>
            </li>
            <li>
                <div className={style.image}>
                    <div className={style.number}>2</div>
                    <div><img src={pic2} alt="" /></div>
                </div>
            </li>
            <li>
                <div className={style.image}>
                    <div className={style.number}>3</div>
                    <div><img src={pic3} alt="" /></div>
                </div>
            </li>
            <li>
                <div className={style.image}>
                    <div className={style.number}>4</div>
                    <div><img src={pic4} alt="" /></div>
                </div>
            </li>
            <li>
                <div className={style.image}>
                    <div className={style.number}>5</div>
                    <div><img src={pic5} alt="" /></div>
                </div>
            </li>
            <li>
                <div className={style.image}>
                    <div className={style.number}>6</div>
                    <div><img src={pic6} alt="" /></div>
                </div>
            </li>
            <li>
                <div className={style.image}>
                    <div className={style.number}>7</div>
                    <div><img src={pic7} alt="" /></div>
                </div>
            </li>
            <li>
                <div className={style.image}>
                    <div className={style.number}>8</div>
                    <div><img src={pic8} alt="" /></div>
                </div>
            </li>
            <li>
                <div className={style.image}>
                    <div className={style.number}>9</div>
                    <div><img src={pic9} alt="" /></div>
                </div>
            </li>
            <li>
                <div className={style.image}>
                    <div className={style.number}>10</div>
                    <div><img src={pic10} alt="" /></div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Top10