import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { InterviewListData } from '@/types/interview';

import addSrc from '@/public/images/common/add.png';
import ansanSrc from '@/public/images/common/ansan.png';
import army2Src from '@/public/images/common/army2.png';
import armySrc from '@/public/images/common/army.png';
import buyeoSrc from '@/public/images/common/buyeo.png';
import changwonSrc from '@/public/images/common/changwon.png';
import cheongyangSrc from '@/public/images/common/cheongyang.png';
import ckSrc from '@/public/images/common/ck.png';
import comwelSrc from '@/public/images/common/comwel.png';
import cooconSrc from '@/public/images/common/coocon.png';
import csSrc from '@/public/images/common/cs.png';
import daeguSrc from '@/public/images/common/daegu.png';
import daewoongSrc from '@/public/images/common/daewoong.png';
import dangjinSrc from '@/public/images/common/dangjin.png';
import dapaSrc from '@/public/images/common/dapa.png';
import datastreamsSrc from '@/public/images/common/datastreams.png';
import datqSrc from '@/public/images/common/datq.png';
import dipSrc from '@/public/images/common/dip.png';
import ekrSrc from '@/public/images/common/ekr.png';
import gbSrc from '@/public/images/common/gb.png';
import genSrc from '@/public/images/common/gen.png';
import gntelSrc from '@/public/images/common/gntel.png';
import goryeongSrc from '@/public/images/common/goryeong.png';
import grtcSrc from '@/public/images/common/grtc.png';
import gwangjuSrc from '@/public/images/common/gwangju.png';
import gyeonggiSrc from '@/public/images/common/gyeonggi.png';
import gyeongnamSrc from '@/public/images/common/gyeongnam.png';
import hcSrc from '@/public/images/common/hc.png';
import hectoSrc from '@/public/images/common/hecto.png';
import hscitySrc from '@/public/images/common/hscity.png';
import injeSrc from '@/public/images/common/inje.png';
import jecheonSrc from '@/public/images/common/jecheon.png';
import kacptaSrc from '@/public/images/common/kacpta.png';
import kepcoSrc from '@/public/images/common/kepco.png';
import konyangSrc from '@/public/images/common/konyang.png';
import koreaLocalSrc from '@/public/images/common/korea-local.png';
import mohwSrc from '@/public/images/common/mohw.png';
import necaSrc from '@/public/images/common/neca.png';
import novarexSrc from '@/public/images/common/novarex.png';
import osanSrc from '@/public/images/common/osan.png';
import pocheonSrc from '@/public/images/common/pocheon.png';
import policeSrc from '@/public/images/common/police.png';
import pyeongtaekSrc from '@/public/images/common/pyeongtaek.png';
import rokafSrc from '@/public/images/common/rokaf.png';
import sangjuSrc from '@/public/images/common/sangju.png';
import spoSrc from '@/public/images/common/spo.png';
import t3qSrc from '@/public/images/common/t3q.png';
import ulsanSrc from '@/public/images/common/ulsan.png';
import uscSrc from '@/public/images/common/usc.png';
import ycgSrc from '@/public/images/common/ycg.png';
import yeojuSrc from '@/public/images/common/yeoju.png';
import yitSrc from '@/public/images/common/yit.png';

export const getInterviewHeaderData = async () => {
  const t = await getTranslations('interview.header');

  return {
    title: {
      mainText: t('title'),
    },
    description: <div className='max-w-[699px]'>{t('description')}</div>,
    bgClassName: 'bg-interview-header',
    heightClassName: 'min-h-[350px] lg:min-h-[404px]',
  };
};

