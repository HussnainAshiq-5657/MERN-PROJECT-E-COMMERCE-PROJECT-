import { MdLocalShipping } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaMoneyCheck } from 'react-icons/fa6';

function Services() {
  const AboutServices = [
    {
      id: 0,
      icon: <MdLocalShipping />,
      title: 'Fast and Free Delivery',
      description: 'Free delivery for all orders over $140',
    },
    {
      id: 1,
      icon: <RiCustomerService2Fill />,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
    },
    {
      id: 2,
      icon: <FaMoneyCheck />,
      title: 'MONEY BACK GUARANTEE',
      description: 'We return money within 30 days',
    },
  ];
  return (
    <>
      <div className="flex justify-center gap-20 my-20">
        {AboutServices.map((services) => (
          <div key={services.id}>
            <div className="flex justify-center items-center">
              <div className="bg-gray-300 p-3 rounded-full">
                <div className="bg-black p-3 rounded-full">
                  <span className="text-white text-2xl cursor-pointer">{services.icon}</span>
                </div>
              </div>
            </div>

            <h3 className="text-center font-bold text-lg mt-2">{services.title}</h3>
            <p className="text-center">{services.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
