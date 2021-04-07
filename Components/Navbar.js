import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo Here</div>
      <ul className="links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="">Contact us</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
