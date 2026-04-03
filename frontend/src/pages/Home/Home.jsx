import Services from '../About Page/Services.jsx';
import BestSellingProducts from './BestSellingProducts.jsx';
import CategorySection from './CategorySection.jsx';
import ExploreProducts from './ExploreProducts.jsx';
import NewArrival from './NewArrival.jsx';

function Home() {
  return (
    <>
      <CategorySection />
      <BestSellingProducts />
      <ExploreProducts />
      <NewArrival />
      <Services />
    </>
  );
}

export default Home;
