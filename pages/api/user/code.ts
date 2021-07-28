import { generateUser } from '@/lib/firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const userCode = await generateUser();
    res.json({ code: userCode });
  } else {
    res.status(400).send('Bad request');
  }
}
