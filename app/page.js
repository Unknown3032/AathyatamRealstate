import DemoCarousel from "@/components/Crausel";
import FeatureProduct from "@/components/FeatureProduct";
import ProductCard from "@/components/ProductCard";
import Teamtestonomials from "@/components/Teamtestonomials";



export default function Home() {
  return (
    <div className="min-h-screen">
      {/* // crausel */}
      <div>
        <DemoCarousel />
      </div>

      {/* feature Product */}
      <div>
        <h1 className='paddingX text-xl md:text-2xl font-inter py-4'>
          Featured Land
        </h1>
        <FeatureProduct />
      </div>

      {/* product image  */}
      <div className="paddingX">
        <h1 className=' text-xl md:text-2xl font-inter pt-10 pb-4'>
          Latest Land
        </h1>
        <ProductCard />
      </div>

      {/* Team Testonomials  */}
      <div className="paddingX">
        <h1 className=' text-xl md:text-2xl font-inter pt-10 pb-4'>
          Our Team
        </h1>
        <Teamtestonomials />
      </div>

    </div>
  );
}
