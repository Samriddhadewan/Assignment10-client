import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const {user, handleUserLogout} = useContext(AuthContext);

    const handleLogOut = ()=>{
        handleUserLogout()
        .then(()=>{
            Swal.fire({
                icon: "success",
                title: "Successful",
                text: "Successfully Logged Out",
              });

        })
        .catch(()=>{

        })
    }


  const links = <>
      <NavLink className="mr-2" to="/">Home</NavLink>
      <NavLink to="/allCampaigns" className="mr-2">All Campaign</NavLink>
      {
        user &&<NavLink className="mr-2" to="/addCampaign">New Campaign</NavLink>
      }
      {
        user && <NavLink className="mr-2" to={`/myCampaign/${user?.email}`}>My Campaigns</NavLink>
      }
      {
        user && <NavLink to={`myDonation/${user?.email}`}>My Donation</NavLink>
      }




      {/* <NavLink to="/">Home</NavLink> */}
  </>
  return (
    <section className="max-w-[1140px] mx-auto ">
      <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <Link to="/">
    <button className="text-3xl font-semibold">RaiseIt</button>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex items-center gap-2">
        {
          user && user?.email ? 
          <>
            <img className="w-15 h-15 object-cover border-black border rounded-full" src={user.photoURL} alt="" />
            <p className="font-semibold">{user.displayName}</p>
          </>
          : 
          (<div></div>)
        }

      </div>

      {
        user?.displayName ? 
        <button onClick={handleLogOut} className="btn ml-2 bg-[#0E7A81] text-white ">Log Out</button>
        :
        <Link to="/login" className="btn bg-[#0E7A81] text-white">Log in</Link>
      }

  </div>
</div>
    </section>
  )
}

export default Navbar;