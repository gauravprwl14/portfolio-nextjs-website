const menuItems = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Services",
  },
  {
    name: "Portfolio",
  },
  {
    name: "Blogs",
  },
  {
    name: "Contact",
  },
];

const Header = ({ logo }) => {
  return (
    <header>
      <nav className="px-8 py-6 bg-white fixed top-0 left-0 right-0">
        {/* container */}
        <div className="w-full mx-auto h-auto py-0 px-10 relative clear-both max-w-screen-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">Logo</div>

            <div className="items-center w-auto justify-center">
              <div className="flex">
                <ul className="flex flex-row mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  {menuItems.map((obj, index) => {
                    return (
                      <li key={index} className="flex justify-center flex-1">
                        {" "}
                        <a className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white w-max">
                          {" "}
                          {obj.name}{" "}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Items = () => {};

export default Header;
