import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { InterviewHistoryData, InterviewListData } from '@/types/interview';

import addSrc from '@/public/images/common/add.png';
import andongSrc from '@/public/images/common/andong.png';
import ansanSrc from '@/public/images/common/ansan.png';
import army2Src from '@/public/images/common/army2.png';
import armySrc from '@/public/images/common/army.png';
import busanCentralSrc from '@/public/images/common/busan-middle.png';
import busanUniversitySrc from '@/public/images/common/busan-uni.png';
import busanoceanSrc from '@/public/images/common/busanocean.png';
import buyeoSrc from '@/public/images/common/buyeo.png';
import chuncheonSrc from '@/public/images/common/cc.png';
import changwonSrc from '@/public/images/common/changwon.png';
import cheongyangSrc from '@/public/images/common/cheongyang.png';
import ckSrc from '@/public/images/common/ck.png';
import comwelSrc from '@/public/images/common/comwel.png';
import cooconSrc from '@/public/images/common/coocon.png';
import csSrc from '@/public/images/common/cs.png';
import deaguHanwiSrc from '@/public/images/common/daegu-hanwi.png';
import daeguSouthSrc from '@/public/images/common/daegu-south.png';
import daeguSrc from '@/public/images/common/daegu.png';
import daewoongSrc from '@/public/images/common/daewoong.png';
import dangjinSrc from '@/public/images/common/dangjin.png';
import dapaSrc from '@/public/images/common/dapa.png';
import datastreamsSrc from '@/public/images/common/datastreams.png';
import datqSrc from '@/public/images/common/datq.png';
import dipSrc from '@/public/images/common/dip.png';
import donghaeSrc from '@/public/images/common/donghae.png';
import dongwonSrc from '@/public/images/common/dongwon.png';
import ekrSrc from '@/public/images/common/ekr.png';
import ezlSrc from '@/public/images/common/ezl.png';
import gbSrc from '@/public/images/common/gb.png';
import genSrc from '@/public/images/common/gen.png';
import geojeSrc from '@/public/images/common/geoje.png';
import gntelSrc from '@/public/images/common/gntel.png';
import gongjuSrc from '@/public/images/common/gongju.png';
import goryeongSrc from '@/public/images/common/goryeong.png';
import grtcSrc from '@/public/images/common/grtc.png';
import gwangjuSrc from '@/public/images/common/gwangju.png';
import gyeonggiSrc from '@/public/images/common/gyeonggi.png';
import gyeongnamSrc from '@/public/images/common/gyeongnam.png';
import hanaInvestSrc from '@/public/images/common/hana-invest.png';
import hanpassSrc from '@/public/images/common/hanpass.png';
import hcSrc from '@/public/images/common/hc.png';
import hectoSrc from '@/public/images/common/hecto.png';
import hscitySrc from '@/public/images/common/hscity.png';
import incheonWestSrc from '@/public/images/common/incheon-west.png';
import injeSrc from '@/public/images/common/inje.png';
import jecheonSrc from '@/public/images/common/jecheon.png';
import kacptaSrc from '@/public/images/common/kacpta.png';
import kepcoSrc from '@/public/images/common/kepco.png';
import konyangSrc from '@/public/images/common/konyang.png';
import koreaLocalSrc from '@/public/images/common/korea-local.png';
import koreaOceanSrc from '@/public/images/common/korea-ocean.png';
import gyeognamInfoSrc from '@/public/images/common/kyungnam-info.png';
import billyangSrc from '@/public/images/common/milyang.png';
import mohwSrc from '@/public/images/common/mohw.png';
import necaSrc from '@/public/images/common/neca.png';
import novarexSrc from '@/public/images/common/novarex.png';
import osanSrc from '@/public/images/common/osan.png';
import pocheonSrc from '@/public/images/common/pocheon.png';
import pohangTechSrc from '@/public/images/common/pohang-tech.png';
import policeSrc from '@/public/images/common/police.png';
import poscoSrc from '@/public/images/common/posco.png';
import pyeongtaekSrc from '@/public/images/common/pyeongtaek.png';
import rokTrainSrc from '@/public/images/common/rok-train.png';
import rokafSrc from '@/public/images/common/rokaf.png';
import sachanSrc from '@/public/images/common/sacheon.png';
import samchuckSrc from '@/public/images/common/samchuck.png';
import sangjuSrc from '@/public/images/common/sangju.png';
import spoSrc from '@/public/images/common/spo.png';
import t3qSrc from '@/public/images/common/t3q.png';
import taeanSrc from '@/public/images/common/taean.png';
import ulsanSrc from '@/public/images/common/ulsan.png';
import uscSrc from '@/public/images/common/usc.png';
import yangsSrc from '@/public/images/common/yangsan.png';
import ycgSrc from '@/public/images/common/ycg.png';
import yeojuSrc from '@/public/images/common/yeoju.png';
import yeosuGwangyangSrc from '@/public/images/common/yesu-port.png';
import yitSrc from '@/public/images/common/yit.png';
import ysbsUniversitySrc from '@/public/images/common/ysbs-uni.png';

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

