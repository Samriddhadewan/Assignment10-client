import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Home = () => {
  return (
    <div className="min-h-screen ">
      <nav>
        <Navbar></Navbar>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
    </div>

  )
}

export default Home