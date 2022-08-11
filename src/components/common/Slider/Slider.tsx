import React, { ReactNode } from 'react';

import Slider from 'react-slick';

type CarouselProps = {
  settingsOverrides?: object;
  children: ReactNode;
};

export const CustomSlider = ({ settingsOverrides, children }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024, //Tailwind lg default
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768, //Tailwind md default
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    ...settingsOverrides,
  };

  return <Slider {...settings}>{children}</Slider>;
};
