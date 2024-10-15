import { notFound } from 'next/navigation';

interface PageParams {
  id: string;
}

async function fetchPosts(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (!data) {
      notFound();
    }
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    notFound();
  }
}

export async function generateStaticParams() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.map((post: { id: number }) => ({
      params: { id: post.id.toString() },
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export const dynamicParams = false;

export default async function Page({ params }: { params: PageParams }) {
  const post = await fetchPosts(Number(params.id));
  if (!post) {
    notFound();
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
