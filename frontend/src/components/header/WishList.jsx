import { CiHeart } from 'react-icons/ci';
import { NavLink } from 'react-router';

function WishList() {
  return (
    <>
      <div>
        <NavLink to="/wishList">
          <CiHeart className="text-2xl font-semibold cursor-pointer" />
        </NavLink>
      </div>
    </>
  );
}

export default WishList;
