import Services from './Services';
import WomenPhoto from '../../assets/Women.jpg';
function About() {
  const SellerActivity = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  return (
    <>
      {/* Photos and Description */}
      <div className="flex justify-between items-center gap-20 px-20 py-6 my-12">
        <div className="flex flex-col gap-6 w-3/4">
          <h1 className="text-5xl font-bold">Our Story</h1>
          <p className="text-gray-800 text-lg text-justify">
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an
            active presense in Bangladesh. Supported by wide range of tailored marketing, data and
            service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
            customers across the region.{' '}
          </p>
          <p className="text-gray-800 text-lg text-justify">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive
            offers a diverse assotment in categories ranging from consumer.
          </p>
        </div>
        <div className="w-full">
          <img
            src={WomenPhoto}
            alt="Picture of Women in About Page"
            className="rounded-lg w-full"
          />
        </div>
      </div>
      {/* Summary of Services */}
      <Services />
    </>
  );
}

export default About;
