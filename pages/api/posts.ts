import { NextApiRequest, NextApiResponse } from 'next';

type backendPost = {
  title: string;
  body: string;
};

const postsApi = (req: NextApiRequest, res:NextApiResponse) => {
  //communication with DB
  res.json({
    title: 'Hello',
    body: 'world',
  });

};

export default postsApi;