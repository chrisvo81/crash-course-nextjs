import axios from 'axios';

export default async function Page() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
    {
      httpsAgent: new (require('https').Agent)({ rejectUnauthorized: false }),
      headers: {
        'Cache-Control': 'max-age=30',
      },
    }
  );
  const data = response.data;

  return (
    <main>
      <h1>Blog</h1>
      {data.map(
        (post: { userId: number; id: number; title: string; body: string }) => (
          <p key={post.id}>{post.title}</p>
        )
      )}
    </main>
  );
}
