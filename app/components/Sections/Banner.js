'use client'
import styles from './Banner.module.css';
import Background from "@/app/components/Background";
import Button from "@/app/components/Button";
import Image from "next/image";
import { motion } from "framer-motion"

const leftIntroPictureVariants = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 2,
        },
    },
};

const rightIntroPictureVariants = {
    hide: {
        opacity: 0,
        x: -500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};

export default function Banner() {
    return (
        <Background>
            <section className={styles.sectionBanner} id="banner">
                <motion.div className={styles.imageProfil}
                            initial="hide"
                            whileInView="show"
                            exit="hide"
                            variants={leftIntroPictureVariants}>
                    <Image src="/assets/laptop_code_study.webp" alt="Laptop in dark" width={600} height={600} className="object-cover aspect-square"/>
                </motion.div>
                <motion.div className={styles.informationProfil}
                            initial="hide"
                            whileInView="show"
                            exit="hide"
                            variants={leftIntroPictureVariants}>
                    <h3 className={styles.bienvenu}>Salut <i className="text-4xl">👋</i>, <br/>Je m&#39;appelle</h3>
                    <h2 className="text-green-400 font-bold">Mykhaylo Kuzmin</h2>
                    <p className="pb-6">Je suis un <strong className="text-green-400 text-2xl">Développeur Web Full Stack</strong> compétent en développement ( et en design ), avec une passion pour concevoir des expériences utilisateur engageantes et divertissantes.</p>
                    <span className="flex items-center">
                        <a href="/assets/KuzminMykhaylo_FullStackDeveloper_CV.pdf"><Button>Télécharger CV</Button></a><i className="text-4xl">👈</i> ou
                        <i className="text-4xl">👉</i><a href="https://www.linkedin.com/in/raritetnik/"><Image width="96" height="96" id={styles.contactBTN} className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/linkedin.png" alt="linkedin"/></a>
                        Écrivez-moi!
                    </span>
                </motion.div>
            </section>
        </Background>
    )
}