import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Home = () => {
  return (
    <div className="min-h-screen ">
      <nav>
        <Navbar></Navbar>
      </nav>
      <section>
        <Outlet></Outlet>
      </section>
      <section className="mt-10">
        <Footer></Footer>
      </section>
    </div>

  )
}

export default Home