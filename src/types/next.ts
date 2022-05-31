import { ParsedUrlQuery } from 'querystring';

export interface BasePageProps<Q extends ParsedUrlQuery = ParsedUrlQuery> {
  params?: Q;
  noLayout?: boolean;
}
