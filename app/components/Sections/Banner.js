import styles from './Banner.module.css';
import Background from "@/app/components/Background";
import Button from "@/app/components/Button";
import Image from "next/image";

export default function Banner() {
    return (
        <Background>
            <section className={styles.sectionBanner}>
                <div className={styles.imageProfil}>
                    <Image src="/assets/laptop_code_study.webp" alt="Laptop in dark" width={600} height={600} className="object-cover aspect-square"/>
                </div>
                <div className={styles.informationProfil}>
                    <h3 className={styles.bienvenu}>Salut <i className="text-4xl">👋</i>, <br/>Je m'appelle</h3>
                    <h2 className="text-green-400 font-bold">Mykhaylo Kuzmin</h2>
                    <p className="pb-6">Je suis un <strong className="text-green-400 text-2xl">Développeur Web Full Stack</strong> compétent en développement ( et en design ), avec une passion pour concevoir des expériences utilisateur engageantes et divertissantes.</p>
                    <span><Button>Télécharger CV</Button> <i className="text-4xl">👈</i> </span>
                </div>
            </section>
        </Background>
    )
}