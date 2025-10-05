
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <div>
          <Link href="/about" className="mr-4">
            About
          </Link>
          <Link href="/case-studies">
            Case Studies
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
