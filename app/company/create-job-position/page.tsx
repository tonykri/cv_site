import CreateJobForm from "@/Components/CompanyPages/CreateJobForm";
import NavBarCompany from "@/Components/CompanyPages/NavBarCompany";


export default function Home() {
  return (
    <div>
      <NavBarCompany/>
      <CreateJobForm/>
      {/* Footer */} 
      <footer className="text-center p-2 dark:text-white">
        <div>
          <p>© 2023 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
