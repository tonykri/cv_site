import NavBarAdmin from "@/Components/AdminPages/NavBarAdmin";
import NotificationsWrapper from "@/Components/AdminPages/NotificationsWrapper";


export default function Home() {
  return (
    <div>
      <NavBarAdmin/>
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
