'use client'
import Background from "@/app/components/Background";
import styles from './Projects.module.css';
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

export default function Projects() {
    return(
        <Background>
            <section className={styles.sectionProjets} id="projets">
                <h2>🗃️ Mes Projets</h2>
                <motion.article className={styles.articleProjet}
                                initial="hide"
                                whileInView="show"
                                exit="hide"
                                variants={introPictureVariants}>
                    <div className={styles.img} >
                        <Image src="/assets/clubcuisine_bcbg.png" width={500} height={300} className="h-[200px] md:h-[300px] object-cover" alt="Club Cuisine BCBG"/>
                    </div>
                    <div className={styles.articleDetails}>
                        <h3><b className="text-xl md:text-2xl lg:text-4xl">👩🏼‍🍳</b>Club Cuisine BCBG</h3>
                        <p>Plateforme commerciale spécialisée dans la conception sur mesure de cuisines et de salles de bains, réalisée par des designers et constructeurs professionnels</p>
                        <span>
                            <p>Technologies:</p>
                            <span className={styles.technologies}>
                                <span className={styles.tagWord}>Wordpress</span>
                                <span className={styles.tagWord}>PHP</span>
                                <span className={styles.tagWord}>JavaScript</span>
                                <span className={styles.tagWord}>Elementor</span>
                                <span className={styles.tagWord}>HTML</span>
                                <span className={styles.tagWord}>CSS</span>
                            </span>
                        </span>
                    </div>
                    <div className={styles.redirectionBtns}>
                        <a href="https://clubcuisinebcbg.com" target="_blank">
                            <Image width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/internet--v1.png" alt="internet--v1"/>
                        </a>
                    </div>
                </motion.article>
                <motion.article className={styles.articleProjet}
                                initial="hide"
                                whileInView="show"
                                exit="hide"
                                variants={introPictureVariants}>
                    <div className={styles.img}>
                        <Image src="/assets/tristan_realtor.png" width={500} height={300} className="h-[200px] md:h-[300px] object-cover" alt="Tristan Barbeau"/>
                    </div>
                    <div className={styles.articleDetails}>
                        <h3><b className="text-xl md:text-2xl lg:text-4xl">👨🏻‍💼</b>Realtor Tristan Barbeau</h3>
                        <p>Le site promotionnel des services immobiliers de Tristan Barbeau propose des offres spéciales, des consultations et des options de financement pour l&#39;acquisition de biens immobiliers.</p>
                        <span>
                            <p>Technologies:</p>
                            <span className={styles.technologies}>
                                <span className={styles.tagWord}>Nuxt 3</span>
                                <span className={styles.tagWord}>Vue.JS</span>
                                <span className={styles.tagWord}>React</span>
                                <span className={styles.tagWord}>JavaScript</span>
                                <span className={styles.tagWord}>TypeScript</span>
                                <span className={styles.tagWord}>Tailwind CSS</span>
                                <span className={styles.tagWord}>NoSQL</span>
                                <span className={styles.tagWord}>Rest API</span>
                                <span className={styles.tagWord}>Node.JS</span>
                                <span className={styles.tagWord}>NoSQL</span>
                                <span className={styles.tagWord}>HTML</span>
                                <span className={styles.tagWord}>CSS</span>
                            </span>
                        </span>
                    </div>
                    <div className={styles.redirectionBtns}>
                        <a href="https://tristanbarbeau.com" target="_blank">
                            <Image width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/internet--v1.png" alt="internet--v1"/>
                        </a>
                        <a href="https://github.com/Raritetnik/tristan_barbeau" target="_blank">
                            <Image width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/github--v1.png" alt="github--v1"/>
                        </a>
                    </div>
                </motion.article >
                <motion.article className={styles.articleProjet}
                                initial="hide"
                                whileInView="show"
                                exit="hide"
                                variants={introPictureVariants}>
                    <div className={styles.img}>
                        <Image src="/assets/survivaliste_benoit.png" width={500} height={300} className="h-[200px] md:h-[300px] object-cover" alt="Benoit Survivaliste"/>
                    </div>
                    <div className={styles.articleDetails}>
                        <h3><b className="text-xl md:text-2xl lg:text-4xl">🏕️</b>Benoit Survivaliste</h3>
                        <p className="text-base">Le blog personnel de Benoit Survivaliste, dédié à la survie et à l&#39;autonomie humaine, propose une variété d&#39;articles, de vidéos et offre également la possibilité de s&#39;abonner à des formations exclusives.</p>
                        <span>
                            <p>Technologies:</p>
                            <span className={styles.technologies}>
                                <span className={styles.tagWord}>Wordpress</span>
                                <span className={styles.tagWord}>PHP</span>
                                <span className={styles.tagWord}>JavaScript</span>
                                <span className={styles.tagWord}>Elementor</span>
                                <span className={styles.tagWord}>HTML</span>
                                <span className={styles.tagWord}>CSS</span>
                            </span>
                        </span>
                    </div>
                    <div className={styles.redirectionBtns}>
                        <a href="https://benoitsurvivaliste.com" target="_blank">
                            <Image width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/internet--v1.png" alt="internet--v1"/>
                        </a>
                    </div>
                </motion.article>
                <motion.article className={styles.articleProjet}
                                initial="hide"
                                whileInView="show"
                                exit="hide"
                                variants={introPictureVariants}>
                    <div className={styles.img}>
                        <Image src="/assets/WineNot_App.png" width={250} height={300} className="h-[200px] md:max-h-[300px] object-cover hidden md:block" alt="WineNot"/>
                        <Image src="/assets/WineNot_App_2.png" width={250} height={300} className="h-[200px] md:max-h-[300px] object-cover block" alt="WineNot"/>
                    </div>
                    <div className={styles.articleDetails}>
                        <h3><b className="text-4xl">🍷</b>Wine Not Application</h3>
                        <p>Une application électronique de gestion des celliers à vin en ligne, connectée à la SAAQ, permettant aux utilisateurs d&#39;ajouter, retirer, marquer leurs vins préférés, de suivre le statut de leurs bouteilles et d&#39;accéder facilement à leur collection en quelques clics, à tout moment.</p>
                        <span>
                            <p>Technologies:</p>
                            <span className={styles.technologies}>
                                <span className={styles.tagWord}>Laravel</span>
                                <span className={styles.tagWord}>PHP</span>
                                <span className={styles.tagWord}>Blade</span>
                                <span className={styles.tagWord}>Vue.JS</span>
                                <span className={styles.tagWord}>Vite</span>
                                <span className={styles.tagWord}>JavaScript</span>
                                <span className={styles.tagWord}>MySQL</span>
                                <span className={styles.tagWord}>SQL</span>
                                <span className={styles.tagWord}>MVC</span>
                                <span className={styles.tagWord}>Rest API</span>
                                <span className={styles.tagWord}>Composer</span>
                                <span className={styles.tagWord}>Tailwind CSS</span>
                                <span className={styles.tagWord}>HTML</span>
                                <span className={styles.tagWord}>CSS</span>
                            </span>
                        </span>
                    </div>
                    <div className={styles.redirectionBtns}>
                        <a href="https://github.com/Raritetnik/Wine-Not_App" target="_blank">
                            <Image width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/github--v1.png" alt="github--v1"/>
                        </a>
                    </div>
                </motion.article>
            </section>
        </Background>
    )
}