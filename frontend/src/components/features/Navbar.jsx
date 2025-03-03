const Navbar = () => {
    return (
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-xl font-bold text-gray-800">
              Copy AI
            </a>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
  
  export default Navbar;
  