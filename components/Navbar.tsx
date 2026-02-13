export default function Navbar() {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-4">
      <div className="text-lg font-bold">Bijaya Tamang</div>
      <div className="space-x-4">
        <a href="#about" className="text-gray-600 hover:text-gray-900">
          About
        </a>
        <a href="#projects" className="text-gray-600 hover:text-gray-900">
          Projects
        </a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </div>
    </nav>
  );
}
