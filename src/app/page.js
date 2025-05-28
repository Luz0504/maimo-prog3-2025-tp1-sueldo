import Banner from "@/app/components/Banner"
import HomeContainer from "@/app/components/HomeContainer";

export default function Home() {

  const title = "La cocina de Pusheen"

  return (
    <div>
      <div>
        <Banner />
        <HomeContainer/>
      </div>
    </div>
  );
}
