import React from 'react'
import SaleRollLogo  from './SaleRollLogo'

const Navbar = () => {

    const navigation = [
        { name: 'For Borrowers', href: '/Borrower' },
        { name: 'For Lenders', href: '/Lender' },

    ]


    return (
        <div className="flex justify-between sm:justify-start items-center   ">
            <div className="flex justify-between z-20 sm:justify-end">
                <SaleRollLogo/>
            </div>

            {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-base z-10 font-medium text-white hover:text ml-5">
                    {item.name}
                </a>
            ))}

            <a
                href="/Login"
                className="  px-4 py-2 z-40 ml-5   rounded-md text-base font-medium text-white bg-blue-400 "
            >
                Log in
            </a>

        </div>
    )
}

export default Navbar
