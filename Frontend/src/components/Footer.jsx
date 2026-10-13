import React from 'react'
import { assets } from '../assets/frontend_assets copy/assets'

const Footer = () => {
    return (
        <div>

            {/* Footer Content */}
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* First Column */}
                <div>
                    <img
                        className='mb-5 w-32'
                        src={assets.logo}
                        alt='Logo'
                    />

                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s. When an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* Second Column */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>

                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* Third Column */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>

                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 9876543210</li>
                        <li>contact@example.com</li>
                    </ul>
                </div>

            </div>

            {/* Copyright - OUTSIDE GRID */}
            <div className='w-full border-t border-gray-200'>
                <p className='py-5 text-sm text-center text-gray-500'>
                    © 2026 Forever Ecommerce App. All Rights Reserved.
                </p>
            </div>

        </div>
    )
}

export default Footer