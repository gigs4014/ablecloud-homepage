import { Card } from './Card';
import PageContainer, { PageContainerProps } from './PageContainer';

export type Container = {
  PageProps: PageContainerProps;
};

const Container = {
  Page: PageContainer,
  Card,
};

export default Container;
