"use client"
import styles from './Banner.module.css';
import Background from "@/app/[locale]/components/Background";
import Button from "@/app/[locale]/components/Button";
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

export default function Banner({textes}) {
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
                    <h3 className={styles.bienvenu}>{textes.hello} <i className="text-4xl">👋</i>, <br/> {textes.name}</h3>
                    <h2 className="text-green-400 font-bold">Mykhaylo Kuzmin</h2>
                    <p className="pb-6">{textes.iam}<strong className="text-green-400 text-2xl">{textes.profile}</strong> {textes.about}</p>
                    <span className="flex flex-col lg:flex-row lg:items-center">
                        <div className="flex items-center">
                            <a href="/assets/KuzminMykhaylo_FullStackDeveloper_CV.pdf" target="_blank">
                                <Button>{textes.download}</Button>
                            </a>
                            <i className="text-4xl">👈</i><span>{textes.or}</span>
                            </div>
                        <div className="flex items-center">
                            <i className="text-4xl">👉</i>
                            <a href="https://www.linkedin.com/in/raritetnik/" target="_blank">
                                <Image width="96" height="96" id={styles.contactBTN} className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/linkedin.png" alt="linkedin"/>
                            </a>
                            <span>{textes.message_me}</span>
                        </div>
                    </span>
                    <p className="flex items-center text-xl"><
                        b className="text-4xl">📧</b> <a href="mailto:mkodarenko@gmail.com">mkodarenko@gmail.com</a>
                    </p>
                </motion.div>
            </section>
        </Background>
    )
}