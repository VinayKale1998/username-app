import { useLoaderData } from 'react-router-dom';

import PostItem from '../components/PostItem';

function PostPage() {
  const post = useLoaderData();

  return <PostItem post={post} />;
}

export default PostPage;

export async function loader({ params,request }) {
// const data = await request.formData();
// const methog = request.method()
  const postId = params.id;
  return fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
}
