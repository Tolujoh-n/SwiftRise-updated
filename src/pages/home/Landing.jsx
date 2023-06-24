
import Nav from "../../components/Nav/Nav"
import Hero from "./Hero/Hero"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import Review from "./Review/Review"


const Landing = () => {
  return (
    <>
      <Nav />
      <Hero/>
      <Login />
      <Signup />
      <Review />
    </>
  )
}

export default Landing