export const getInterviewlist = async () => {
  const t = await getTranslations('interview');

  return [
    {
      category: t('category.0'),
      data: [
        { img: <Image src={spoSrc} alt='' width={65} />, text: '대검찰청' },
        { img: <Image src={policeSrc} alt='' width={118} />, text: '경찰청' },
        { img: <Image src={ekrSrc} alt='' width={115} />, text: '한국농어촌공사' },
        { img: <Image src={mohwSrc} alt='' width={149} />, text: '보건복지부' },
        { img: <Image src={kepcoSrc} alt='' width={128} />, text: '한국전력공사' },
        { img: <Image src={busanoceanSrc} alt='' width={130} />, text: '부산방해양수산청' },
        { img: <Image src={comwelSrc} alt='' width={100} />, text: '근로복지공단' },
        { img: <Image src={gyeonggiSrc} alt='' width={167} />, text: '경기도' },
        { img: <Image src={gyeongnamSrc} alt='' width={122} />, text: '경상남도청' },
        { img: <Image src={gbSrc} alt='' width={122} />, text: '경상북도청' },
        { img: <Image src={gwangjuSrc} alt='' width={147} />, text: '광주광역시' },
        { img: <Image src={grtcSrc} alt='' width={150} />, text: '광주교통' },
        { img: <Image src={hscitySrc} alt='' width={122} />, text: '화성특례시' },
        { img: <Image src={changwonSrc} alt='' width={117} />, text: '창원시' },
        { img: <Image src={pyeongtaekSrc} alt='' width={57} />, text: '평택시청' },
        { img: <Image src={sangjuSrc} alt='' width={116} />, text: '상주시청' },
        { img: <Image src={yeojuSrc} alt='' width={115} />, text: '여주시' },
        { img: <Image src={pocheonSrc} alt='' width={117} />, text: '포천시' },
        { img: <Image src={daeguSrc} alt='' width={182} />, text: '대구' },
        { img: <Image src={andongSrc} alt='' width={142} />, text: '안동' },
        { img: <Image src={donghaeSrc} alt='' width={142} />, text: '동해' },
        { img: <Image src={osanSrc} alt='' width={167} />, text: '오산' },
        { img: <Image src={ansanSrc} alt='' width={128} />, text: '안산시' },
        { img: <Image src={jecheonSrc} alt='' width={143} />, text: '제천' },
        { img: <Image src={chuncheonSrc} alt='' width={142} />, text: '춘천' },
        { img: <Image src={yangsSrc} alt='' width={142} />, text: '양산' },
        { img: <Image src={geojeSrc} alt='' width={142} />, text: '거제' },
        { img: <Image src={gongjuSrc} alt='' width={142} />, text: '공주' },
        { img: <Image src={sachanSrc} alt='' width={142} />, text: '사천' },
        { img: <Image src={billyangSrc} alt='' width={142} />, text: '밀양' },
        { img: <Image src={dangjinSrc} alt='' width={142} />, text: '당진' },
        { img: <Image src={samchuckSrc} alt='' width={113} />, text: '삼척' },
        { img: <Image src={hcSrc} alt='' width={83} />, text: '합천군청' },
        { img: <Image src={ycgSrc} alt='' width={133} />, text: '예천군청' },
        { img: <Image src={uscSrc} alt='' width={60} />, text: '의성군청' },
        { img: <Image src={csSrc} alt='' width={117} />, text: '청손군' },
        { img: <Image src={buyeoSrc} alt='' width={113} />, text: '부여군' },
        { img: <Image src={injeSrc} alt='' width={115} />, text: '인제군' },
        { img: <Image src={cheongyangSrc} alt='' width={156} />, text: '청양군' },
        { img: <Image src={taeanSrc} alt='' width={142} />, text: '태안' },
        { img: <Image src={ulsanSrc} alt='' width={161} />, text: '울산광역시중구' },
        { img: <Image src={daeguSouthSrc} alt='' width={108} />, text: '대구남구' },
        { img: <Image src={incheonWestSrc} alt='' width={142} />, text: '인천서구' },
        { img: <Image src={busanCentralSrc} alt='' width={142} />, text: '부산중구' },
        { img: <Image src={koreaLocalSrc} alt='' width={142} />, text: '한국지역정보개발원' },
        { img: <Image src={dipSrc} alt='' width={158} />, text: '대구디지털' },
        { img: <Image src={necaSrc} alt='' width={158} />, text: '한국보건의료' },
        { img: <Image src={koreaOceanSrc} alt='' width={142} />, text: '해양수산' },
        { img: <Image src={yeosuGwangyangSrc} alt='' width={142} />, text: '여수광양한만공사' },
        { img: <Image src={pohangTechSrc} alt='' width={142} />, text: '포항테크노파크' },
      ],
    },
    {
      category: t('category.1'),
      data: [
        { img: <Image src={armySrc} alt='' width={175} />, text: '육군본부' },
        { img: <Image src={rokafSrc} alt='' width={167} />, text: '공군' },
        { img: <Image src={dapaSrc} alt='' width={80} />, text: '방위사업청' },
        { img: <Image src={datqSrc} alt='' width={145} />, text: '국방기술품질원' },
        { img: <Image src={army2Src} alt='' width={60} />, text: '' },
        { img: <Image src={addSrc} alt='' width={158} />, text: '국방과학' },
        { img: <Image src={rokTrainSrc} alt='' width={142} />, text: 'ROK-TRAIN' },
      ],
    },
    {
      category: t('category.2'),
      data: [
        { img: <Image src={hanaInvestSrc} alt='' width={120} />, text: '하나투자증권' },
        { img: <Image src={cooconSrc} alt='' width={120} />, text: '쿠콘' },
        { img: <Image src={hectoSrc} alt='' width={128} />, text: 'hecto' },
        { img: <Image src={hanpassSrc} alt='' width={142} />, text: '한패스' },
        { img: <Image src={ezlSrc} alt='' width={142} />, text: 'EZL' },
      ],
    },
    {
      category: t('category.3'),
      data: [
        { img: <Image src={genSrc} alt='' width={128} />, text: '광주광역시교육' },
        { img: <Image src={konyangSrc} alt='' width={117} />, text: '건양대학교' },
        { img: <Image src={yitSrc} alt='' width={113} />, text: '여주대학교' },
        { img: <Image src={busanUniversitySrc} alt='' width={142} />, text: '부산대학교' },
        { img: <Image src={deaguHanwiSrc} alt='' width={142} />, text: '대구한의대학교' },
        { img: <Image src={ckSrc} alt='' width={167} />, text: '청강문화산업대학교' },
        { img: <Image src={ysbsUniversitySrc} alt='' width={142} />, text: '양산부산대학교병원' },
        { img: <Image src={gyeognamInfoSrc} alt='' width={142} />, text: '경남정보대학교' },
      ],
    },
    {
      category: t('category.4'),
      data: [
        { img: <Image src={poscoSrc} alt='' width={142} />, text: '포스코' },

        { img: <Image src={novarexSrc} alt='' width={142} />, text: 'novarex' },
        { img: <Image src={daewoongSrc} alt='' width={137} />, text: '대웅제약' },
        { img: <Image src={t3qSrc} alt='' width={123} />, text: '(주)티쓰리큐' },
        { img: <Image src={datastreamsSrc} alt='' width={133} />, text: '데이타스트림즈' },
        { img: <Image src={dongwonSrc} alt='' width={142} />, text: '동원금속주식회사' },
        { img: <Image src={kacptaSrc} alt='' width={123} />, text: '한국세무사회' },
      ],
    },
  ];
};
