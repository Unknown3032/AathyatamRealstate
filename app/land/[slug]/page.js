import React from 'react'

const Land = ({ params }) => {
    const { slug } = params
    return (
        <div className='min-h-screen md:mt-24'>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/land.jpg" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>

                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>

                            <div className="flex py-20">
                                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                <button className="flex ml-auto bg-black text-white rounded-md border-0 py-2 px-8 focus:outline-none hover:btn-light ">Button</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Land