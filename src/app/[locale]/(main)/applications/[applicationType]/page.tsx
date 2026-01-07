import { notFound } from 'next/navigation';

import { applicationsType, getApplicationList } from '@/constants/applications';

import { ApplicationList } from '@/templates/applications';

import { ApplicationType } from '@/types/applications';

export default async function Applications({
  params,
}: {
  params: Promise<{ applicationType: ApplicationType }>;
}) {
  const { applicationType } = await params;

  if (!applicationsType.includes(applicationType)) return notFound();

  const applicationList = await getApplicationList();

  return (
    <div className='flex justify-center animate-fade-in mt-12'>
      <ApplicationList applicationList={applicationList[applicationType]} />
    </div>
  );
}
