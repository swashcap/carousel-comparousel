import React from 'react';

import './SlideGroup.css';

export interface SlideGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SlideGroup: React.FC<SlideGroupProps> = ({
  className,
  ...rest
}) => (
  <div
    className={`carcom-slide-group${className ? `${className}` : ''}`}
    {...rest}
  />
);
