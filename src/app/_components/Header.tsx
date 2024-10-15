import Link from 'next/link';

export default function Header() {
  return (
    <main>
      <h3>Header</h3>
      <Link href='/'>Main</Link>
      <Link href='/blog'>Blog</Link>
    </main>
  );
}
