import Navbar from "./navbar";
import Main from "./main";
import Card from "./Components/card";
import Footer from "./Components/footer";
import Academy from "@/app/Components/academy";
import Profile from "@/app/Components/profile";

const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Main/>
      <Card/>
      <Footer/>
    </div>
    </>
  )
}

export default Home;