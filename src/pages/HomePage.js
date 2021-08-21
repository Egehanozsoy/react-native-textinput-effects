import React from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeFeature, LeftArrow, Navbar, RightArrow, SaleRollLogo } from '../components'
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


            <div className="min-h-full flex-1 flex flex-col">
                <div>
                    <h4 className="mt-10  mx-auto text-center  text-2xl sm:text-3xl  lg:text-5xl ">
                        Connecting qualified borrowers with real estate lenders.
                    </h4>
                    <h2 style={{ color: COLORS.cyan }} className="mx-auto text-center text-base p-5   lg:text-xl ">
                        Funding real estate investment without traditional banks, and doing it all online.
                    </h2>
                </div>

                <div className="mt-5 flex-1  flex flex-col justify-between  items-baseline">
                    <div className="flex-1 -mb-28  self-center hidden md:hidden sm:hidden lg:flex  justify-center mt-5  flex-col sm:flex-row">
                        <img className="  mb-5" src='images/leftarrow.png' />
                        <SaleRollLogo className="self-end " black />
                        <img className="  mb-5" src='images/rightarrow.png' />
                    </div>

                    <div className="  flex flex-1 justify-around mt-5 items-center flex-col sm:flex-row">
                        <div className="flex flex-col  self-center  items-center md:w-1/6 lg:w-1/6 sm:w-5/6  sm:mt-5 lg:-mt-96">
                            <text className="text-xl font-semibold">Lenders</text>
                            <text className="text-base font-normal text-center text-gray-500">Lenders pick a qualified borrower based on their property and investment needs.</text>
                        </div>
                        <div className="flex flex-col mt-5 items-center  md:w-2/6 lg:w-2/6 sm:w-5/6">
                            <text className="text-xl font-semibold">Marketplace</text>
                            <text className="text-base text-center font-normal  text-gray-500">We analyze borrowers, match them with qualified lenders, and facilitate the entire transaction online.</text>
                        </div>
                        <div className="flex flex-col self-center  items-center md:w-1/6 lg:w-1/6 sm:w-5/6  sm:mt-5 lg:-mt-96">
                            <text className="text-xl font-semibold">Borrowers</text>
                            <text className="text-base text-center font-normal text-gray-500">Borrowers share basic information about their investment needs</text>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex-1 bg-gray-200 items-center justify-around flex lg:flex-row md:flex-row flex-col ">
                <HomeFeature className="flex flex-col items-center lg:w-2/4 md:w-8/12 sm:w-8/12" buttonText='Learn About Investing' topText='FOR LENDERS' title='Invest in real estate' description='See a list of borrowers in your area looking to make a deal. Send an anonymous message to get the conversation started. Close on your deals quickly and manage the entire process online.' />
                <HomeFeature className="flex flex-col items-center lg:w-2/4 md:w-8/12 sm:w-8/12" buttonText='Learn About Funding' topText='FOR BORROWERS' title='Fund your investment' description='We’ll connect you with a reliable local lender to fund your flip or investment property. Close on your deals quicker than a bank loan. Manage your deal online from start to finish for free.' />

            </div>
        </div>
    )

}

export default HomePage;