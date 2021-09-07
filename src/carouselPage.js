import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './App.css';
 
class Carosal extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={3}
      >

        <Slider>
          <Slide index={0}><img src="Images/1.jpg" alt ="REst" width="50%" height="100%"/></Slide>
          <Slide index={1}><img src="Images/2.jpg" alt ="REst" width="50%" height="100%"/></Slide>
          <Slide index={2}><img src="Images/3.jpg" alt ="REst" width="50%" height="100%"/></Slide>
        </Slider>

        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
export default Carosal;