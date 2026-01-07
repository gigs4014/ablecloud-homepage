import { getTranslations } from 'next-intl/server';

import { ApplicationListData, ApplicationType } from '@/types/applications';

import aiMlSrc from '@/public/images/applications/ai-ml.png';
import backupRecoverySrc from '@/public/images/applications/backup-recovery.png';
import bigDataAnalysisSrc from '@/public/images/applications/big-data-analysis.png';
import businessContinuitySrc from '@/public/images/applications/business-continuity.png';
import callCenterSrc from '@/public/images/applications/call-center.png';
import ciCdSrc from '@/public/images/applications/ci-cd.png';
import databaseSrc from '@/public/images/applications/database.png';
import devTestSrc from '@/public/images/applications/dev-test.png';
import devopsOperationsSrc from '@/public/images/applications/devops-operations.png';
import edgeComputingSrc from '@/public/images/applications/edge-computing.png';
import electronicDocumentSrc from '@/public/images/applications/electronic-document.png';
import hybridCloudSrc from '@/public/images/applications/hybrid-cloud.png';
import privateCloudSrc from '@/public/images/applications/private-cloud.png';
import securityInfraSrc from '@/public/images/applications/security-infra.png';
import serverVirtualizationSrc from '@/public/images/applications/server-virtualization.png';
import virtualDesktopDaasSrc from '@/public/images/applications/virtual-desktop-daas.png';

export const applicationNames = [
  'big-data-analysis',
  'business-continuity',
  'business-critical',
  'hybrid-cloud',
  'private-cloud',
  'cloud-native',
  'database',
  'dev-test',
  'devops-operations',
  'virtual-desktop-daas',
  'ai-ml',
  'security-infra',
  'multi-cloud',
  'edge-computing',
  'video-surveillance',
  'electronic-document',
  'backup-recovery',
  'ci-cd',
  'remote-offices',
  'call-center',
  'server-virtualization',
] as const;

export const getApplicationHeaderData = async () => {
  const t = await getTranslations('solution.header');

  return {
    title: {
      mainText: t('title'),
    },
    description: t.rich('description', {
      br: () => <br />,
    }),
    bgClassName: 'bg-application-header',
    heightClassName: 'min-h-[350px] lg:min-h-[404px]',
  };
};

export const applicationsType = ['infra', 'application', 'dev'] as const;

export const applicationsTabs = [
  { text: 'Infra', href: '/applications/infra' },
  { text: 'Application', href: '/applications/application' },
  { text: 'Dev', href: '/applications/dev' },
];

export const getApplicationList = async (): Promise<{
  [K in ApplicationType]: ApplicationListData[];
}> => {
  const t = await getTranslations('solution');

  return {
    infra: [
      {
        imgSrc: serverVirtualizationSrc,
        path: 'server-virtualization',
        title: t('infra.0.title'),
        description: t('infra.0.description'),
      },
      {
        imgSrc: privateCloudSrc,
        path: 'private-cloud',
        title: t('infra.1.title'),
        description: t('infra.1.description'),
      },
      {
        imgSrc: hybridCloudSrc,
        path: 'hybrid-cloud',
        title: t('infra.2.title'),
        description: t('infra.2.description'),
      },
      {
        imgSrc: edgeComputingSrc,
        path: 'edge-computing',
        title: t('infra.3.title'),
        description: t('infra.3.description'),
      },
      {
        imgSrc: securityInfraSrc,
        path: 'security-infra',
        title: t('infra.4.title'),
        description: t('infra.4.description'),
      },
      {
        imgSrc: backupRecoverySrc,
        path: 'backup-recovery',
        title: t('infra.5.title'),
        description: t('infra.5.description'),
      },
      {
        imgSrc: businessContinuitySrc,
        path: 'business-continuity',
        title: t('infra.6.title'),
        description: t('infra.6.description'),
      },
    ],
    application: [
      {
        imgSrc: bigDataAnalysisSrc,
        path: 'big-data-analysis',
        title: t('application.0.title'),
        description: t('application.0.description'),
      },
      {
        imgSrc: aiMlSrc,
        path: 'ai-ml',
        title: t('application.1.title'),
        description: t('application.1.description'),
      },
      {
        imgSrc: virtualDesktopDaasSrc,
        path: 'virtual-desktop-daas',
        title: t('application.2.title'),
        description: t('application.2.description'),
      },
      {
        imgSrc: databaseSrc,
        path: 'database',
        title: t('application.3.title'),
        description: t('application.3.description'),
      },
      {
        imgSrc: electronicDocumentSrc,
        path: 'electronic-document',
        title: t('application.4.title'),
        description: t('application.4.description'),
      },
      {
        imgSrc: callCenterSrc,
        path: 'call-center',
        title: t('application.5.title'),
        description: t('application.5.description'),
      },
    ],
    dev: [
      {
        imgSrc: devTestSrc,
        path: 'dev-test',
        title: t('dev.0.title'),
        description: t('dev.0.description'),
      },
      {
        imgSrc: devopsOperationsSrc,
        path: 'devops-operations',
        title: t('dev.1.title'),
        description: t('dev.1.description'),
      },
      {
        imgSrc: ciCdSrc,
        path: 'ci-cd',
        title: t('dev.2.title'),
        description: t('dev.2.description'),
      },
    ],
  };
};
