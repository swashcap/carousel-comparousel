import React from 'react';

import './Container.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container: React.FC<ContainerProps> = ({ className, ...rest }) => (
  <div
    className={`carcom-container${className ? ` ${className}` : ''}`}
    {...rest}
  />
);
