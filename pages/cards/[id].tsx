import CardItem from '@/src/components/CardItem';
import DefaultHead from '@/src/components/DefaultHead';
import { cardType } from '@/src/utils/data';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { FC } from 'react';

type propsType = {
  card: cardType;
};

const card: FC<propsType> = ({ card }) => {
  return (
    <>
      <DefaultHead />
      <main className="w-1/4 mx-auto mt-20">
        <CardItem card={card} />
        <Link href="/">To main page</Link>
      </main>
    </>
  );
};

export default card;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/cards');
  const cards: cardType[] = await response.json();

  return {
    paths: cards.map(({ id }) => ({ params: { id: id.toString() } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const response = await fetch(`http://localhost:3000/api/cards/${context.params!.id}`);
  const card = await response.json();

  return {
    props: {
      card,
    },
  };
};
