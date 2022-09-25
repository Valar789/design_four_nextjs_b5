import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";


export default function Home() {
  return (
    <>
    <TopBar/>
    <NavBar/>
    <Hero/>
    <Main/>
    <Footer/>
    
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  )
}
