import Image from 'next/image';
import { Inter } from '@next/font/google';
import DefaultHead from '@/src/components/DefaultHead';
import { GetStaticProps } from 'next';
import { cardType } from '@/src/utils/data';
import { FC } from 'react';
import CardItem from '@/src/components/CardItem';

const inter = Inter({ subsets: ['latin'] });

type propsType = {
  cards: cardType[];
};

const Home: FC<propsType> = ({ cards }) => {
  return (
    <>
      <DefaultHead />
      <main className="w-1/4 mx-auto mt-20">
        {cards.map((card) => (
          <CardItem card={card} key={card.id} />
        ))}
      </main>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch('http://localhost:3000/api/cards');
//   const cards = await response.json();

//   return {
//     props: {
//       cards,
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/cards');
  const cards = await response.json();

  return {
    props: {
      cards,
    },
  };
};

export default Home;
