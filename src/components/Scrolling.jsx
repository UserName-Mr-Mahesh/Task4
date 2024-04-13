import React, { useState, useEffect } from 'react';
import styles from '../styles/scrolling.module.css'; 
import pic1 from '../images/scrolling/pic1.webp';
import pic2 from '../images/scrolling/pic2.webp';
import pic3 from '../images/scrolling/pic3.webp';
import pic4 from '../images/scrolling/pic4.webp';
import pic5 from '../images/scrolling/pic5.webp';

function Scrolling() {
  const [slideIndex, setSlideIndex] = useState(1);
  
  
  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let newIndex = n;
    const slides = document.getElementsByClassName(styles['mySlides']);
    const dots = document.getElementsByClassName(styles['dot']);
    if (n > slides.length) {
      newIndex = 1;
    }
    if (n < 1) {
      newIndex = slides.length;
    }
    setSlideIndex(newIndex);
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[newIndex - 1].style.display = "block";
    dots[newIndex - 1].className += " active";
  }
  
  return (
    <div>
    <div className={styles['slideshow-container']}>
      <div className={styles['mySlides']}>
        <div className={styles['numbertext']}>1 / 5</div>
        <img src={pic1} className={styles['image']} alt="Slide 1" />
        <div className={styles['text']}>Caption Text</div>
      </div>

      <div className={styles['mySlides']}>
        <div className={styles['numbertext']}>2 / 5</div>
        <img src={pic2} className={styles['image']} alt="Slide 2" />
        <div className={styles['text']}>Caption Two</div>
      </div>

      <div className={styles['mySlides']}>
        <div className={styles['numbertext']}>3 / 5</div>
        <img src={pic3} className={styles['image']} alt="Slide 3" />
        <div className={styles['text']}>Caption Three</div>
      </div>

      <div className={styles['mySlides']}>
        <div className={styles['numbertext']}>4 / 5</div>
        <img src={pic4} className={styles['image']} alt="Slide 4" />
        <div className={styles['text']}>Caption Four</div>
      </div>

      <div className={styles['mySlides']}>
        <div className={styles['numbertext']}>5 / 5</div>
        <img src={pic5} className={styles['image']} alt="Slide 5" />
        <div className={styles['text']}>Caption Five</div>
      </div>

      <a className={styles['prev']} onClick={() => plusSlides(-1)}>❮</a>
      <a className={styles['next']} onClick={() => plusSlides(1)}>❯</a>
    </div>
    <div className={styles['spa']}>
        <span className={styles['dot']} onClick={() => currentSlide(1)}></span>
        <span className={styles['dot']} onClick={() => currentSlide(2)}></span>
        <span className={styles['dot']} onClick={() => currentSlide(3)}></span>
        <span className={styles['dot']} onClick={() => currentSlide(4)}></span>
        <span className={styles['dot']} onClick={() => currentSlide(5)}></span>
      </div>
    </div>
  );
}

export default Scrolling;
