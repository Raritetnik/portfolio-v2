"use client"
import styles from "./Footer.module.css";
import { motion } from "framer-motion";

const introPictureVariants = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

export default function Footer() {
    return (
        <footer className={styles.sectionFooter}>
            <motion.section
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introPictureVariants}>
                <div className="flex gap-4 justify-center items-center">
                    <img width="75" height="75" className="h-[75px] w-[75px] p-2 rounded-2xl bg-[#64D862]" src="https://img.icons8.com/ios-filled/100/000000/address--v1.png" alt="address--v1"/>
                    <span>
                        <h2>Localisation</h2>
                        <h3>Montréal, QC, Canada</h3>
                    </span>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <img width="75" height="75" className="h-[75px] w-[75px] p-2 rounded-2xl bg-[#64D862]" src="https://img.icons8.com/ios/100/mail.png" alt="mail"/>
                    <span className="">
                        <h2>Contact</h2>
                        <a href="tel:4386801683"><h3><b className="text-2xl">📞</b> (438) 680 - 1683</h3></a>
                        <a href="tel:4386801683"><h3><b className="text-3xl">📨</b> mkodarenko@gmail.com</h3></a>
                    </span>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <img width="75" height="75" className="h-[75px] w-[75px] p-2 rounded-2xl bg-[#64D862]" src="https://img.icons8.com/ios/100/internet--v1.png" alt="internet--v1"/>
                    <span>
                        <h2>Réseaux</h2>
                        <span className="flex">
                        <a href="https://www.linkedin.com/in/raritetnik/"><img width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/linkedin.png" alt="linkedin"/></a>
                        <a href="https://www.linkedin.com/in/raritetnik/"><img width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/github--v1.png" alt="github--v1"/></a>
                        </span>
                    </span>
                </div>
            </motion.section>
        </footer>
    )
}