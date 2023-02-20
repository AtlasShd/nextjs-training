import cards, { cardType } from '@/src/utils/data';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (typeof req.query.id !== 'string') {
    res.status(404).json({ message: 'Invalid request!' });
  }

  const reqId = req.query.id as string;
  res.json(cards.find(({ id }) => id === +reqId));
}
