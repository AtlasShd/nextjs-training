export type cardType = {
  id: number,
  balance: number,
  cardNumber: number,
  color: string,
}

const cards: cardType[] = [
  {
    id: 1,
    balance: 3123123,
    cardNumber: 5362830586743567,
    color: 'black'
  },
  {
    id: 2,
    balance: 3142343,
    cardNumber: 53622312312312312567,
    color: 'blue'
  },
];

export default cards;