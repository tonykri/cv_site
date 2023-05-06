import CompanyCard from "./CompanyCard";

export default function SavedCompaniesWrapper(){
    return(
        <div className="container mx-auto my-5 h-screen overflow-y-auto">
            <CompanyCard/>
            <CompanyCard/>
            <CompanyCard/>
            <CompanyCard/>
            <CompanyCard/>
            <CompanyCard/>
            <CompanyCard/>
        </div>
    )
}