import Image from 'next/image'
import Banner from "./components/Sections/Banner";
import Parcours from "./components/Sections/Parcours";
import Projects from "./components/Sections/Projects";
import Technologies from "./components/Sections/Technologies";
import Contact from "./components/Sections/Contact";


export default function Home() {

  return (
    <main className="">
      <Banner/>

      <Parcours/>

      <Projects/>

      <Technologies/>

      <Contact/>
    </main>
  )
}
