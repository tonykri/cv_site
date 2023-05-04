'use client'

import { Button, Navbar } from "flowbite-react"
import { useState } from "react"
import { VscChromeClose } from "react-icons/vsc"

import './NavBarUniversity.css'

export default function UniversityFilters(props: any) {
    const [industry, setIndustry] = useState('All')

    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className="mt-2"
            >
                <Navbar.Brand className="CloseFiltersBtn">
                    <div>
                        <VscChromeClose onClick={() => props.setShowFilters(false)} />
                    </div>
                </Navbar.Brand>
                <div className="flex">
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Indurstry:
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" selected onClick={(e) => setIndustry("All")}>All</option>
                            <option value="" onClick={(e) => setIndustry("Technology")}>Technology</option>
                            <option value="" onClick={(e) => setIndustry("Telecommunications")}>Telecommunications</option>
                            <option value="" onClick={(e) => setIndustry("Healthcare")}>Healthcare</option>
                            <option value="" onClick={(e) => setIndustry("Pharmaceuticals")}>Pharmaceuticals</option>
                            <option value="" onClick={(e) => setIndustry("Retail")}>Retail</option>
                            <option value="" onClick={(e) => setIndustry("Finance")}>Finance</option>
                            <option value="" onClick={(e) => setIndustry("Energy")}>Energy</option>
                            <option value="" onClick={(e) => setIndustry("Construction")}>Construction</option>
                            <option value="" onClick={(e) => setIndustry("Education")}>Education</option>
                            <option value="" onClick={(e) => setIndustry("Transportation")}>Transportation</option>
                            <option value="" onClick={(e) => setIndustry("Media and Entertainment")}>Media and Entertainment</option>
                            <option value="" onClick={(e) => setIndustry("Food and Beverage")}>Food and Beverage</option>
                            <option value="" onClick={(e) => setIndustry("Marketing and Advertising")}>Marketing and Advertising</option>
                            <option value="" onClick={(e) => setIndustry("Real Estate")}>Real Estate</option>
                            <option value="" onClick={(e) => setIndustry("Architecture and Design")}>Architecture and Design</option>
                            <option value="" onClick={(e) => setIndustry("Manufacturing")}>Manufacturing</option>
                            <option value="" onClick={(e) => setIndustry("Beauty and Personal Care")}>Beauty and Personal Care</option>
                            <option value="" onClick={(e) => setIndustry("Travel and Tourism")}>Travel and Tourism</option>
                            <option value="" onClick={(e) => setIndustry("Aerospace")}>Aerospace</option>
                            <option value="" onClick={(e) => setIndustry("Hospitality")}>Hospitality</option>
                            <option value="" onClick={(e) => setIndustry("Insurance")}>Insurance</option>
                            <option value="" onClick={(e) => setIndustry("Consulting")}>Consulting</option>
                        </select>
                    </label>

                    <div className="mt-2 lg:mt-4">
                        <Button
                            outline={true}
                            gradientDuoTone="cyanToBlue"
                        >
                            Apply
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}