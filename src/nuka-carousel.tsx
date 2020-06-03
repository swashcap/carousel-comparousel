/**
 * Nuka carousel, the original Ken Wheeler extravaganza.
 *
 * {@link https://github.com/FormidableLabs/nuka-carousel}
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'nuka-carousel';

import { Container } from './util/Container';
import { Slide } from './util/Slide';

const App = () => (
  <Container>
    <Carousel
      onDragStart={console.log}
      slidesToScroll={4}
      slidesToShow={4}
      speed={500}
      wrapAround
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
    </Carousel>
  </Container>
);

ReactDOM.render(<App />, document.body);
