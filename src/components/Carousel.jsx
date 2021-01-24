/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';

import '../styles/components/Carousel.scss';

let items = [];

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState('');
  useEffect(() => {
    const useItems = () => {
      items = images.map((image) => (
        <div className="item" key={image}>
          <img className="item__image" src={image} alt="project" />
        </div>
      ));
    };
    useItems();
    setActiveIndex(0);
  }, []);

  const slidePrev = () =>
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : items.length - 1);
  const slideNext = () =>
    setActiveIndex(activeIndex < items.length - 1 ? activeIndex + 1 : 0);
  const onSlideChanged = ({ item }) => {
    setActiveIndex(item);
  };

  return (
    <div className="carousel">
      <AliceCarousel
        disableButtonsControls
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
