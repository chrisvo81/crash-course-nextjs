'use client';
import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  return (
    <main>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </main>
  );
}
