import { loadSliderImages } from  "./slider.js";
import "./slider.css";
import { useState } from "react";

export function Slider() {
    const [activeSlide, setActiveSlide] = useState(10)

    let imageObjs = loadSliderImages()

    console.log("active slide ", activeSlide)
    console.log(imageObjs[imageObjs.key=activeSlide])
    
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
                {/* {imageObjs.map(image => 
                        <img key={image.key} src={image.source} alt={image.alternative} 
                        className={`img-default  
                            ${activeSlide === image.key ? "active" :
                            image.key === 19 && activeSlide === 0 || activeSlide === image.key - 1 || activeSlide === image.key + 1 
                            ? "semiActive" : "inActive"}`}
                        />
                )} */}
                 {
                      <img
                      key={imageObjs[imageObjs.key=activeSlide].key} 
                      src={imageObjs[imageObjs.key=activeSlide].source} 
                      alt={imageObjs[imageObjs.key=activeSlide].alternative} 
                        className={`img-default  
                            ${activeSlide === imageObjs[imageObjs.key=activeSlide].key ? "active" :
                            imageObjs[imageObjs.key=activeSlide].key === 19
                            && activeSlide === 0 
                            || activeSlide === imageObjs[imageObjs.key=activeSlide].key - 1 
                            || activeSlide === imageObjs[imageObjs.key=activeSlide].key + 1 
                            ? "semiActive" : "inActive"}`}
                        />
                 }
            </div>
            
            <button className="right-btn" placeholder="slider scrolls right" onClick={() => handleClick("right")}>
                <img src="/assets/chevron-right.svg" alt="arrow right picture" />
            </button>
        </ div>
    )
}