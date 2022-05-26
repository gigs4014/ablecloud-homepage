// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { destructurizePaths, getStructuredPostPaths } from '@/helpers/post';

type Data = {
  categories: string[][];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const categories = destructurizePaths(await getStructuredPostPaths());
  res.status(200).json({ categories });
}
