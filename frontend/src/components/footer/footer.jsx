import { FaArrowRight } from 'react-icons/fa6';
import { QRCodeCanvas } from 'qrcode.react';
import { TiSocialFacebook } from 'react-icons/ti';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black p-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold'>Exclusive</h1>
          <h2>
            <a href="">Subscribe</a>
          </h2>
          <p>Get 10% off your first order</p>

          <div className="relative">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border border-white px-2 py-1 rounded-md"
            />
            <FaArrowRight className="absolute bottom-2 left-42 text-lg" />
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold'>Support</h1>
          <p>111 Bijoy sarani, Dhaka</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold'>Account</h1>
          <h3>
            <a href="">My Account</a>
          </h3>
          <h3>
            <a href="">Login / Register</a>
          </h3>
          <h3>
            <a href="">Cart</a>
          </h3>
          <h3>
            <a href="">WishList</a>
          </h3>
          <h3>
            <a href="">Shop</a>
          </h3>
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold'>Quick Link</h1>
          <h3>
            <a href="">Privacy Policy</a>
          </h3>
          <h3>
            <a href="">Terms of Use</a>
          </h3>
          <h3>
            <a href="">FAQ</a>
          </h3>
          <h3>
            <a href="">Contact</a>
          </h3>
        </div>

        <div className='flex flex-col gap-3'>
          <h1 className='text-xl font-bold'>Download App</h1>
          <p>Save $3 with App New User Only</p>

          <div>
            <QRCodeCanvas value="Hello Hussnain" size={130} />
          </div>

          <div className="flex gap-4 mt-3 text-xl">
            <a href="">
              <TiSocialFacebook />
            </a>
            <a href="">
              <CiTwitter />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
