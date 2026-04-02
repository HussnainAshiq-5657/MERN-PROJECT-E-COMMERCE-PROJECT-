import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

function Arrival({ text, category, className }) {
  return (
    <>
      <div className={`w-4/5 mx-auto flex justify-between items-end ${className}`}>
        <div className="flex flex-col gap-2">
          <p className="text-primary font-bold text-md">{text}</p>
          <h1 className="text-2xl font-bold">{category}</h1>
        </div>
        <div className="flex gap-2">
          <div className="bg-gray-200 p-2 rounded-full">
            <FaArrowLeft className="text-md cursor-pointer" />
          </div>
          <div className="bg-gray-200 p-2 rounded-full">
            <FaArrowRight className="text-md cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Arrival;
