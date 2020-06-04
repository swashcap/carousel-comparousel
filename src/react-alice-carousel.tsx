import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

import { Container } from './util/Container';
import { Slide } from './util/Slide';
import { SlideGroup } from './util/SlideGroup';

const App = () => (
  <Container>
    <Carousel duration={500} infinite onSlideChange={console.log}>
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

ReactDOM.render(<App />, document.getElementById('app'));
