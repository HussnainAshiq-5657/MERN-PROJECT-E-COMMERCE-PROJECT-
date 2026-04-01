import PlayStation from '../../Images/PlayStation.png';
import Women from '../../Images/Women.jpg';
import Speaker from '../../Images/Speaker.png';
import Gucci from '../../Images/Gucci.png';

function NewArrival() {
  return (
    <>
      <div className="w-4/5 mx-auto my-20 flex justify-center gap-10">
        {/* PlayStation */}
        <div className="w-1/2 bg-black text-white p-10 rounded-xl">
          <div
            className="bg-contain bg-center bg-no-repeat h-90 flex items-end"
            style={{ backgroundImage: `url(${PlayStation})` }}
          >
            <div className="flex flex-col gap-2 w-1/2 p-4">
              <h1 className="text-2xl font-bold">PlayStation 5</h1>
              <p className="text-sm text-justify">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="text-left underline underline-offset-8 cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-black p-6 text-white rounded-lg">
            <div
              className="bg-contain bg-right bg-no-repeat h-40 flex items-end"
              style={{ backgroundImage: `url(${Women})` }}
            >
              <div className="flex flex-col gap-2 w-3/4 p-4 ">
                <h1 className="text-2xl font-bold">Women’s Collections</h1>
                <p className="text-sm text-justify">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="text-left underline underline-offset-8  cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="bg-black p-6 text-white rounded-lg">
              <div
                className="bg-contain bg-right bg-no-repeat h-40 flex items-end"
                style={{ backgroundImage: `url(${Speaker})` }}
              >
                <div className="flex flex-col gap-2 w-3/4 p-4 ">
                  <h1 className="text-2xl font-bold">Speakers</h1>
                  <p className="text-sm text-justify">Amazon wireless speakers</p>
                  <button className="text-left underline underline-offset-8  cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-black p-6 text-white rounded-lg">
              <div
                className="bg-contain bg-right bg-no-repeat h-40 flex items-end"
                style={{ backgroundImage: `url(${Gucci})` }}
              >
                <div className="flex flex-col gap-2 w-3/4 p-4 ">
                  <h1 className="text-2xl font-bold">Perfume</h1>
                  <p className="text-sm text-justify">GUCCI INTENSE OUD EDP</p>
                  <button className="text-left underline underline-offset-8  cursor-pointer">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
