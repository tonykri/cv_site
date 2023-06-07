import NavBarAdmin from "@/Components/AdminPages/NavBarAdmin";
import NotificationsWrapper from "@/Components/AdminPages/NotificationsWrapper";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarAdmin/>
      <NotificationsWrapper/>
      <div className="flex-1"></div>
      {/* Footer */} 
      <footer className="text-center p-2 dark:text-white">
        <div>
          <p>© 2023 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
