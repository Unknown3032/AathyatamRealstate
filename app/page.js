'use client'
import DemoCarousel from "@/components/Crausel";
import FeatureProduct from "@/components/FeatureProduct";
import ProductCard from "@/components/ProductCard";
import Teamtestonomials from "@/components/Teamtestonomials";

//animation
import FadeInRight from "@/common/FadeInRight";





export default function Home() {



  return (
    <div className="min-h-screen">
      {/* // crausel */}
      <div>
        <DemoCarousel />
      </div>

      {/* feature Product */}
      <div className="paddingX">
        <FadeInRight>
          <h1 className=' text-xl md:text-2xl font-inter py-4'>
            Featured Land
          </h1>
        </FadeInRight>

        <FeatureProduct />
      </div>

      {/* product image  */}
      <div className="paddingX pt-6 mt-4">
        <FadeInRight>
          <h1 className=' text-xl md:text-2xl font-inter py-4'>
            Latest Land
          </h1>
        </FadeInRight>
        <ProductCard />
      </div>

      {/* Team Testonomials  */}
      <div className="paddingX">
        <FadeInRight>
          <h1 className='paddingX text-xl md:text-2xl font-inter py-4'>
            Our Team
          </h1>
        </FadeInRight>

        <Teamtestonomials />
      </div>

    </div>
  );
}
