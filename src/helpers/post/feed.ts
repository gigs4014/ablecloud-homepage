import { Feed, FeedOptions } from 'feed';

import { Post } from '@/types';

export class FeedGenerator {
  public defaultOptions: Partial<FeedOptions>;
  constructor(defaultOptions?: Partial<FeedOptions>) {
    this.defaultOptions = defaultOptions ?? {};
  }

  public fromPosts(posts: Post[], options?: FeedOptions): Feed {
    const feed = new Feed({ copyright: '', id: '', title: '', ...this.defaultOptions, ...options });

    posts.forEach(post => {
      feed.addItem({
        title: post.title,
        id: post.slug,
        link: `${feed.options.link}/${[...post.categories, post.slug].join('/')}`,
        date: new Date(post.date),
      });
    });

    return feed;
  }
}

export default new FeedGenerator({
  title: '에이블클라우드 블로그',
  description: '제품 및 기능 릴리즈, 관련 기술, 사례 소개',
  copyright: '© ABLECLOUD with ABLESTOR, since 2021',
  favicon: `${process.env.HOST_URL}/public/favicon.png`,
  image: `${process.env.HOST_URL}/public/logo.png`,
  link: process.env.HOST_URL,
  feedLinks: {
    atom: `${process.env.HOST_URL}/feed/atom`,
    rss: `${process.env.HOST_URL}/feed/rss`,
  },
});
