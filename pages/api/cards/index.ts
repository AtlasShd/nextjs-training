import cards, { cardType } from '@/src/utils/data'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<cardType[]>
) {
  res.status(200).json(cards)
}
