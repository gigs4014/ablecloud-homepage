import { StaticImageData } from 'next/image';

import { compatibilityType, resourceType } from '@/constants/resource';

export type ResourceType = (typeof resourceType)[number];
export type CompatibilityType = (typeof compatibilityType)[number];

export interface MdxMetaData {
  id: number;
  title: string;
  mainImgSrc: string;
  updatedAt: string;
}

export interface BlogData {
  body: {
    content: string;
    stringValue: string;
  };
  metaData: MdxMetaData;
}

export interface EbookData {
  type: string;
  title: string;
  description: string;
  href: string;
  imgSrc: StaticImageData;
}

export interface CompatibilityData {
  title: string;
  descriptionList: {
    description: string;
    list: string[];
  }[];
}
