import { ReactNode } from '@mdx-js/react/lib';

import Logo_Article_4_1 from '@/public/images/new/partner/article_4_1.svg';
import Logo_Article_4_2 from '@/public/images/new/partner/article_4_2.svg';
import Logo_Article_4_3 from '@/public/images/new/partner/article_4_3.svg';
import Logo_Article_4_4 from '@/public/images/new/partner/article_4_4.svg';
import Logo_Article_4_5 from '@/public/images/new/partner/article_4_5.svg';
import Logo_Article_4_6 from '@/public/images/new/partner/article_4_6.svg';
import Logo_Article_4_7 from '@/public/images/new/partner/article_4_7.svg';
import Logo_Article_4_9 from '@/public/images/new/partner/article_4_9.svg';
import Logo_Article_4_11 from '@/public/images/new/partner/article_4_11.svg';
import Logo_Article_4_12 from '@/public/images/new/partner/article_4_12.svg';
import Logo_Article_4_14 from '@/public/images/new/partner/article_4_14.svg';
import Logo_Article_4_15 from '@/public/images/new/partner/article_4_15.svg';
import Logo_Article_4_17 from '@/public/images/new/partner/article_4_17.svg';
import Logo_Article_4_18 from '@/public/images/new/partner/article_4_18.svg';
import Logo_Article_4_19 from '@/public/images/new/partner/article_4_19.svg';
import Logo_Article_4_20 from '@/public/images/new/partner/article_4_20.svg';
import Logo_Article_4_21 from '@/public/images/new/partner/article_4_21.svg';
import Logo_Article_4_22 from '@/public/images/new/partner/article_4_22.svg';
import Logo_Article_4_23 from '@/public/images/new/partner/article_4_23.svg';
import Logo_Article_4_25 from '@/public/images/new/partner/article_4_25.svg';
import Logo_Article_4_26 from '@/public/images/new/partner/article_4_26.svg';
import Logo_Article_4_27 from '@/public/images/new/partner/article_4_27.svg';
import Logo_Article_4_28 from '@/public/images/new/partner/article_4_28.svg';
import Logo_Article_4_29 from '@/public/images/new/partner/article_4_29.svg';
import Logo_Article_4_30 from '@/public/images/new/partner/article_4_30.svg';
import Logo_Article_4_31 from '@/public/images/new/partner/article_4_31.svg';
import Logo_Article_4_32 from '@/public/images/new/partner/article_4_32.svg';
import Logo_Article_4_33 from '@/public/images/new/partner/article_4_33.svg';
import Logo_Article_4_34 from '@/public/images/new/partner/article_4_34.svg';
import Logo_Article_4_35 from '@/public/images/new/partner/article_4_35.svg';
import Logo_Article_4_36 from '@/public/images/new/partner/article_4_36.svg';

interface BaseTabItem {
  title: string;
  subItems: BaseSubItems[];
  textColor?: string;
  backgroundColor?: string;
}

interface BaseSubItems {
  name: string;
  src: ReactNode;
}

export const partnerItems: Array<BaseTabItem> = [
  {
    title: '전체',
    textColor: 'text-[white]',
    backgroundColor: 'bg-[#2151A2]',
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
        name: '(주)에스엔에이',
        src: <Logo_Article_4_18 />,
      },
      {
        name: '델 테크놀로지스',
        src: <Logo_Article_4_19 />,
      },
      {
        name: '(주)이노그리드',
        src: <Logo_Article_4_20 />,
      },
      {
        name: '(주)센텍정보기술',
        src: <Logo_Article_4_31 />,
      },
      {
        name: '(주)정우씨에스티',
        src: <Logo_Article_4_32 />,
      },
      {
        name: '(주)온아이티시스템',
        src: <Logo_Article_4_33 />,
      },
      {
        name: '(주)조인트리',
        src: <Logo_Article_4_1 />,
      },
      {
        name: '시트릭스',
        src: <Logo_Article_4_22 />,
      },
      {
        name: '(주)틸론',
        src: <Logo_Article_4_9 />,
      },
      {
        name: '(주)이노뎁',
        src: <Logo_Article_4_7 />,
      },
      {
        name: '레노버(유)',
        src: <Logo_Article_4_25 />,
      },
      {
        name: '(주)케이티엔에프',
        src: <Logo_Article_4_11 />,
      },
      {
        name: '슈퍼마이크로 컴퓨터(주)',
        src: <Logo_Article_4_27 />,
      },
      {
        name: '(주)슈퍼솔루션',
        src: <Logo_Article_4_34 />,
      },
      {
        name: 'HP(주)',
        src: <Logo_Article_4_28 />,
      },
      {
        name: '(주)유니와이드',
        src: <Logo_Article_4_26 />,
      },
      {
        name: '후지쯔(주)',
        src: <Logo_Article_4_29 />,
      },
      {
        name: '(주)엑세스랩',
        src: <Logo_Article_4_35 />,
      },
      {
        name: '(주)가시',
        src: <Logo_Article_4_4 />,
      },
      {
        name: '제노솔루션(주)',
        src: <Logo_Article_4_23 />,
      },
      {
        name: '(주)오우션테크놀러지',
        src: <Logo_Article_4_12 />,
      },
      {
        name: '(주)인프라큐브',
        src: <Logo_Article_4_36 />,
      },
      { name: '(주)티쓰리큐', src: <Logo_Article_4_17 /> },
      {
        name: '(주)지오멕스소프트',
        src: <Logo_Article_4_3 />,
      },
      {
        name: '(주)이레솔루션',
        src: <Logo_Article_4_15 />,
      },
      {
        name: '(주)파로스정보통신',
        src: <Logo_Article_4_21 />,
      },
      // {
      //   name: '씨게이트',
      //   src: <Logo_Article_4_24 />,
      // },
      {
        name: '대원씨티에스(주)',
        src: <Logo_Article_4_14 />,
      },
      {
        name: '(주)쓰리에스소프트',
        src: <Logo_Article_4_30 />,
      },
      {
        name: '(주)이노티움',
        src: <Logo_Article_4_6 />,
      },

      // {
      //   name: '(주)이든티앤에스',
      //   src: <Logo_Article_4_8 />,
      // },

      // {
      //   name: '(주)유니와이드',
      //   src: <Logo_Article_4_10 />,
      // },

      // {
      //   name: '(주)에이블스토어',
      //   src: <Logo_Article_4_5 />,
      // },
    ],
  },
  {
    title: '플래티늄',
    textColor: 'text-[black]',
    backgroundColor: 'bg-gradient-to-r from-sky-500 to-indigo-500',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
    ],
  },
  {
    title: '골드',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
    ],
  },
  {
    title: '실버',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
    ],
  },
  {
    title: 'VAD',
    subItems: [
      {
        name: '(주)에이블스토어',
        src: <Logo_Article_4_5 />,
      },
    ],
  },
];
