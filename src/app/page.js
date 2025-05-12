import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import HomeContainer from "@/app/components/HomeContainer";
import Image from "next/image";

export default function Home() {

  const title = "La cocina de Pusheen"

  return (
    <div>
      <div>
        <div className="bannerCont"> 
                <Image 
                  src= "/assets/bannerPusheen.gif"
                  width={90}
                  height={90}
                  alt="Pusheen"
                />
                <h1> {title}</h1>
        </div>
        <Navbar/>
        <HomeContainer/>
        <Footer/>
      </div>
    </div>
  );
}
