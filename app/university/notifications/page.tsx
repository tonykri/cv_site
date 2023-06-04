import NotificationsWrapper from "@/Components/UniversityPages/NotificationsWrapper";
import NavBarUniversity from "@/Components/UniversityPages/NavBarUniversity";


export default function Home() {
  return (
    <div>
      <NavBarUniversity/>
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
