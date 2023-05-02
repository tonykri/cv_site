"use client"
import React from 'react'
import { useTheme } from "next-themes";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";

const ThemeBtn = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
        type='button'
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 px-2 py-2 lg:text-md rounded-lg'>
                <div className='flex text-white'><span className='mt-1'>{theme === 'dark'? <BsFillSunFill/> : <BsFillMoonFill/>}</span></div>
        </button>
    )
}

export default ThemeBtn
