import NavBarFiltersWrapper from "@/Components/AdminPages/NavBarFiltersWrapper";


export default function Home() {
  return (
    <div>
      <NavBarFiltersWrapper/>
      {/* Footer */} 
      <footer className="text-center p-2 dark:text-white">
        <div>
          <p>© 2023 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
