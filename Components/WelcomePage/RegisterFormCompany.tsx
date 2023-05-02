'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterFormCompany(props: any) {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [VAT, setVAT] = useState("");
    const [industry, setIndustry] = useState("Technology");


    const [wrongCredentials, setWrongCredentials] = useState(false);

    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
    const router = useRouter();

    async function handleSubmit(e: any) {
        e.preventDefault();
        setWrongCredentials(false);

    }

    return (
        <form onSubmit={handleSubmit} className="mt-2 grid grid-cols-2 gap-4">
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Company Name:
                    <input type="text" id="companyName" className={cssUnit} value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                </label>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    VAT Number:
                    <input type="number" id="VAT" className={cssUnit} value={VAT} onChange={(e) => setVAT(e.target.value)} required />
                </label>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Indurstry:
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected onClick={(e) => setIndustry("Technology")}>Technology</option>
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
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email:
                    <input type="email" id="email" className={cssUnit} placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password:
                    <input type="password" id="password" className={cssUnit} value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm Password:
                    <input type="password" id="password" className={cssUnit} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </label>
            </div>

            <button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
            {wrongCredentials && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
                <strong className="font-bold">Oups!</strong>
                <span className="block sm:inline"> Wrong credentials</span>
            </div>}
            <div className="mb-6 mt-6 w-100 flex justify-between">
                <h3 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Already a user? <span className="underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-600 dark:text-white" onClick={(e) => props.viewLogin()}>Sign in</span></h3>
            </div>

        </form>
    )
}