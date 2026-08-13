import { loadSliderImages } from  "./slider.js";
import "./slider.css";
import { useState } from "react";

export function Slider() {
    const [activeSlide, setActiveSlide] = useState(10)

    let imageObjs = loadSliderImages()

    let prevBag = activeSlide === 0 ? 19 : activeSlide - 1;
    let nextBag = activeSlide === 19 ?  0 : activeSlide + 1;
    
    const handleClick = (orientation) => {
        if(orientation === "right" )
            setActiveSlide(slideNr => ((slideNr+1)%20))
        else 
            activeSlide === 0 ? setActiveSlide(19) : setActiveSlide(slideNr => slideNr-1)
     }

    return (
        <div className="slider">
            <button className="left-btn" placeholder="slider scrolls left"  onClick={() => handleClick("left")}>
                <img src="/assets/chevron-left.svg" alt="arrow left picture" />
            </button>

            <div className="container-slider-img">           
                 {
                      <img
                      key={imageObjs[imageObjs.key=prevBag].key} 
                      src={imageObjs[imageObjs.key=prevBag].source} 
                      alt={imageObjs[imageObjs.key=prevBag].alternative} 
                        className={`img-default semiActive }`}
                        />
                 }

                 {
                      <img
                      key={imageObjs[imageObjs.key=activeSlide].key} 
                      src={imageObjs[imageObjs.key=activeSlide].source} 
                      alt={imageObjs[imageObjs.key=activeSlide].alternative} 
                        className={`img-default active`}
                        />

                        
                 }

                 {
                      <img
                      key={imageObjs[imageObjs.key=nextBag].key} 
                      src={imageObjs[imageObjs.key=nextBag].source} 
                      alt={imageObjs[imageObjs.key=nextBag].alternative} 
                        className={`img-default semiActive }`}
                        />
                 }
            </div>
            
            <button className="right-btn" placeholder="slider scrolls right" onClick={() => handleClick("right")}>
                <img src="/assets/chevron-right.svg" alt="arrow right picture" />
            </button>
        </ div>
    )
}