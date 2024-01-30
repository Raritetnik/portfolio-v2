import Image from 'next/image'
import Banner from "./components/Sections/Banner";
import Parcours from "./components/Sections/Parcours";
import Projects from "./components/Sections/Projects";
import Technologies from "./components/Sections/Technologies";
import Contact from "./components/Sections/Contact";
import translations from "@/messages/en.json"

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
    const tBanner = useTranslations('Banner');
    let transBanner = {};
    Object.keys(translations.Banner).forEach(el => {
        transBanner[el] = tBanner(el);
    });

    const tParcours = useTranslations('Parcours');
    let transParcours = {};
    Object.keys(translations.Parcours).forEach(el => {
        transParcours[el] = tParcours(el);
    });

    const tProjects = useTranslations('Projects');
    let transProjects = {};
    Object.keys(translations.Projects).forEach(el => {
        transProjects[el] = tProjects(el);
    });

    const tTechnologies = useTranslations('Technologies');
    let transTechnologies = {};
    Object.keys(translations.Technologies).forEach(el => {
        transTechnologies[el] = tTechnologies(el);
    });
  return (
    <main className="">
      <Banner textes={transBanner} />

      <Parcours textes={transParcours}/>

      <Projects textes={transProjects}/>

      <Technologies textes={transTechnologies}/>

        {/*<Contact/>*/}
    </main>
  )
}
