'use client'

import ProductSlider from "./ProductSlider";

const demoLands = [
    { url: '/featureimg.jpg', title: "Vridavan", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },

    { url: "/land.jpg", title: "Kokilavan", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },

    { url: "/land1.jpg", title: "Semri", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },

    { url: "/land2.jpg", title: "Mathura", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },
]

const ProductCard = () => {
    return (
        <div className="pl-5">
            <ProductSlider lands={demoLands} />
        </div>
    )
}

export default ProductCard