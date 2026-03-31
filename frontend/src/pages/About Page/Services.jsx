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
      <div className="flex justify-center gap-12 my-15">
        {AboutServices.map((services) => (
          <div key={services.id}>
            <div>{services.icon}</div>
            <h3>{services.title}</h3>
            <p>{services.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
