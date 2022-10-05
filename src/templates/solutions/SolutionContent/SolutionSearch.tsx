import { useEffect, useState } from 'react';

import Link from 'next/link';

import { clients, urlSplit } from 'src/pages/interview';

import { NormalCard } from '@/components/common';
import MultiSelect from '@/components/common/MultiSelect/MultiSelect';

interface clientList {
  title: string;
  image: JSX.Element;
  description: JSX.Element;
  href: string;
  maintype: string;
  subtype: string;
}

export const SolutionSearch = ({
  resultValue,
  setResultValue,
}: {
  resultValue: {
    mainType: string;
    subType: string;
  };
  setResultValue: React.Dispatch<
    React.SetStateAction<{
      mainType: string;
      subType: string;
    }>
  >;
}) => {
  useEffect(() => {
    const url = window.location.href;
    const typeValue = urlSplit(url);
    setSelectValue(typeValue);
  }, []);

  const [selectValue, setSelectValue] = useState({
    mainType: '전체',
    subType: '-',
  });

  const clientList: clientList[] = [];

  clients.map(value => {
    const { maintype, subtype } = value;
    if (
      (maintype && maintype == resultValue.mainType && subtype == resultValue.subType) ||
      resultValue.mainType == '전체'
    )
      clientList.push(value);
  });

  return (
    <div className='m-auto max-w-page-full'>
      <div className='mb-4 flex w-full flex-row justify-center'>
        <MultiSelect selectValue={selectValue} setValue={setSelectValue} />
        <Link href={`#${selectValue.mainType}/${selectValue.subType}`}>
          <button
            onClick={() => {
              setResultValue(selectValue);
            }}
            className={
              'ml-2 h-12 rounded-lg border-1 bg-[#2151A2] px-6 font-bold text-white hover:scale-102 sm:ml-4 sm:px-12 md:px-16 lg:px-24'
            }>
            검색
          </button>
        </Link>
      </div>
      <div>
        {clientList.length > 0 ? (
          <div className='my-16 grid min-h-[510px] grid-cols-1 gap-6 px-4 md:grid-cols-2 xl:grid-cols-3'>
            {clientList.map((value, index) => {
              const { title, image, description, href } = value;

              return (
                <NormalCard
                  key={index}
                  title={title}
                  image={image}
                  description={description}
                  href={href}
                />
              );
            })}
          </div>
        ) : (
          <div
            className='flex min-h-[400px] flex-1 items-center justify-center pt-10'
            key={'NotFound'}>
            <p className={' text-blue-400'}>검색결과가 존재하지 않습니다</p>
          </div>
        )}
      </div>
    </div>
  );
};
