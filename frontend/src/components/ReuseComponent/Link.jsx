import { NavLink } from 'react-router';

function Link({to,text,className}) {
  return (
    <>
      <div className='flex justify-center mt-10 mb-5'>
        <NavLink
          to={to}
          className={`font-semibold w-fit bg-color px-4 py-2 text-white rounded-2xl ${className}`}
        >
          {text}
        </NavLink>
      </div>
    </>
  );
}

export default Link;
