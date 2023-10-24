import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { SelectValue, clients, urlSplit } from 'src/pages/interview';

import { NormalCard } from '@/components/common';

interface SolutionSearchProps {
  resultValue: SelectValue;
  setResultValue: Dispatch<SetStateAction<SelectValue>>;
}

interface clientList {
  title: string;
  image: JSX.Element;
  description: JSX.Element;
  href?: string;
  maintype: string;
  subtype: string;
}

export const SolutionSearch = ({ resultValue, setResultValue }: SolutionSearchProps) => {
  useEffect(() => {
    const url = window.location.href;
    const typeValue = urlSplit(url);
    setSelectValue(typeValue);
  }, []);

  const [selectValue, setSelectValue] = useState<SelectValue>({
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
    <div className='m-auto max-w-page-full text-[#444444]'>
      {/* <div className='mb-4 flex w-full flex-row justify-center'>
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
      </div> */}
      <div>
        {clientList.length > 0 ? (
          <div className='mb-16 grid min-h-[510px] grid-cols-1 gap-6 px-4 md:grid-cols-2 xl:grid-cols-3'>
            {clientList.map(({ title, image, description, href }, index) => {
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
