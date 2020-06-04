/**
 * React Slick, a version of the "slick" jQuery carousel.
 *
 * {@link https://react-slick.neostack.com}
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container } from './util/Container';
import { Slide } from './util/Slide';

const App = () => (
  <Container>
    <Slider
      dots
      focusOnSelect
      infinite
      onSwipe={console.log}
      slidesToScroll={4}
      slidesToShow={4}
      speed={500}
    >
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
      <Slide />
    </Slider>
  </Container>
);

ReactDOM.render(<App />, document.getElementById('app'));
