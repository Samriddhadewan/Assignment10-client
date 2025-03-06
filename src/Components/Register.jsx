import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
  const [error, setError] = useState("")
  const { HandleCreateUser, handleUpdateUser } = useContext(AuthContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;



    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }


    // create user with profile update here
    HandleCreateUser(email, password)
      .then(() => {
        handleUpdateUser({
          displayName: name,
          photoURL: photoURL,
        });
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: "Successfully Registered Your Account",
        });
        setError("")
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
      });
  };
  return (
    <div>
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-xl p-14 shrink-0 shadow-2xl">
          <form onSubmit={handleSubmitForm} className="">
            <h1 className="text-3xl text-center font-bold">Register Now</h1>
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter your name"
              />
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Enter your Email"
              />
              <label className="fieldset-label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Enter Photo URL"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Enter Password"
              />
              {
                error && <p className="text-red-500">{error}</p>
              }
              <button className="btn bg-[#0E7A81] text-white mt-4">
                Register
              </button>
            </fieldset>
          </form>
          <h1 className="pt-3">
            All ready have an Account ?{" "}
            <Link className="underline text-blue-700" to="/login">
              Login
            </Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
