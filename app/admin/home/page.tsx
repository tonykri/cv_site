import NavBarFiltersWrapper from "@/Components/AdminPages/NavBarFiltersWrapper";


export default function Home() {
  return (
    <div>
      <NavBarFiltersWrapper/>
      {/* Footer */} 
      <footer style={{ position: 'fixed', width: '100%', bottom: 0, textAlign: 'center' }}>
        <div>
          <p>© 2023 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
