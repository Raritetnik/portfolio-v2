'use client'
import styles from './Contact.module.css';
import Background from "@/app/[locale]/components/Background";
import Button from "@/app/[locale]/components/Button";
import Image from "next/image";
import { motion } from "framer-motion";
const introPictureVariants = {
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
const leftIntroPictureVariants = {
    hide: {
        opacity: 0,
        x: 500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
        },
    },
};
export default function Contact({textes}) {
    return (
        <Background>
            <section className={styles.sectionContact} id="contact">
                <h2>📧 Contact</h2>
                <motion.div className={styles.content}
                            initial="hide"
                            whileInView="show"
                            exit="hide"
                            variants={introPictureVariants}>
                    <motion.form className="justify-center items-center flex flex-col lg:px-8 py-4">
                        <label className="w-full" htmlFor=""><h3>Nom Complet</h3>
                            <input type="text" className="w-full h-10 text-black p-2" required/>
                        </label>
                        <label className="w-full" htmlFor=""><h3>Courriel</h3>
                            <input type="email" className="w-full h-10 text-black p-2" required/>
                        </label>
                        <label className="w-full" htmlFor=""><h3>Téléphone</h3>
                            <input type="tel" className="w-full h-10 text-black p-2"/>
                        </label>
                        <label className="w-full" htmlFor=""><h3>Message</h3>
                            <textarea className="w-full h-[150px] text-black p-2"></textarea>
                        </label>
                        <input type="hidden" name="biscuit" value=""/>
                        <Button>Envoyer message</Button>
                    </motion.form>
                    <motion.div className={styles.imageProfil}
                                initial="hide"
                                whileInView="show"
                                exit="hide"
                                variants={introPictureVariants}>
                        <Image src="/assets/laptop_in_dark.webp" alt="Laptop in dark" width={600} height={600} className="object-cover aspect-square"/>
                    </motion.div>
                </motion.div>
            </section>
        </Background>
    )
}