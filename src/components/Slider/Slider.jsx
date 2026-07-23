import { loadSliderImages } from  "./slider.js"

export function Slider() {

    let images = loadSliderImages()
    console.log(images)

    return (
        <div className="slider">
            {images.map(image => < img key={image.key} src={image.source} alt={image.alternative} />)}
        </ div>
    )
}