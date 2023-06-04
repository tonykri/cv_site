import CreateJobForm from "@/Components/CompanyPages/CreateJobForm";
import NavBarCompany from "@/Components/CompanyPages/NavBarCompany";


export default function Home() {
  return (
    <div>
      <NavBarCompany/>
      <CreateJobForm/>
      {/* Footer */} 
      <footer style={{ position: 'fixed', width: '100%', bottom: 0, textAlign: 'center' }}>
        <div>
          <p>© 2023 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
