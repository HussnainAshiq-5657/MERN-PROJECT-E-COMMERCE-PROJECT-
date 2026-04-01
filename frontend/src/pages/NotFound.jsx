import { NavLink } from 'react-router';

function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center my-25 ">
        <h1 className="text-6xl font-bold">404 Not Found</h1>
        <p className="text-lg">Your visited page not found. You may go home page</p>
        <NavLink
          to="/"
          className=" text-white bg-red-500 hover:bg-red-700 px-8 py-3 rounded-xl cursor-pointer font-bold transition duration-150 delay-100 ease-in-out"
        >
          Go Back To Home Page
        </NavLink>
      </div>
    </>
  );
}

export default NotFound;
