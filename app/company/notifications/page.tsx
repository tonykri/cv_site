import NavBarCompany from "@/Components/CompanyPages/NavBarCompany";
import NotificationsWrapper from "@/Components/CompanyPages/NotificationsWrapper";


export default function Home() {
  return (
    <div>
      <NavBarCompany/>
      <NotificationsWrapper/>
      {/* Footer */} 
      <footer style={{ position: 'fixed', width: '100%', bottom: 0, textAlign: 'center' }}>
        <div>
          <p>© 2023 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
