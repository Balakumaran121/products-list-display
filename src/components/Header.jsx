const Header = () => {
  const navList = [
    { label: "Products", value: "products", underline: true },
    { label: "Find Dier", value: "finddier", underline: false },
    { label: "Exhibitions", value: "exhibitions", underline: false },
    { label: "About", value: "about", underline: false },
    { label: "Contact", value: "contact", underline: false },
  ];
  return (
    <div className="py-3  text-rose-500 flex justify-between items-center border">
      <p className="font-semibold m-2">Ania Design Studio</p>
      <nav className="hidden md:block m-2">
        <ul className="inline-flex space-x-4 mx-6">
          {navList?.map((item) => (
            <li
              key={item.value}
              className={`hover:cursor-pointer ${
                item.underline ? "underline" : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
      <div className="inline-flex space-x-2 m-2 items-center">
        <p>Cart</p>
        <span className="bg-rose-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
          0
        </span>
      </div>
    </div>
  );
};

export default Header;
