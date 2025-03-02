import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const Home = () => {
    const {name} = useContext(AuthContext);
  return (
    <div>{name}</div>
  )
}

export default Home;