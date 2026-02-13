import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-4">
      <div className="text-lg nav-logo font-bold">Bijaya Tamang</div>
      <div className="space-x-4">
        <Link href="#about" className="text-gray-600 hover:text-gray-900">
          About
        </Link>
        <Link href="#projects" className="text-gray-600 hover:text-gray-900">
          Projects
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </Link>
      </div>
    </nav>
  );
}
