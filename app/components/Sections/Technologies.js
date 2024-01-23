'use client'
import Background from "@/app/components/Background";
import styles from './Technologies.module.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { motion } from "framer-motion";
import Image from "next/image";
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
export default function Technologies() {
    console.log(window.screen.width);
    return(
        <Background>
            <section className={styles.sectionTechnologies} id="technos">
                <h2 className="pb-6">🗃️ Mes Technologies</h2>
                <motion.div className={styles.articles}
                            initial="hide"
                            whileInView="show"
                            exit="hide"
                            variants={introPictureVariants}>
                    <article>
                        <h3>Front-end & Design Web</h3>
                        <div className={styles.technologies}>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>React</span>
                            <span>Vue JS</span>
                            <span>Nuxt 3</span>
                            <span>Next JS</span>
                            <span>JavaScript</span>
                            <span>TypeScript</span>
                            <span>Blade</span>
                            <span>Bootstrap</span>
                            <span>Tailwind CSS</span>
                            <span>Angular</span>
                            <span>Figma</span>
                            <span>Photoshop</span>
                            <span>Illustrator</span>
                        </div>
                    </article>
                    <article>
                        <h3>Back-end & Serveur</h3>
                        <div className={styles.technologies}>
                            <span>Laravel</span>
                            <span>PHP</span>
                            <span>Node JS</span>
                            <span>unjs\h3</span>
                            <span>Composer</span>
                            <span>MySQL</span>
                            <span>NoSQL</span>
                            <span>MongoDB</span>
                            <span>SQL</span>
                            <span>Twig</span>
                            <span>Java</span>
                            <span>RESTful API</span>
                        </div>
                    </article>
                    <article>
                        <h3>Autre connaissances</h3>
                        <div className={styles.technologies}>
                            <span>Wordpress</span>
                            <span>Python</span>
                            <span>Java</span>
                            <span>Git</span>
                            <span>GitHub</span>
                            <span>GitLab</span>
                            <span>C#</span>
                            <span>C</span>
                            <span>C++</span>
                            <span>Microsoft Office</span>
                            <span>Unity 3D</span>
                            <span>Méthodologie Agile</span>
                            <span>MVC</span>
                            <span>Linux</span>
                            <span>Windows</span>
                            <span>bash</span>
                        </div>
                    </article>
                </motion.div>
                <motion.div className="flex justify-center"
                            initial="hide"
                            whileInView="show"
                            exit="hide"
                            variants={introPictureVariants}>
                <Splide tag="div" className={styles.icons} options={{
                    type         : 'loop',
                    gap          : '.3rem',
                    arrows       : false,
                    pagination   : false,
                    perPage      : (window.screen.width <= 748) ? 4 : ((window.screen.width <= 1024) ? 6 : 9),
                    perMove      : 1,
                    focus        : "center",
                    autoplay     : true,
                    speed        : 1500,
                    pauseOnHover : false,
                    autoScroll   : true,
                    interval     : 1500,
                    waitForTransition: false,

                    resetProgress: false,
                }} aria-label="List technologies">
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/fluency/48/css3.png" alt="css3"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/office/40/react.png" alt="react"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/vue-js.png" alt="vue-js"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/nuxt-jc.png" alt="nuxt-jc"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/nextjs.png" alt="nextjs"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/fluency/48/typescript--v2.png" alt="typescript--v2"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/angularjs.png" alt="angularjs"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/figma--v1.png" alt="figma--v1"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/adobe-photoshop--v1.png" alt="adobe-photoshop--v1"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/adobe-illustrator--v1.png" alt="adobe-illustrator--v1"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/fluency/48/laravel.png" alt="laravel"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/48/external-PHP-programming-and-development-those-icons-lineal-color-those-icons.png" alt="external-PHP-programming-and-development-those-icons-lineal-color-those-icons"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/external-those-icons-flat-those-icons/48/external-MySQL-programming-and-development-those-icons-flat-those-icons.png" alt="external-MySQL-programming-and-development-those-icons-flat-those-icons"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/api-settings.png" alt="api-settings"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/wordpress.png" alt="wordpress"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/c-sharp-logo.png" alt="c-sharp-logo"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/fluency/48/c-programming.png" alt="c-programming"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/fluency/48/microsoft-office-2019.png" alt="microsoft-office-2019"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/ios-filled/50/unity.png" alt="unity"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/external-those-icons-flat-those-icons/48/external-Linux-logos-and-brands-those-icons-flat-those-icons.png" alt="external-Linux-logos-and-brands-those-icons-flat-those-icons"/></SplideSlide>
                    <SplideSlide><Image width={68} height={68} src="https://img.icons8.com/color/48/windows-10.png" alt="windows-10"/></SplideSlide>
                </Splide>
                </motion.div>
            </section>
        </Background>
    )
}