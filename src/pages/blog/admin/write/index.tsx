import { useState } from 'react';

import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@/components/common/Editor/Editor'), { ssr: false });

const WriteBlog = () => {
  const [data, setData] = useState<string>('');

  return (
    <div className='prose max-w-page-full pt-40 prose-headings:font-bold'>
      <Editor data={data} setData={setData} />
      {/* <h2 className=''>dd</h2> */}
      {/* {data && <div> {data}</div>} */}
    </div>
  );
};

export default WriteBlog;
