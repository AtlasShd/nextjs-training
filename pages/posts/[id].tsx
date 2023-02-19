import { getAllPosts, getOnePost, Post } from '@/services/postService';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Image from 'next/image';
import Head from 'next/head';

type PropsType = {
  post: Post;
};

const Post: FC<PropsType> = ({ post }) => {
  const { query, back } = useRouter(); //много функций есть

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div>
        <h1>{post.id}</h1>
        <div>
          <div>{post.title}</div>
          <br />
          <div>{post.body}</div>
        </div>
        <Image
          src={`https://source.unsplash.com/random/200x200?sig=${post.id}`}
          alt="photo"
          width={200}
          height={200}
          quality="100"
        />
        <br />

        <button onClick={back}>Go back</button>
      </div>
    </>
  );
};

export default Post;

//! SSG
// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//   const post = await getOnePost(context?.params?.id as string | number); // bad practice in this moment

//   return {
//     props: {
//       post,
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const posts = await getAllPosts();

//   return {
//     paths: posts.map(({ id }) => ({
//       params: { id: id.toString() },
//     })),
//     fallback: false,
//   };
// };

//! ISG
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const post = await getOnePost(context?.params?.id as string | number); // bad practice in this moment

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: false,
  };
};

//! SSR
// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//   const post = await getOnePost(context?.params?.id as string | number); // bad practice in this moment

//   return {
//     props: {
//       post,
//     },
//   };
// };
