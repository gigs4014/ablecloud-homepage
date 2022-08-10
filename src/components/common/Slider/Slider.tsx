import React, { ReactNode } from 'react';

import Slider from 'react-slick';

type CarouselProps = {
  settingsOverrides?: object;
  children: ReactNode;
};

export const CustomSlider = ({ settingsOverrides, children }: CarouselProps) => {
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToScroll: 1,
  //   slidesToShow: 2.5,
  //   swipeToSlide: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024, //Tailwind lg default
  //       settings: {
  //         slidesToShow: 5,
  //       },
  //     },
  //     {
  //       breakpoint: 768, //Tailwind md default
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  //   ...settingsOverrides,
  // };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return <Slider {...settings}>{children}</Slider>;
};
