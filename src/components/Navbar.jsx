import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, removeItems, toggleCart } from "../features/cart/cartSlice";
import { closeMenu, openMenu } from "../features/sideNav/sideNavSlice";
import toggle from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import basket from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import bin from "../images/icon-delete.svg";
import CloseIcon from "@mui/icons-material/Close";
import thumb1 from '../images/image-product-1-thumbnail.jpg'

function Navbar() {
  const { cart, cartItems } = useSelector((state) => state.cart);
  const { sideNav } = useSelector((state) => state.sideNav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch, cartItems]);

  return (
    <div className="z-99">
      {/* Main navigation */}
      <header className="bg-white flex items-center justify-between h-24">
        <div className="flex items-center gap-4">
          <img
            className="block lg:hidden cursor-pointer pt-1"
            src={toggle}
            alt="toggle"
            onClick={() => dispatch(openMenu())}
          />
          <img className="logo" src={logo} alt="logo" />
          <nav className="flex  items-center">
            <ul className="flex items-center justify-between gap-6 m-0 list-none">
              <li className="h-24 hover:border-b-orange-600">
                <p className="mt-9 hover:cursor-pointer hover:text-black">Collections</p>
              </li>
              <li className="h-24 hover:border-b-orange-400">
                <p className="mt-9 hover:cursor-pointer hover:text-black">Men</p>
              </li>
              <li className="h-24 hover:border-b-orange-600">
                <p className="mt-9 hover:cursor-pointer hover:text-black">Women</p>
              </li>
              <li className="h-24 hover:border-b-orange-600">
                <p className="mt-9 hover:cursor-pointer hover:text-black">About</p>
              </li>
              <li className="h-24 hover:border-b-orange-600">
                <p className="mt-9 hover:cursor-pointer hover:text-black">Contact</p>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <div className=" btn btn-circle btn-md mr-4" onClick={() => dispatch(toggleCart())}>
            <div className="indicator">
            <img
              className="h-6 w-6"
              src={basket}
              title="Cart"
              alt="cart"
            />
            <p className={cartItems !== null ? `badge badge-sm badge-primary indicator-item` : undefined}>
              {cartItems}
            </p>
            </div>
          </div>
          <img
            className="w-12 hover:ring hover:ring-primary ring-offset-base-100 ring-offset-2 rounded-full"
            src={avatar}
            title="Avatar"
            alt="avatar"
          />
        </div>
      </header>
      <hr />

      {/* offcanvas */}
      <div className={`side-nav ${sideNav === false && `hidden`}`}>
        <button onClick={() => dispatch(closeMenu())}>
          <CloseIcon fontSize="medium" title="Close" />
        </button>
        <div className="mt-12">
          <p className="text-base font-bold py-4 hover:cursor-pointer">Collections</p>
          <p className="text-base font-bold py-4 hover:cursor-pointer" title="Men">Men</p>
          <p className="text-base font-bold py-4 hover:cursor-pointer" title="Woman">Women</p>
          <p className="text-base font-bold py-4 hover:cursor-pointer" title="About">About</p>
          <p className="text-base font-bold py-4 hover:cursor-pointer" title="Contact">Contact</p>
        </div>
      </div>
      <div id="offcanvas-background"></div>

      {/* Checkout modal */}
      <div className={`absolute top-20 left-cart flex items-start flex-col bg-white shadow-lg w-96 h-72 rounded-lg z-5 ${cart === false && "hidden"}`}>
        <h5 className="text-black font-bold py-4 px-8 text-left">Cart</h5>
        <hr className="relative w-full p-0 " />
        {cartItems === null ? (
          <div className="text-center mt-20 font-bold text-black">
            <p className="ml-20 text-2xl">Your cart is empty</p>
          </div>
        ) : (
          <div className="flex items-center flex-col gap-6 py-8 px-6">
            <div className="flex items-center justify-between gap-2">
              <img
                className="w-1/5 rounded-lg"
                src={thumb1}
                alt="Shoes"
              />
              <div>
                <p className="text-black text-base mb-2">Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {cartItems} &nbsp;
                  <span className="text-black font-bold">${125 * cartItems}.00</span>
                </p>
              </div>
              <button
                className="bin"
                title="Delete"
                onClick={() => dispatch(removeItems())}
              >
                <img src={bin} alt="bin" />
              </button>
            </div>
            <button className="bg-orange-400 text-white font-bold border-none rounded-md w-full p-4 hover:shadow-lg">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
