import Image from 'next/image'
import Banner from "@/app/components/Sections/Banner";
import Parcours from "@/app/components/Sections/Parcours";
import Projects from "@/app/components/Sections/Projects";
import Technologies from "@/app/components/Sections/Technologies";
import Contact from "@/app/components/Sections/Contact";


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
