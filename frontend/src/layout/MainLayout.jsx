import Header from '../components/header/header.jsx';
import { Outlet } from 'react-router';
import Footer from '../components/footer/footer.jsx';

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
