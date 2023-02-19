import { API_URL } from '@/utils/consts';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getAllPosts = async ():Promise<Post[]> => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
}

export const getOnePost = async (id: string | number):Promise<Post> => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  return response.json();
}