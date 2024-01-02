import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className=" p-4 shadow-md ">
      <div className="flex items-center justify-between  container mx-auto">
        <p>
          <Link href="/" className="no-underline font-semibold italic ">
            KMI
          </Link>
        </p>
        <ul className="flex gap-6 items-center list-none">
          <li>Contact</li>
          <li>Blogs</li>
          <li>Search</li>
        </ul>
      </div>
    </nav>
  );
}
