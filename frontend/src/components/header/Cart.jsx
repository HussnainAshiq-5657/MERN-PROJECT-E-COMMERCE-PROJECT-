import { FaCartArrowDown } from 'react-icons/fa';
import { NavLink } from 'react-router';

function Cart() {
  return (
    <>
      <div className="relative">
        <NavLink to="/cartOrder">
          <FaCartArrowDown className="text-2xl font-semibold cursor-pointer" />
          <span className="text-red-500 font-bold text-xl absolute -top-3.5 left-4">0</span>
        </NavLink>
      </div>
    </>
  );
}

export default Cart;
