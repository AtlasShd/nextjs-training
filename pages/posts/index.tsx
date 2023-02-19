import { getAllPosts, Post } from '@/services/postService';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FC, useState } from 'react';

type propsType = {
  posts: Post[];
};

const Posts: FC<propsType> = ({ posts }) => {
  const [filterData, setFilterData] = useState('');

  const hundleFilterData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterData(e.target.value);
  };

  return (
    <>
      <Head>
        <title>All posts</title>
      </Head>
      <div>
        <h1>Posts</h1>
        <input placeholder="filter" value={filterData} onChange={hundleFilterData} />
        <div>
          {posts
            .filter(({ title }) => title.includes(filterData))
            .map((item) => (
              <div key={item.id}>
                <Link href={`/posts/${item.id}`}>{item.title}</Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Posts;

//! SSR
export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
