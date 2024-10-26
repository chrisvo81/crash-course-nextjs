import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItems = [
    {
      dissplay: "the camp",
      slug: "/",
    },
    {
      dissplay: "the experience",
      slug: "/experience",
    },
    {
      dissplay: "the blog",
      slug: "/blog",
    },
  ];
  return (
    <header className="header">
      <h1>Next.js Crash Course</h1>
      <p>Testing new branch</p>
      {/* <Image
        className="header__logo"
        src="/assets/website-logo.png"
        alt="Logo"
        width={100}
        height={100}
      /> */}
      <img src="../../../assets/website-logo.png" alt="Logo" />
      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.slug}>
            <Link href={`/${item.slug}`}>{item.dissplay}</Link>
          </li>
        ))}
        <Link href="/events">
          <button>Book now</button>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
