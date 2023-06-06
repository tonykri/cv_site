'use client'

import { Button, Navbar } from "flowbite-react"
import { useState } from "react"
import { VscChromeClose } from "react-icons/vsc"
import Select from "react-select";

import './NavBarCompany.css'

export default function CompanyFilters(props: any) {
    const [minYears, setMinYears] = useState("0")
    const [selectedLanguage, setSelectedLanguage] = useState("all");
    const [certificates, setCertificates] = useState(false);

    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

    function handleApply() {
        props.setCertificates(certificates);
        props.setSelectedLanguage(selectedLanguage);
        props.setMinYears(minYears);
        props.searchAgain();
    }


    const languages = [
        { value: "all", label: "All" },
        { value: "English", label: "English" },
        { value: "Greek", label: "Greek" },
        { value: "French", label: "French" },
    ];
    const setLanguages = (selected: any) => {
        setSelectedLanguage(selected.value);
    };

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
                    Languages:
                        <Select
                        className="dark:text-red-900"
                            defaultValue={languages[0]}
                            onChange={setLanguages}
                            options={languages}
                        />
                    </label>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Experience (min): {minYears}
                        <input type="range" id="gradB" max={40} min={0} className={cssUnit} value={minYears} onChange={(e) => setMinYears(e.target.value)} />
                    </label>

                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Certifications:
                        <Button onClick={()=> setCertificates(!certificates)} color={certificates ? 'success' : 'gray'}>{certificates ? "Yes" : "No"}</Button>
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