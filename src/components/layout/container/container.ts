import PageContainer, { PageContainerProps } from './PageContainer';

export type Container = {
  PageProps: PageContainerProps;
};

const Container = {
  Page: PageContainer,
};

export default Container;
