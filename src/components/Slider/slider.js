

export function loadSliderImages() {
    const images = [];

    for(let i = 0; i < 20; ++i){
        let source = `./../../assets/backpack/${i}.jpg`;

        const imageObj = {key: i, source: source, alternative : `backpack picture ${i}`};

        images.push(imageObj);
    }

    
    return images;
}