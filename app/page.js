import DemoCarousel from "@/components/Crausel";
import FeatureProduct from "@/components/FeatureProduct";
import ProductCard from "@/components/ProductCard";



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
      <div>
        <ProductCard />
      </div>

    </div>
  );
}
