const Header = () => {
  return (
    <div className="py-3  text-rose-500 flex justify-between items-center">
      <p className="font-semibold mx-2">Ania Design Studio</p>
      <nav>
        <ul className="inline-flex space-x-4 mx-6">
          <li className="underline">Products</li>
          <li>Find Dier</li>
          <li> Exhibitions</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="inline-flex space-x-2 mx-3 items-center">
        <p>Cart</p>
        <span className="bg-rose-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
          0
        </span>
      </div>
    </div>
  );
};

export default Header;
