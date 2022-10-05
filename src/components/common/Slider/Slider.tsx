import React, { ReactNode, useRef, useState } from 'react';

import Slider from 'react-slick';

type CarouselProps = {
  settingsOverrides?: object;
  children: ReactNode;
};

export const CustomSlider = ({ settingsOverrides, children }: CarouselProps) => {
  const [autoPlayOn, setAutoPlayOn] = useState<boolean>(true);
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
    ...settingsOverrides,
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {children}
    </Slider>
  );
};
