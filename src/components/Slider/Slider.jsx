import { loadSliderImages } from  "./slider.js";
import "./slider.css";
import { useState } from "react";

export function Slider() {
    const [activeSlide, setActiveSlide] = useState(10)

    let imageObjs = loadSliderImages()

    const handleClick = (orientation) => {
        if(orientation === "right" && activeSlide < 19)
            setActiveSlide(slideNr => ((slideNr+1)%19))
        else if(orientation === "left" && activeSlide > 0)
            setActiveSlide(slideNr => slideNr-1)
    }

    return (
        <div className="slider">
            <button className="left-btn" placeholder="slider scrolls left"  onClick={() => handleClick("left")}>
                <img src="/assets/chevron-left.svg" alt="arrow left picture" />
            </button>

            <div className="container-slider-img">           
                {imageObjs.map(image => 
                        <img key={image.key} src={image.source} alt={image.alternative} 
                        className={`img-default  
                            ${activeSlide === image.key ? "active" :
                            image.key === 19 && activeSlide === 0 || activeSlide === image.key - 1 || activeSlide === image.key + 1 
                            ? "semiActive" : "inActive"}`}
                        />
                )}
            </div>
            
            <button className="right-btn" placeholder="slider scrolls right" onClick={() => handleClick("right")}>
                <img src="/assets/chevron-right.svg" alt="arrow right picture" />
            </button>
        </ div>
    )
}