import { checkUser } from '@/lib/firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const user = await checkUser(id as string);

    if (!user) res.json({ user: null });
    else {
      res.json({ user });
    }
  } else {
    res.status(400).send('Bad request');
  }
}
