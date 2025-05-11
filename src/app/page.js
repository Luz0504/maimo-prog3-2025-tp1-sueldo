import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import HomeContainer from "@/app/components/HomeContainer";

export default function Home() {

  const title = "La cocina de Pusheen"

  return (
    <div>
      <div>
        <h1> {title}</h1>
        <Navbar/>
        <HomeContainer/>
        <Footer/>
      </div>
    </div>
  );
}
