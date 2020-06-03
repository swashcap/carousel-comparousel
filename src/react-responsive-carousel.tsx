/**
 * React Responsive Carousel, the popular responsive design component.
 *
 * {@link http://react-responsive-carousel.js.org}
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Container } from './util/Container';
import { Slide } from './util/Slide';
import { SlideGroup } from './util/SlideGroup';

const App = () => (
  <Container>
    <Carousel onChange={console.log} showArrows>
      <SlideGroup>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </SlideGroup>
      <SlideGroup>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </SlideGroup>
      <SlideGroup>
        <Slide />
        <Slide />
        <Slide />
      </SlideGroup>
    </Carousel>
  </Container>
);

ReactDOM.render(<App />, document.body);
