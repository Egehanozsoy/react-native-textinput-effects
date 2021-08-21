import React from 'react'
import COLORS from '../constants/COLORS'

const HomeFeature = ({
    className,
    topText,
    title,
    description,
    buttonText,
    onPress
}) => {
    return (
        <div className={`${className} `}>
            <text style={{color:COLORS.cyan}} className="text-base font-semibold">{topText}</text>
            <text className="text-center text-2xl font-extrabold tracking-tight sm:text-2xl lg:text-4xl">{title}</text>
            <text className='text-center lg:w-3/4 sm:w-full text-gray-500 font-normal mt-5'>{description}</text>
            <a style={{backgroundColor:COLORS.cyan}} href="/Borrower" className='text-center px-5 py-3 rounded  lg:w-4/12 text-white font-normal mt-5'>{buttonText}</a>
        </div>
    )
}

export default HomeFeature
