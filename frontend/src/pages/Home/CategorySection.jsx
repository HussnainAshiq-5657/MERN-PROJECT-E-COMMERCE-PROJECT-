import { CiMobile3 } from 'react-icons/ci';
import { FaComputer, FaHeadphones } from 'react-icons/fa6';
import { MdOutlineWatch } from 'react-icons/md';
import { CiCamera } from 'react-icons/ci';
import { FaGamepad } from 'react-icons/fa6';
import Arrival from '../../components/ReuseComponent/Arrival';

function CategorySection() {
  const categories = [
    { id: 0, name: 'Phones', icon: <CiMobile3 /> },
    { id: 1, name: 'Computers', icon: <FaComputer /> },
    { id: 2, name: 'SmartWatch', icon: <MdOutlineWatch /> },
    { id: 3, name: 'Camera', icon: <CiCamera /> },
    { id: 4, name: 'Headphones', icon: <FaHeadphones /> },
    { id: 5, name: 'Gaming', icon: <FaGamepad /> },
  ];
  return (
    <>
      <Arrival text={"Categories"} category={"Browse By Category"} className="mt-10" />
      <div className="w-4/5 mx-auto flex flex-wrap gap-8 my-10 justify-between">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center gap-4 w-40 p-8 bg-white rounded-2xl text-gray-700 not-first-of-type:border border-gray-200 shadow-sm category hover:text-white hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="text-4xl">{category.icon}</div>

            <p className="text-md font-medium  text-center">{category.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategorySection;
