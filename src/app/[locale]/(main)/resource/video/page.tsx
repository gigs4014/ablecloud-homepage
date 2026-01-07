import { videosData } from '@/constants/resource';

import { VideoList } from '@/templates/resource';

export default function Video() {
  return (
    <div className='flex justify-center animate-fade-in mt-6'>
      <VideoList videosData={videosData} />
    </div>
  );
}
