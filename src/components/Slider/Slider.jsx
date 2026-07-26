import { loadSliderImages } from  "./slider.js"



export function Slider() {

    let images = loadSliderImages()

    return (
        <div className="slider">
            <button className="left-btn" placeholder="slider scrolls left">
                <img src="./../../assets/chevron-left" alt="" />
            </button>
            {images.map(image => <img key={image.key} src={image.source} alt={image.alternative} />)}
            <button className="right-btn" placeholder="slider scrolls right">
                <img src="./../../assets/chevron-right" alt="" />
            </button>
        </ div>
    )
}