import { FC } from 'react';
import { cardType } from '../utils/data';
import Image from 'next/image';
import Link from 'next/link';

type propsType = {
  card: cardType;
};

const CardItem: FC<propsType> = ({ card }) => {
  return (
    <div className="first:bg-neutral-900 last:bg-indigo-500 rounded-xl p-5 text-white last:-mt-5 relative mx-auto w5/6">
      <Link href={`/cards/${card.id}`}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/200px-Mastercard_2019_logo.svg.png"
          alt="mastercard"
          width="60"
          height="30"
        />
        <div className="opacity-50 text-xs mt-6 mb-1">Current balance</div>
        <div>
          {card.balance.toLocaleString('ru-RU', {
            currency: 'BYN',
            style: 'currency',
          })}
        </div>

        <div className="mt-4 text-x">{card.cardNumber}</div>
      </Link>
    </div>
  );
};

export default CardItem;
