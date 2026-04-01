import { FaCartShopping } from 'react-icons/fa6';
import { FiDollarSign } from 'react-icons/fi';
import { FaBagShopping } from 'react-icons/fa6';
import { RiMoneyEuroCircleFill } from 'react-icons/ri';

function SellerActivity() {
  const SellerService = [
    {
      id: 0,
      icon: <FaCartShopping />,
      title: '10.5k',
      description: 'Sellers active our site',
    },
    {
      id: 1,
      icon: <FiDollarSign />,
      title: '33k',
      description: 'Monthly Product Sale',
    },
    {
      id: 2,
      icon: <FaBagShopping />,
      title: '45.5k',
      description: 'Customer active in our site',
    },
    {
      id: 3,
      icon: <RiMoneyEuroCircleFill />,
      title: '25k',
      description: 'Annual gross sale in our site',
    },
  ];
  return (
    <>
      <div className="grid w-4/5 mx-auto my-25 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        {SellerService.map((services) => (
          <div
            key={services.id}
            className="border-2 border-gray-300 rounded-lg p-4 cursor-pointer hover:text-white hover:bg-red-500"
          >
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="bg-gray-400 p-4 rounded-full">
                <div className="bg-black hover:bg-white p-3 rounded-full">
                  <p className="text-white text-3xl cursor-pointer hover:text-black">
                    {services.icon}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h1 className="text-2xl font-bold">{services.title}</h1>
                <p className="text-lg">{services.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SellerActivity;
