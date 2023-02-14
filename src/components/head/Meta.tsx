import { OpenGraphMeta } from './OpenGraph';

/**
 * @note: next Head 컴포넌트에 유저가 만든 컴포넌트를 넣으면 적용이 안됨
 * - 고치려면 renderer로서 함수를 사용해야 함
 * ```typescriptreact
 *   //this
 *   <Head>
 *     <title>{post.title}</title>
 *     {Meta.OpenGraph(post.openGraph)}
 *   </Head>
 *   // not this
 *   <Head>
 *     <title>{post.title}</title>
 *     <Meta.OpenGraph {...post.openGraph} />
 *   </Head>
 * ```
 */
const Meta = {
  OpenGraph: OpenGraphMeta,
};

export default Meta;
