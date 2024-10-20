import { notFound } from "next/navigation";

interface PageParams {
  id: string;
}

async function fetchPosts(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { cache: "no-store" } // Prevent caching issues
    );
    if (!response.ok) {
      return null; // Don't call notFound here directly
    }

    const data = await response.json();
    if (!data || Object.keys(data).length === 0) {
      return null; // Return null instead of calling notFound
    }

    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null; // Return null on error
  }
}

export async function generateStaticParams() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.map((post: { id: number }) => ({
      params: { id: post.id.toString() },
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export const dynamicParams = false;

export default async function Page({ params }: { params: PageParams }) {
  const postId = Number(params.id);

  // Check for NaN or invalid IDs
  if (isNaN(postId)) {
    notFound(); // This is fine; we can call notFound directly
  }

  const post = await fetchPosts(postId);

  // If no post is found, trigger a 404 page
  if (!post) {
    notFound(); // This is also fine; it can be called directly
  }

  // If we reach this point, render the post
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
