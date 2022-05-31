import { Article } from './Article';
import { Card } from './Card';
import { PageWidth, PageWidthProps } from './PageWidth';

export type Container = {
  PageWidthProps: PageWidthProps;
};

const Container = {
  PageWidth,
  Article,
  Card,
};

export default Container;
