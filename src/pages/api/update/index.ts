import type { NextApiRequest, NextApiResponse } from 'next';

import { exec } from 'child_process';

type Data = {
  resultLog: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // let token = req.headers.authorization;
  try {
    const stdout = await new Promise<string>((resolve, reject) => {
      exec('git pull', (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          reject(new Error(stderr));
        } else {
          resolve(stdout);
        }
      });
    });

    res.status(200).json({ resultLog: stdout });
  } catch (error: any) {
    res.status(500).json({ resultLog: error.message });
  }
}
