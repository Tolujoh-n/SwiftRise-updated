
import { Nav, Footer } from "../../components"
import Hero from "./Hero/Hero"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"


const Landing = () => {
  return (
    <>
      <Nav />
      <Hero/>
      <Login />
      <Signup />
      <Footer />
    </>
  )
}

export default Landing