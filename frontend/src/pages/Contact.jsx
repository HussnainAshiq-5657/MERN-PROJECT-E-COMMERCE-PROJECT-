import { Formik } from 'formik';
import * as yup from 'yup';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import Button from '../components/ReuseComponent/button.jsx';

function Contact() {
  return (
    <>
      <div className="flex flex-row gap-10 justify-between w-4/5 mx-auto my-20">
        <div className="bg-white shadow-2xs shadow-gray-300 rounded-lg p-10 border-2 border-gray-300 w-2/5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-color rounded-full p-2">
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
              <div className="bg-color rounded-full p-2">
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
        <div className="w-full px-8 py-6 border-2 border-gray-300 rounded-lg">
          <Formik
            initialValues={{
              FullName: '',
              Email: '',
              Number: '',
              Message: '',
            }}
            validationSchema={yup.object({
              FullName: yup
                .string()
                .required('Full Name is Required')
                .min(6, 'FullName Must be at Least 6 Characters')
                .max(20, 'FullName Must be at Most 20 Character.'),
              Email: yup.string().required('Email is Required').email('Invalid Email Address'),
              Number: yup
                .string()
                .required('Phone Number is Required')
                .matches(/^[0-9]+$/, 'Phone Number must be only Digits.')
                .max(11, 'Phone Number Must be at Least 11 Digits.'),
              Message: yup
                .string()
                .required('Message is Required')
                .min(10, 'Message Must be at Least 10 Characters.')
                .max(300, 'Message Must be at Most 300 Characters.'),
            })}
            onSubmit={(values) => {
              alert('Your Record is Saved');
            }}
          >
            {({ values, errors, touched, handleSubmit, handleBlur, handleChange }) => (
              <div>
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-6 ">
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="FullName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.FullName}
                        className="outline-none border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-none"
                      />
                      {touched.FullName && errors.FullName && (
                        <p className="text-red-500 text-sm mt-1">{errors.FullName}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Email"
                        name="Email"
                        value={values.Email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="outline-none border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-none"
                      />
                      {touched.Email && errors.Email && (
                        <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Phone Number"
                        name="Number"
                        value={values.Number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="outline-none border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-red-500 focus:border-none"
                      />
                      {touched.Number && errors.Number && (
                        <p className="text-red-500 text-sm mt-1">{errors.Number}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="Message"
                      rows={8}
                      cols={91}
                      value={values.Message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Message"
                      className="outline-none border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-none p-4"
                    ></textarea>
                    {touched.Message && errors.Message && (
                      <p className="text-red-500 text-sm mt-1">{errors.Message}</p>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <Button text={'Send Message'} className="bg-color" />
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
