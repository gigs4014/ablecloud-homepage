import { PropsWithChildren } from 'react';

import { v4 as uuid } from 'uuid';

import { BaseComponentProps } from '@/types';

import { Container } from '@/components/layout';

import HomeHeader, { HomeHeaderProps } from './HomeHeader';

export interface HomeTemplateProps extends BaseComponentProps {
  enableProseSpacing?: boolean;
  headerContents: HomeHeaderProps[];
}

const headerSliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 10000,
};

function HomeTemplate({
  children,
  className,
  enableProseSpacing = true,
  headerContents,
}: PropsWithChildren<HomeTemplateProps>) {
  return (
    <>
      <Container.Article enableProseSpacing={enableProseSpacing} className={className}>
        {/* <CustomSlider settingsOverrides={headerSliderSettings}> */}
        {headerContents.map(headerContent => (
          <HomeHeader key={uuid()} {...headerContent} />
        ))}
        {/* </CustomSlider> */}

        {children}
      </Container.Article>
    </>
  );
}

export default HomeTemplate;
