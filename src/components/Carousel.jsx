/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import '../styles/components/Carousel.scss';

const imageProject = require.context('../assets/images', true, /.png$/);

const items = [
  <div className="item">
    <img
      className="item__image"
      src={imageProject(`./proyect.png`).default}
      alt=""
    />
  </div>,
  <div className="item">
    <img
      className="item__image"
      src={imageProject(`./proyect.png`).default}
      alt=""
    />
  </div>,
  <div className="item">
    <img
      className="item__image"
      src={imageProject(`./proyect.png`).default}
      alt=""
    />
  </div>,
  <div className="item">
    <img
      className="item__image"
      src={imageProject(`./proyect.png`).default}
      alt=""
    />
  </div>,
  <div className="item">
    <img
      className="item__image"
      src={imageProject(`./proyect.png`).default}
      alt=""
    />
  </div>,
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () =>
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : items.length - 1);
  const slideNext = () =>
    setActiveIndex(activeIndex < items.length - 1 ? activeIndex + 1 : 0);
  const onSlideChanged = ({ item }) => setActiveIndex(item);

  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        // infinite
        items={items}
        activeIndex={activeIndex}
        onSlideChanged={onSlideChanged}
      />
      <div className="carousel__buttons">
        <button className="button__left" onClick={slidePrev} type="button" />
        <button className="button__right" onClick={slideNext} type="button" />
      </div>
    </div>
  );
};

export default Carousel;
