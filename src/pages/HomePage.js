import React from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LeftArrow, Navbar, RightArrow, SaleRollLogo } from '../components'
import bg from '../assets/images/banner.png'
import COLORS from '../constants/COLORS'


function HomePage() {
    return (
        <div className="flex flex-1 bg-blue-700 flex-col" style={{ height: '100vh' }}>
            <div className="flex-col flex flex-1 min-h-screen  bg-no-repeat  transform py-5 px-5 resize bg-cover " style={{ backgroundImage: `url(${bg})` }}>
                <Navbar />
                <div className="relative flex flex-col min-h-full w-5/6 self-center justify-center  px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 z-10">
                    <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-5xl lg:text-8xl">
                        <span className="block text-white">Join the real estate investing marketplace.</span>

                    </h1>
                    <h2 className="mt-6 max-w-lg mx-auto text-center text-2xl  text-indigo-200 lg:text-5xl sm:max-w-5xl">
                        Invest in real estate, without the middlemen.
                        Find a lender and ditch the traditional loan.
                    </h2>

                </div>

                <div style={{ backgroundColor: '#164E63' }} className="absolute inset-0 opacity-80 mix-blend-multiply min-h-screen" />
            </div>
            <div className="min-h-screen flex-1 flex flex-col">
                <div>
                    <h4 className="mt-10  mx-auto text-center  text-2xl sm:text-3xl  lg:text-5xl ">
                        Connecting qualified borrowers with real estate lenders.
                    </h4>
                    <h2 style={{ color: COLORS.cyan }} className="mx-auto text-center text-base p-5   lg:text-xl ">
                        Funding real estate investment without traditional banks, and doing it all online.
                    </h2>
                </div>



                <div className="mt-5  flex flex-col justify-between  items-baseline">

                    <div className=" flex flex-1 justify-aroundd mt-5 px-5 py-5 flex-col sm:flex-row">
                        <div className="flex flex-col">
                            <text className="text-3xl mt-10 sm:text-3xl text-center">Lenders</text>
                            <text className="text-base sm:text-xl max-w-xl  text-center text-gray-500">Lenders pick a qualified borrower based on their property and investment needs.</text>
                        </div>
                        <div className="flex flex-col mt-10 ">
                            <text className="text-3xl sm:text-3xl text-center">Marketplace</text>
                            <text className="text-base sm:text-xl max-w-xl  text-center text-gray-500">We analyze borrowers, match them with qualified lenders, and facilitate the entire transaction online.</text>
                        </div>
                        <div className="flex flex-col mt-10 ">
                            <text className="text-3xl sm:text-3xl text-center">Borrowers</text>
                            <text className="text-base sm:text-xl max-w-xl text-center text-gray-500">Borrowers share basic information about their investment needs</text>
                        </div>

                    </div>

                    <SaleRollLogo className="self-center mt-20" black />

                </div>
            </div>

            <div className="min-h-screen flex-1 flex flex-col">
                <div>
                    <h4 className="mt-10  mx-auto text-center  text-2xl sm:text-3xl  lg:text-5xl ">
                        Connecting qualified borrowers with real estate lenders.
                    </h4>
                    <h2 style={{ color: COLORS.cyan }} className="mx-auto text-center text-base p-5   lg:text-xl ">
                        Funding real estate investment without traditional banks, and doing it all online.
                    </h2>
                </div>



                <div className="mt-5  flex flex-col justify-between  items-baseline">

                    <div className=" flex flex-1 justify-aroundd mt-5 px-5 py-5 flex-col sm:flex-row">
                        <div className="flex flex-col">
                            <text className="text-3xl mt-10 sm:text-3xl text-center">Lenders</text>
                            <text className="text-base sm:text-xl max-w-xl  text-center text-gray-500">Lenders pick a qualified borrower based on their property and investment needs.</text>
                        </div>
                        <div className="flex flex-col mt-10 ">
                            <text className="text-3xl sm:text-3xl text-center">Marketplace</text>
                            <text className="text-base sm:text-xl max-w-xl  text-center text-gray-500">We analyze borrowers, match them with qualified lenders, and facilitate the entire transaction online.</text>
                        </div>
                        <div className="flex flex-col mt-10 ">
                            <text className="text-3xl sm:text-3xl text-center">Borrowers</text>
                            <text className="text-base sm:text-xl max-w-xl text-center text-gray-500">Borrowers share basic information about their investment needs</text>
                        </div>

                    </div>

                    <SaleRollLogo className="self-center mt-20" black />

                </div>
            </div>
        </div>
    )

}

export default HomePage;