import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import SignUp from './pages/SignUp.jsx';
import MainLayout from './layout/MainLayout';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/LoginUser.jsx';

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/loginUser" element={<Login />} />
          <Route path="/wishList" element={<About />} />
          <Route path="/cartOrder" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
