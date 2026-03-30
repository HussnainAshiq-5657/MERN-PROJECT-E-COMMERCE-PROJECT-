import Button from '../components/button/button';

function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center my-25 ">
        <h1 className="text-6xl font-bold">404 Not Found</h1>
        <p className="text-lg">Your visited page not found. You may go home page</p>
        <Button />
      </div>
    </>
  );
}

export default NotFound;