export const interviewList: InterviewListData[] = [
  { img: <Image src={spoSrc} alt='' width={78} />, text: '대검찰청' },
  { img: <Image src={dapaSrc} alt='' width={96} />, text: '방위사업청' },
  { img: <Image src={policeSrc} alt='' width={141} />, text: '경찰청' },
  { img: <Image src={ekrSrc} alt='' width={198} />, text: '한국농어촌공사' },
  { img: <Image src={mohwSrc} alt='' width={179} />, text: '보건복지부' },
  { img: <Image src={armySrc} alt='' width={210} />, text: '육군본부' },
  { img: <Image src={rokafSrc} alt='' width={200} />, text: '공군' },
  { img: <Image src={datqSrc} alt='' width={174} />, text: '국방기술품질원' },
  { img: <Image src={kepcoSrc} alt='' width={154} />, text: '한국전력공사' },
  { img: <Image src={addSrc} alt='' width={190} />, text: '국방과학' },
  { img: <Image src={army2Src} alt='' width={72} />, text: '' },
  { img: <Image src={gyeonggiSrc} alt='' width={200} />, text: '경기도' },
  { img: <Image src={gyeongnamSrc} alt='' width={146} />, text: '경상남도청' },
  { img: <Image src={gbSrc} alt='' width={146} />, text: '경상북도청' },
  { img: <Image src={gwangjuSrc} alt='' width={176} />, text: '광주광역시' },
  { img: <Image src={grtcSrc} alt='' width={180} />, text: '광주교통' },
  { img: <Image src={comwelSrc} alt='' width={94} />, text: '근로복지공단' },
  { img: <Image src={hscitySrc} alt='' width={146} />, text: '화성특례시' },
  { img: <Image src={changwonSrc} alt='' width={140} />, text: '창원시' },
  { img: <Image src={pyeongtaekSrc} alt='' width={68} />, text: '평택시청' },
  { img: <Image src={sangjuSrc} alt='' width={139} />, text: '상주시청' },
  { img: <Image src={yeojuSrc} alt='' width={138} />, text: '여주시' },
  { img: <Image src={pocheonSrc} alt='' width={140} />, text: '포천시' },
  { img: <Image src={ycgSrc} alt='' width={160} />, text: '예천군청' },
  { img: <Image src={uscSrc} alt='' width={86} />, text: '의성군청' },
  { img: <Image src={csSrc} alt='' width={140} />, text: '청손군' },
  { img: <Image src={buyeoSrc} alt='' width={162} />, text: '부여군' },
  { img: <Image src={goryeongSrc} alt='' width={135} />, text: '고령군청' },
  { img: <Image src={hcSrc} alt='' width={120} />, text: '합천군청' },
  { img: <Image src={ulsanSrc} alt='' width={193} />, text: '울산광역시중구' },

  // { img: <Image src={kipoSrc} alt='' width={125} />, text: '특허청' },

  // { img: <Image src={cnuhSrc} alt='' width={160} />, text: '충남대학교병원' },

  { img: <Image src={konyangSrc} alt='' width={168} />, text: '건영대학교' },

  { img: <Image src={ckSrc} alt='' width={200} />, text: '청강문화산업대학교' },
  { img: <Image src={koreaLocalSrc} alt='' width={170} />, text: '한국지역정보개발원' },
  { img: <Image src={genSrc} alt='' width={185} />, text: '광주광역시교육' },
  { img: <Image src={kacptaSrc} alt='' width={148} />, text: '한국세무사회' },

  { img: <Image src={yitSrc} alt='' width={136} />, text: '여주대학교' },
  { img: <Image src={gntelSrc} alt='' width={138} />, text: '지엔텔' },
  { img: <Image src={osanSrc} alt='' width={200} />, text: '오산' },
  { img: <Image src={ansanSrc} alt='' width={154} />, text: '안산시' },
  { img: <Image src={daeguSrc} alt='' width={219} />, text: '대구' },
  { img: <Image src={jecheonSrc} alt='' width={171} />, text: '제천' },
  { img: <Image src={injeSrc} alt='' width={165} />, text: '인제군' },
  { img: <Image src={cheongyangSrc} alt='' width={187} />, text: '청양군' },
  { img: <Image src={dangjinSrc} alt='' width={170} />, text: '당진' },
  { img: <Image src={necaSrc} alt='' width={190} />, text: '한국보건의료' },
  { img: <Image src={dipSrc} alt='' width={190} />, text: '대구디지털' },
  { img: <Image src={novarexSrc} alt='' width={170} />, text: 'novarex' },
  { img: <Image src={hectoSrc} alt='' width={153} />, text: 'hecto' },
  { img: <Image src={t3qSrc} alt='' width={148} />, text: '(주)티쓰리큐' },
  { img: <Image src={datastreamsSrc} alt='' width={159} />, text: '데이타스트림즈' },
  { img: <Image src={daewoongSrc} alt='' width={164} />, text: '대웅제약' },
  { img: <Image src={cooconSrc} alt='' width={120} />, text: '쿠콘' },
];
