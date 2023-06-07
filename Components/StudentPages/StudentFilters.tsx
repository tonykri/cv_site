'use client'

import { Button, Dropdown, Navbar } from "flowbite-react"
import { useState } from "react"
import { VscChromeClose } from "react-icons/vsc"
import Select from "react-select";

import './NavBarStudent.css'

export default function StudentFilters(props: any) {
    const [maxYears, setMaxYears] = useState("20")
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [selectedIndustry, setSelectedIndustry] = useState("All");


    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

    function handleApply() {
        props.setIndustry(selectedIndustry);
        props.setLanguages(selectedLanguage);
        props.setMaxYears(maxYears);
        props.searchAgain();
    }


    const languages = [
        { value: "All", label: "All" },
        { value: "English", label: "English" },
        { value: "Greek", label: "Greek" },
        { value: "French", label: "French" },
    ];
    const setLanguages = (selected: any) => {
        setSelectedLanguage(selected.value);
    };

    const industries = [
        { value: "All", label: "All" },
        { value: "Technology", label: "Technology" },
        { value: "Telecommunications", label: "Telecommunications" },
        { value: "Healthcare", label: "Healthcare" },
        { value: "Pharmaceuticals", label: "Pharmaceuticals" },
        { value: "Retail", label: "Retail" },
        { value: "Finance", label: "Finance" },
        { value: "Energy", label: "Energy" },
        { value: "Economics", label: "Economics" },
        { value: "Construction", label: "Construction" },
        { value: "Education", label: "Education" },
        { value: "Transportation", label: "Transportation" },
        { value: "Media_and_Entertainment", label: "Media and Entertainment" },
        { value: "Food_and_Beverage", label: "Food and Beverage" },
        { value: "Marketing_and_Advertising", label: "Marketing and Advertising" },
        { value: "Real_Estate", label: "Real Estate" },
        { value: "Architecture_and_Design", label: "Architecture and Design" },
        { value: "Manufacturing", label: "Manufacturing" },
        { value: "Beauty_and_Personal_Care", label: "Beauty and Personal Care" },
        { value: "Travel_and_Tourism", label: "Travel and Tourism" },
        { value: "Aerospace", label: "Aerospace" },
        { value: "Hospitality", label: "Hospitality" },
        { value: "Insurance", label: "Insurance" },
        { value: "Consulting", label: "Consulting" }
    ]
    const setIndustry = (selected: any) => {
        setSelectedIndustry(selected.value);
    };

    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className="mt-2"
            >

                <div className="flex">
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Languages:
                        <Dropdown
                            label={selectedLanguage}
                            dismissOnClick={true}
                            color={'gray'}
                        >
                            {languages.map((language) => (<Dropdown.Item onClick={() => setLanguages(language)}>
                                {language.label}
                            </Dropdown.Item>))}
                        </Dropdown>
                    </label>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Experience (max): {maxYears}
                        <input type="range" id="gradB" max={40} min={0} className={cssUnit} value={maxYears} onChange={(e) => setMaxYears(e.target.value)} />
                    </label>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Industry:
                        <Dropdown
                            label={selectedIndustry}
                            dismissOnClick={true}
                            color={'gray'}
                        >
                            {industries.map((industry) => (<Dropdown.Item onClick={() => setIndustry(industry)}>
                                {industry.label}
                            </Dropdown.Item>))}
                        </Dropdown>
                    </label>

                    <div className="mt-2 lg:mt-4">
                        <Button
                            outline={true}
                            gradientDuoTone="cyanToBlue"
                            onClick={handleApply}
                        >
                            Apply
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}