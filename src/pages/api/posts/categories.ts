// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { destructurizePaths, getStructuredPostPaths } from '@/helpers/post';

type Data = {
  categories: string[][];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let { basePath = '' } = req.query;

  if (!Array.isArray(basePath)) {
    basePath = [basePath];
  }

  const categories = destructurizePaths(await getStructuredPostPaths(basePath));
  res.status(200).json({ categories });
}
