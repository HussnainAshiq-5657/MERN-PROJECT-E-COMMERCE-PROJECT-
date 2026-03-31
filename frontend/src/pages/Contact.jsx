import { Formik } from 'formik';
import * as yup from 'yup';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import Button from '../components/button/button';

function Contact() {
  return (
    <>
      <div className="flex flex-row gap-10 justify-between w-4/5 mx-auto my-20">
        <div className="bg-white shadow-2xs shadow-gray-300 rounded-lg p-10 border-2 w-2/5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 rounded-full p-2">
                <IoCallOutline className="text-white text-xl cursor-pointer" />
              </div>
              <h1 className="font-semibold text-lg">Call To Us</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
          </div>
          <hr className="w-full my-5 h-0.5 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 border-0" />
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 rounded-full p-2">
                <MdOutlineEmail className="text-white text-xl cursor-pointer" />
              </div>
              <h1 className="font-semibold text-lg">Write To Us</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
        <div className="w-full p-6 border-2 rounded-lg">
          <Formik
            initialValues={{
              FullName: '',
              Email: '',
              Number: '',
            }}
            validateSchema={yup.object({})}
            onSubmit={(values) => {
              alert('Your Record is Saved');
            }}
          >
            {({ values, error, touched, handleSubmit, handleBlur, handleChange }) => (
              <div>
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-10 ">
                  <div className="grid grid-cols-3 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="FullName"
                      className="outline-none border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-none"
                    />
                    <input
                      type="text"
                      placeholder="Your Email"
                      name="Email"
                      className="outline-none border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-none"
                    />
                    <input
                      type="text"
                      placeholder="Your Phone Number"
                      name="Number"
                      className="outline-none border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-none"
                    />
                  </div>
                  <textarea
                    name="Message"
                    rows={8}
                    id=""
                    placeholder="Your Message"
                    className="outline-none border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-none"
                  ></textarea>
                  <div className="flex justify-end">
                    <Button text={'Send Message'} className="bg-red-500 hover:bg-red-700" />
                  </div>
                </form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Contact;
