import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


function RootLayot() {
  return (
    <div className="max-container">
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayot