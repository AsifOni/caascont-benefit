export const Navbar = () => {
  return (
    <div className="w-fixed w-full flex-shrink flex-grow-0">
      <div className="sticky top-0 w-full h-full">
        <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200">
          <div className="flex flex-wrap items-center justify-between p-4">
            <a href="https://www.caasco.com//" className="flex items-center">
              <img src="CAALogo.png" className="w-36 h-16 mr-3" alt="CAA Logo" role="presentation" />
            </a>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4">
                    Deals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2"
                    aria-current="page"
                  >
                    View Benefits
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-between gap-2"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};
