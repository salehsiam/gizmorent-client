import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const signOutUser = () => console.log("User signed out");
  const activeStyle = "font-semibold text-Primary";

  // Category Data with Products
  const categories = [
    {
      name: "Cell Phones & Tablets",
      to: "/cell-phones-tablets",
      products: [
        { name: "Smartphones", to: "/smartphones" },
        { name: "Tablets", to: "/tablets" },
        { name: "Accessories", to: "/phone-accessories" },
      ],
    },
    {
      name: "Computers",
      to: "/computers",
      products: [
        { name: "Laptops", to: "/laptops" },
        { name: "Desktops", to: "/desktops" },
        { name: "Monitors", to: "/monitors" },
        { name: "Accessories", to: "/computer-accessories" },
      ],
    },
    {
      name: "Cameras",
      to: "/cameras",
      products: [
        { name: "DSLR Cameras", to: "/dslr-cameras" },
        { name: "Mirrorless Cameras", to: "/mirrorless-cameras" },
        { name: "Action Cameras", to: "/action-cameras" },
        { name: "Lenses", to: "/camera-lenses" },
      ],
    },
    {
      name: "Gaming & VR",
      to: "/gaming-vr",
      products: [
        { name: "Gaming Consoles", to: "/gaming-consoles" },
        { name: "VR Headsets", to: "/vr-headsets" },
        { name: "Gaming Accessories", to: "/gaming-accessories" },
      ],
    },
    {
      name: "Audio & Music",
      to: "/audio-music",
      products: [
        { name: "Headphones", to: "/headphones" },
        { name: "Speakers", to: "/speakers" },
        { name: "Microphones", to: "/microphones" },
      ],
    },
    {
      name: "Wearables",
      to: "/wearables",
      products: [
        { name: "Smartwatches", to: "/smartwatches" },
        { name: "Fitness Trackers", to: "/fitness-trackers" },
        { name: "Smart Glasses", to: "/smart-glasses" },
      ],
    },
  ];

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-Primary">
        <div className="w-11/12 mx-auto py-1 max-w-7xl flex justify-between items-center text-white">
          <div className="flex justify-center items-center space-x-2">
            <IoShieldCheckmark />
            <h2 className="text-sm text-white">Welcome To GizmoRent</h2>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <TbTruckDelivery />
            <h2 className="text-sm text-white">Track Your Order</h2>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-11/12 mx-auto py-1 max-w-7xl">
        <div className="navbar bg-base-100 z-50">
          {/* Navbar Start (Logo and Search Bar) */}
          <div className="navbar-start gap-6">
            {/* Logo */}
            <div className="text-2xl font-bold text-Primary">
              <NavLink to="/">GizmoRent</NavLink>
            </div>

            {/* Search Bar (Hidden on Mobile) */}
            <div className="relative items-center hidden lg:flex w-full">
              <FaSearch className="absolute left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search for gadgets..."
                className="w-full pl-10 pr-4 py-2 border focus:border-none rounded-full focus:outline-none focus:ring-2 focus:ring-Primary"
              />
            </div>
          </div>

          {/* Navbar Middle (Nav Items - Visible on Desktop) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-4">
              {categories.map((category, index) => (
                <li className="font-bold relative group" key={index}>
                  <NavLink
                    to={category.to}
                    className={({ isActive }) =>
                      isActive ? activeStyle : "hover:text-Primary"
                    }
                  >
                    {category.name}
                  </NavLink>
                  {/* Dropdown for Products */}
                  {category.products && (
                    <ul className="absolute mx-auto hidden group-hover:block mt-8 bg-white shadow-lg rounded-lg  p-2 space-y-2 min-w-[200px] z-50">
                      {category.products.map((product, productIndex) => (
                        <li key={productIndex}>
                          <NavLink
                            to={product.to}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            {product.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Navbar End (Icons and Dropdowns) */}
          <div className="navbar-end gap-5">
            {/* Wishlist and Cart Icons */}
            <button className="text-2xl hidden md:block">
              <AiOutlineHeart />
            </button>
            <button className="text-2xl hidden md:block">
              <AiOutlineShoppingCart />
            </button>

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="text-2xl rounded-full">
                  <CgProfile />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-64 z-50"
              >
                {/* User Profile */}
                <li className="flex items-center justify-between">
                  <div className="flex items-center flex-row">
                    <CgProfile className="text-2xl" />
                    <div className="ml-3">
                      <p className="font-bold">User Name</p>
                      <a href="#" className="text-sm text-blue-500">
                        See your profile
                      </a>
                    </div>
                  </div>
                </li>

                {/* Register and Login Buttons */}
                <div className="flex gap-2 mt-3 justify-center items-center mx-4">
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-Primary text-white rounded-lg text-sm font-semibold w-full text-center"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="px-4 py-2 border border-gray-400 rounded-lg text-sm font-semibold w-full text-center"
                  >
                    Log in
                  </Link>
                </div>

                {/* Settings and Logout */}
                <div className="mt-3">
                  <button className="block text-left w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    Invite people
                  </button>
                  <button className="block text-left w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    Help Center
                  </button>
                </div>
                <li>
                  <a
                    onClick={signOutUser}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <IoMdLogOut className="text-2xl" />
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu (Hamburger Icon) */}
            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex="0" className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-1 shadow"
              >
                {categories.map((category, index) => (
                  <li key={index}>
                    <NavLink to={category.to}>{category.name}</NavLink>
                    {category.products && (
                      <ul className="pl-4">
                        {category.products.map((product, productIndex) => (
                          <li key={productIndex}>
                            <NavLink to={product.to}>{product.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;