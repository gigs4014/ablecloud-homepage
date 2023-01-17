import { ReactNode } from '@mdx-js/react/lib';

import Logo_Article_4_1 from '@/public/images/new/partner/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/partner/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/partner/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/partner/article_4_4.svg';
import Logo_Article_4_5 from '@/public/images/new/partner/article_4_5.svg';
import Logo_Article_4_6 from '@/public/images/new/partner/article_4_6.svg';
import Logo_Article_4_7 from '@/public/images/new/partner/article_4_7.svg';
import Logo_Article_4_8 from '@/public/images/new/partner/article_4_8.svg';
import Logo_Article_4_9 from '@/public/images/new/partner/article_4_9.svg';
import Logo_Article_4_10 from '@/public/images/new/partner/article_4_10.svg';
import Logo_Article_4_11 from '@/public/images/new/partner/article_4_11.svg';
import Logo_Article_4_12 from '@/public/images/new/partner/article_4_12.svg';
import Logo_Article_4_14 from '@/public/images/new/partner/article_4_14.svg';
import Logo_Article_4_15 from '@/public/images/new/partner/article_4_15.svg';

interface BaseTabItem {
  title: string;
  subItems: BaseSubItems[];
}

interface BaseSubItems {
  name: string;
  src: ReactNode;
}

export const partnerItems: Array<BaseTabItem> = [
  {
    title: '전체',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
      {
        name: '(주)지엔텔',
        src: <Logo_Article_4_2 />,
      },
      {
        name: '(주)조인트리',
        src: <Logo_Article_4_1 />,
      },
      {
        name: '(주)가시',
        src: <Logo_Article_4_4 />,
      },
      {
        name: '(주)지오멕스소프트',
        src: <Logo_Article_4_3 />,
      },
      {
        name: '(주)이노티움',
        src: <Logo_Article_4_6 />,
      },
      { name: '(주)한길TIS', src: '' },
      {
        name: '(주)이노뎁',
        src: <Logo_Article_4_7 />,
      },
      {
        name: '(주)이든티앤에스',
        src: <Logo_Article_4_8 />,
      },
      {
        name: '(주)틸론',
        src: <Logo_Article_4_9 />,
      },
      {
        name: '(주)유니와이드',
        src: <Logo_Article_4_10 />,
      },
      {
        name: '(주)KTNF',
        src: <Logo_Article_4_11 />,
      },
      {
        name: '(주)오우션테크놀러지',
        src: <Logo_Article_4_12 />,
      },
      {
        name: '(주)이레솔루션',
        src: <Logo_Article_4_15 />,
      },
      {
        name: '(주)대원CTS',
        src: <Logo_Article_4_14 />,
      },
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
    ],
  },
  {
    title: '판매/기술지원',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
      {
        name: '(주)가시',
        src: <Logo_Article_4_4 />,
      },
      {
        name: '(주)이노뎁',
        src: <Logo_Article_4_7 />,
      },
      {
        name: '(주)틸론',
        src: <Logo_Article_4_9 />,
      },
      {
        name: '(주)유니와이드',
        src: <Logo_Article_4_10 />,
      },
      {
        name: '(주)KTNF',
        src: <Logo_Article_4_11 />,
      },
      {
        name: '(주)오우션테크놀러지',
        src: <Logo_Article_4_12 />,
      },
      {
        name: '(주)이레솔루션',
        src: <Logo_Article_4_15 />,
      },
      {
        name: '(주)대원CTS',
        src: <Logo_Article_4_14 />,
      },
    ],
  },
  {
    title: '솔루션',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },

      {
        name: '(주)조인트리',
        src: <Logo_Article_4_1 />,
      },
      {
        name: '(주)지오멕스소프트',
        src: <Logo_Article_4_3 />,
      },
      {
        name: '(주)이노티움',
        src: <Logo_Article_4_6 />,
      },
      {
        name: '(주)이노뎁',
        src: <Logo_Article_4_7 />,
      },
      {
        name: '(주)이든티앤에스',
        src: <Logo_Article_4_8 />,
      },
      {
        name: '(주)틸론',
        src: <Logo_Article_4_9 />,
      },
      {
        name: '(주)대원CTS',
        src: <Logo_Article_4_14 />,
      },
    ],
  },
  {
    title: '하드웨어',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
      {
        name: '(주)지엔텔',
        src: <Logo_Article_4_2 />,
      },
      {
        name: '(주)유니와이드',
        src: <Logo_Article_4_10 />,
      },
      {
        name: '(주)KTNF',
        src: <Logo_Article_4_11 />,
      },
      {
        name: '(주)오우션테크놀러지',
        src: <Logo_Article_4_12 />,
      },
      {
        name: '(주)이레솔루션',
        src: <Logo_Article_4_15 />,
      },
      {
        name: '(주)대원CTS',
        src: <Logo_Article_4_14 />,
      },
    ],
  },
];
