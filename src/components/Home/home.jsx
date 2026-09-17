import { Slider } from  './../Slider/Slider.jsx'
import { Intro } from './../Intro/intro.jsx' 
import { Testimonial } from '../Testimonial/testimonial.jsx'

 export function Home() {
   return(
    <>
          <h1>HOME</h1>
          <Intro/>
          <Slider/>
          <Testimonial/>
    </>
   ) 
 }