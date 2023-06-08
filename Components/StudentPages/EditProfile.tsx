'use client'
import { useEffect, useState } from "react";
import { TbNorthStar } from 'react-icons/tb'
import { usePathname } from 'next/navigation';
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { Dropdown } from "flowbite-react";

export default function EditProfile() {
    const pathname = usePathname();
    const BtnText = pathname === "/completeprofile" ? "Complete Registration" : "Update Info"
    const router = useRouter()

    const [viewSuccess, setViewSuccess] = useState(false);
    const [school, setSchool] = useState("");
    const [languages, setLanguages] = useState("");
    const [certifications, setCertifications] = useState("");
    const [awards, setAwards] = useState("");
    const [yearsExp, setYearsExp] = useState("0");
    const [workExp, setworkExp] = useState("");
    const [skills, setSkills] = useState("");
    const [interests, setInterests] = useState("");
    const [volExp, setvolExp] = useState("");
    const [searchDepartments, setSearchDepartments] = useState(false);

    const cssUnit = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

    async function handleSubmit(e: any) {
        e.preventDefault();
        axios.put('http://localhost:8080/update/student', {
            "university": selectedUniversity,
            "department": selectedDepartment,
            "highSchool": school,
            "languages": languages,
            "certifications": certifications,
            "awards": awards,
            "yearsOfWorkExperience": 3,
            "workExperience": workExp,
            "skills": skills,
            "interests": interests,
            "volunteeringExperience": volExp

        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data);
            if (pathname === '/completeprofile') {
                router.push('/student/home');
            } else
                setViewSuccess(true);
        }).catch(err => {
            console.log(err);
            console.log("gtxs");
        });
    }

    const [selectedUniversity, setSelectedUniversity] = useState("");
    const [universities, setUniversities] = useState([{ value: "", label: "" }])
    const setUniversity = (selected: any) => {
        setSelectedUniversity(selected.value);
        setSearchDepartments(!searchDepartments)
    };
    useEffect(() => {
        axios.get(`http://localhost:8080/universities`,)
        .then(res => {
            let temp = []
            for (const data of res.data)
                temp.push({ value: data.name, label: data.name })
            setUniversities(temp)
        })
    }, [])

    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [departments, setDepartments] = useState([{ value: "", label: "" }])
    const setDepartment = (selected: any) => {
        setSelectedDepartment(selected.value);
    };
    useEffect(() => {
        if (selectedUniversity === "")
            return
        axios.get(`http://localhost:8080/${selectedUniversity}/departments`,)
        .then(res => {
            let temp = []
            for (const data of res.data)
                temp.push({ value: data.department, label: data.department })
            setDepartments(temp)
        })
    }, [searchDepartments])

    useEffect(() => {
        if( pathname !== "/completeprofile") {
            axios.get("http://localhost:8080/profile/moredata", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                }
            }).then(res => {
                console.log(res.data);
                setSelectedUniversity(res.data.university);
                setSelectedDepartment(res.data.department);
                setSchool(res.data.highSchool);
                setLanguages(res.data.languages);
                setCertifications(res.data.certifications);
                setAwards(res.data.awards);
                setworkExp(res.data.workExperience);
                setYearsExp(res.data.yearsOfWorkExperience);
                setSkills(res.data.skills);
                setInterests(res.data.interests);
                setvolExp(res.data.volunteeringExperience);
            }).catch(err => {
                console.log(err);
            });
        }
    }, [])

    return (
        <div className="w-full h-full justify-center items-center flex">
            <div className="overflow-y-auto h-screen mt-4 justify-center items-center md:flex">
                <div>

                    <form onSubmit={handleSubmit}>
                        {viewSuccess && <div id="toast-success" className=" m-auto mt-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span className="sr-only">Check icon</span>
                            </div>
                            <div className="ml-3 text-sm font-normal">Profile updated successfully.</div>
                            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close" onClick={() => setViewSuccess(false)}>
                                <span className="sr-only">Close</span>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>}
                        <div className="md:flex">
                            <div className="mx-4">
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {pathname === "/completeprofile" ? <><span>
                                    University: <span style={{ color: 'red' }}>*</span>
                                    </span>
                                        <Dropdown
                                            label={selectedUniversity}
                                            dismissOnClick={true}
                                            color={'gray'}
                                        >
                                            {universities.map((university) => (<Dropdown.Item onClick={() => setUniversity(university)}>
                                                {university.label}
                                            </Dropdown.Item>))}
                                        </Dropdown>
                                         </>:  
                                        <>University:
                                        <input type="text" id="university" className={cssUnit} value={selectedUniversity} onChange={(e) => setSchool(e.target.value)}  disabled /></>
                                        }
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    {pathname === "/completeprofile" ? <><span>
                                    Department: <span style={{ color: 'red' }}>*</span>
                                    </span>
                                        <Dropdown
                                            label={selectedDepartment}
                                            dismissOnClick={true}
                                            color={'gray'}
                                        >
                                            {departments.map((department) => (<Dropdown.Item onClick={() => setDepartment(department)}>
                                                {department.label}
                                            </Dropdown.Item>))}
                                        </Dropdown>
                                        </>:
                                        <>Department:
                                        <input type="text" id="department" className={cssUnit} value={selectedDepartment} onChange={(e) => setSchool(e.target.value)} disabled /></>
                                        }
                                    </label>
                                </div>

                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        High School:
                                        <input type="text" id="school" className={cssUnit} value={school} onChange={(e) => setSchool(e.target.value)} />
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Languages:
                                        <input type="text" id="languages" className={cssUnit} value={languages} onChange={(e) => setLanguages(e.target.value)} />
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Certifications:
                                        <input type="text" id="certifications" className={cssUnit} value={certifications} onChange={(e) => setCertifications(e.target.value)} />
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Awards:
                                        <input type="text" id="awards" className={cssUnit} value={awards} onChange={(e) => setAwards(e.target.value)} />
                                    </label>
                                </div>
                            </div>
                            <div className="mx-4">

                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Years of work experience:
                                        <div>{yearsExp}</div>
                                        <input type="range" id="yearsOfExp" min={0} max={40} className={cssUnit} value={yearsExp} onChange={(e) => setYearsExp(e.target.value)} />
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Work Experience:
                                        <input type="text" id="work" className={cssUnit} value={workExp} onChange={(e) => setworkExp(e.target.value)} />
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Skills:
                                        <input type="text" id="skills" className={cssUnit} value={skills} onChange={(e) => setSkills(e.target.value)} />
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Intrests:
                                        <input type="text" id="intrests" className={cssUnit} value={interests} onChange={(e) => setInterests(e.target.value)} />
                                    </label>
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Volunteering experience:
                                        <input type="text" id="volExp" className={cssUnit} value={volExp} onChange={(e) => setvolExp(e.target.value)} />
                                    </label>
                                </div>
                                <div className="mb-6 flex justify-start">
                                    <button type="submit" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{BtnText}</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </div>

    )
}