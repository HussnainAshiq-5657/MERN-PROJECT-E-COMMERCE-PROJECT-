import * as yup from 'yup';
import { Formik } from 'formik';
import SignUpPagePhoto from '../assets/SignUp Page Photo.jpg';
import Button from '../components/button/button.jsx';
import { NavLink } from 'react-router';

function Login() {
  return (
    <>
      <div className="flex justify-between items-center gap-6 my-20 px-10">
        <div className="w-3/5">
          <img className="w-full h-full object-cover rounded-xl" src={SignUpPagePhoto} alt="" />
        </div>

        <div className="w-2/5 px-10">
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={yup.object({
              name: yup.string().required('Name is required'),
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
                  <h1 className="font-bold text-2xl">Log in to Exclusive</h1>
                  <p className="text-md">Enter your details below</p>
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email or Phone Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="border-b border-b-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 p-2 w-full"
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
                      className="border-b border-b-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 p-2 w-full"
                    />
                    {touched.password && errors.password && (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <NavLink
                      to="/signUp"
                      className="bg-red-500 text-white py-2 font-bold cursor-pointer px-4 rounded-lg"
                    >
                      Log In
                    </NavLink>
                    <p className="text-red-500">Forgot Password?</p>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Login;
