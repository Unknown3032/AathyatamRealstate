'use client'
import ProductCards from '@/components/ProductCards'
import SideNavbarProduct from '@/components/SideNavbarProduct'
import React, { useState } from 'react'

const Page = () => {

    const [sidenavBar, setSidenavBar] = useState(false)

    return (
        <div className='min-h-screen flex w-full '>

            <div className='md:w-72 bg-white'>
                <SideNavbarProduct sidenavBar={sidenavBar} setSidenavBar={setSidenavBar} />
            </div>

            <div className='w-full  md:mt-7'>
                <ProductCards sidenavBar={sidenavBar} setSidenavBar={setSidenavBar} />
            </div>
        </div>
    )
}

export default Page
