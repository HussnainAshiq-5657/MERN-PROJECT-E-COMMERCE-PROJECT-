import { useState } from 'react';
import { NavLink } from 'react-router';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiCrossedBones } from 'react-icons/gi';
import DeskTopMenu from './DeskTopMenu';
import MobileMenu from './MobileMenu';

function Header() {
  const [open, setOpen] = useState();
  return (
    <>
      <header className="bg-gray-200 shadow-2xs shadow-gray-400">
        <div className="flex justify-between items-center p-2">
          <NavLink to="/">
            <h1 className="text-2xl font-bold">Baroque</h1>
          </NavLink>
          <DeskTopMenu />
          <div className="md:hidden flex items-center">
            <button className="text-2xl font-bold" onClick={()=>setOpen(!open)}>
              {open ? <GiCrossedBones className='text-red-500' /> : <GiHamburgerMenu className='text-blue-500' />}
            </button>
          </div>
        </div>
        {open && <MobileMenu setOpen={setOpen} />}
      </header>
    </>
  );
}

export default Header;
