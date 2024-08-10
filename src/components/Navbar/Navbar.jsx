import Logo from "../../assets/images/logo (1).png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import contextlist from "../context/ThemeContext";
import { MdDelete } from "react-icons/md";

const NavbarMenu = [
  {
    id: 1,
    title: "New Relase",
    link: "/",
  },
  {
    id: 2,
    title: "Men",
    link: "#men",
  },
  {
    id: 3,
    title: "Women",
    link: "#Women",
  },
  {
    id: 4,
    title: "Offer",
    link: "#offer",
  },
  {
    id: 5,
    title: "Customize",
    link: "#Customize",
  },
];

const Navbar = () => {
  const [iscartOpen, setIscartOpen] = useState(false);

  const { removeItem, cart, numberItem, total } = useContext(contextlist);

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIscartOpen(!iscartOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <img src={Logo} alt="Logo" className="w-20 hover:cursor-pointer" />
        </div>

        {/* Navigation Items */}

        <div className="navlist hidden md:flex space-x-4">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-2 px-4 uppercase font-barlow font-semibold hover:scale-105 duration-300"
                  >
                    {item.title}
                  </a>{" "}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <FaRegUserCircle size={24} />

          <div
            onClick={() => {
              toggleCart();
            }}
            className="relative cursor-pointer"
          >
            <MdOutlineShoppingCart size={24} className="hover:cursor-pointer" />
            <div className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 text-white text-xs flex justify-center items-center">
              {numberItem}
            </div>
          </div>
        </div>
        {/* add to cart */}
        {iscartOpen && (
          <div
            className={`absolute right-0 top-16 z-50 w-[300px] h-full bg-[#f5f5f5] rounded-md`}
          >
            {cart.map((item) => {
              return (
                <div
                  key={item.id}
                  className="p-4 flex justify-between items-center border-b-2 border-gray-500"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-20 h-20 object-cover rounded-md"
                      src={item.img}
                      alt={item.name}
                    />
                    <div>
                      <h3 className="text-l font-bold text-black">
                        {item.name}
                      </h3>
                      <p className="text-lg font-bold text-[#b34e2a]">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        removeItem(item.id);
                      }}
                      className="text-2xl text-[#de283b]"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="absolute bottom-0 flex flex-col items-center justify-center w-full">
              <div className="text-lg font-bold text-[#b34e2a] p-4">
                Total: ${total}
              </div>
              <div className="w-full">
                <button className="w-full bg-[#b34e2a] text-lg font-bold text-white p-4 cursor-pointer hover:bg-[#b34f2ae1]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
        {/* end add to cart */}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#ffa27f] rounded-md">
          <ul className="flex flex-col space-y-2 mt-4">
            {NavbarMenu.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className=" text-black py-2 px-4 uppercase font-barlow font-semibold hover:text-gray-400 duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
