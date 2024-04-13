import React, { useEffect, useState } from 'react';
import './Slideshow.css'; // Import CSS file
import pic1 from '../images/scrolling/pic1.webp';
import pic2 from '../images/scrolling/pic2.webp';
import pic3 from '../images/scrolling/pic3.webp';
import pic4 from '../images/scrolling/pic4.webp';
import pic5 from '../images/scrolling/pic5.webp';
function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, []);
  
  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let newIndex = n;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
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
    <div className="slideshow-container">
      <div className="mySlides fade">
        <div className="numbertext">1 / 5</div>
        <img src={pic1} style={{ width: '100%' , marginTop:'70px'}} />
        <div className="text">Caption Text</div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2 / 5</div>
        <img src={pic2} style={{ width: '100%', marginTop:'70px' }} />

        <div className="text">Caption Two</div>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3 / 5</div>
        <img src={pic3} style={{ width: '100%' , marginTop:'70px' }} />
        <div className="text">Caption Three</div>
      </div>
      <div className="mySlides fade">
        <div className="numbertext">4 / 5</div>
        <img src={pic4} style={{ width: '100%' , marginTop:'70px'}} />
        <div className="text">Caption Three</div>
      </div>
      <div className="mySlides fade">
        <div className="numbertext">5 / 5</div>
        <img src={pic5} style={{ width: '100%' , marginTop:'70px'}} />
        <div className="text">Caption Three</div>
      </div>
      <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
      <a className="next" onClick={() => plusSlides(1)}>❯</a>

      <div className='spa'>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
      </div>
    </div>
  );
}

export default Slideshow;
