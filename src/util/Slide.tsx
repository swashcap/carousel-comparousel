import React from 'react';

import './Slide.css';

export interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Slide: React.FC<SlideProps> = ({ className, ...rest }) => (
  <div className={`carcom-slide${className ? ` ${className}` : ''}`} {...rest}>
    <a href="#">
      <img
        alt="A placeholder image"
        className="carcom-slide-image"
        src="//via.placeholder.com/200x200"
      />
      <h2 className="carcom-slide-title">Lorem ipsum dolore</h2>
      <p className="carcom-slide-info">Sit amet consectetur adipiscing elit</p>
    </a>
  </div>
);
