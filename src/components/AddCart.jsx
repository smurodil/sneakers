import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addItems } from "../features/cart/cartSlice";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import basket from "../images/icon-cart.svg";

function AddCart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center justify-around bg-slate-100 w-40 h-14 rounded-lg">
        <button
          className="btn btn-warning"
          onClick={() => dispatch(decrement())}
          disabled={items === 0 || (items < 0 && true)}
        >
          <RemoveOutlinedIcon />
        </button>
        <span className="text-base font-bold">{items}</span>
        <button className="btn btn-warning" onClick={() => dispatch(increment())}>
          <AddOutlinedIcon />
        </button>
      </div>
      <button
        className="flex items-center justify-center gap-2 bg-orange-400 text-white font-base font-bold w-80 h-14 rounded-lg border-none hover:cursor-pointer hover:shadow-xl"
        onClick={() => dispatch(addItems())}
        title="Add to cart"
        disabled={items === 0 || (items < 0 && true)}
      >
        <img className="" src={basket} alt="basket" />
        Add to cart
      </button>
    </div>
  );
}

export default AddCart;
