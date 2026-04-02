import * as yup from 'yup';
import { Formik } from 'formik';
import SignUpPagePhoto from '../../assets/SignUpPagePhoto.jpg';
import Button from '../../components/ReuseComponent/button.jsx'
import { NavLink } from 'react-router';

function SignUp() {
  return (
    <>
      <div className="flex justify-between items-center gap-6 my-20 px-10">
        <div className="w-3/5">
          <img className="w-full object-cover rounded-xl" src={SignUpPagePhoto} alt="Picture of the sign-up page" />
        </div>

        <div className="w-2/5 px-10">
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={yup.object({
              name: yup.string().required('Name is required').min(5,'Minimum 5 Characters Required'),
              email: yup.string().email('Invalid email').required('Email is required'),
              password: yup.string().min(6, 'Min 6 characters').required('Password is required'),
            })}
            onSubmit={(values) => {
              alert('Your Record is Saved');
              console.log(values);
            }}
          >
            {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <div className="my-4">
                  <h1 className="font-bold text-4xl my-4">Create an Account</h1>
                  <p className="text-lg">Enter your details below</p>
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="border-b border-b-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 p-2 w-full"
                    />
                    {touched.name && errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email or Phone Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="border-b border-b-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 p-2 w-full"
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="border-b border-b-red-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 p-2 w-full"
                    />
                    {touched.password && errors.password && (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    )}
                  </div>
                  <Button text={'Create Account'} className=" bg-red-500 hover:bg-red-700" />
                  <Button
                    text={'Sign up with Google'}
                    className="bg-gray-500 hover:bg-gray-700 text-black"
                  />
                  <p className="text-center">
                    Already have an Account?{' '}
                    <NavLink
                      to="/loginUser"
                      className="cursor-pointer underline underline-offset-6"
                    >
                      Log In
                    </NavLink>
                  </p>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default SignUp;
