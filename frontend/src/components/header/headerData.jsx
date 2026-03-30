import { NavLink } from 'react-router';

function HeaderData() {
  const MenuItem = [
    { id: 0, link: '/', name: 'Home' },
    { id: 1, link: '/about', name: 'About' },
    { id: 2, link: '/contact', name: 'Contact' },
    { id: 3, link: '/signUp', name: 'SignUp' },
  ];
  return (
    <>
      <ul className="md:flex gap-2">
        {MenuItem.map((items) => (
          <li
          key={items.id}>
            <NavLink
              to={items.link}
              className={({ isActive }) =>
                `px-4 py-2 text-lg  ${isActive ? 'text-black font-semibold underline underline-offset-6' : 'text-gray-500 hover:underline hover:underline-offset-6'}`
              }
            >
              {items.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HeaderData;
