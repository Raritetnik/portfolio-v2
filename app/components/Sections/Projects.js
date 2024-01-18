'use client'
import Background from "@/app/components/Background";
import styles from './Projects.module.css';
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
                        <img src="/assets/clubcuisine_bcbg.png" className="h-[300px] object-cover" alt="Club Cuisine BCBG"/>
                    </div>
                    <div className={styles.articleDetails}>
                        <h3><b className="text-4xl">👩🏼‍🍳</b>Club Cuisine BCBG</h3>
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
                        <a href="https://clubcuisinebcbg.com">
                            <img width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/internet--v1.png" alt="internet--v1"/>
                        </a>
                    </div>
                </motion.article>
                <motion.article className={styles.articleProjet}
                                initial="hide"
                                whileInView="show"
                                exit="hide"
                                variants={introPictureVariants}>
                    <div className={styles.img}>
                        <img src="/assets/tristan_realtor.png" className="h-[300px] object-cover" alt="Tristan Barbeau"/>
                    </div>
                    <div className={styles.articleDetails}>
                        <h3><b className="text-4xl">👨🏻‍💼</b>Realtor Tristan Barbeau</h3>
                        <p>Le site promotionnel des services immobiliers de Tristan Barbeau propose des offres spéciales, des consultations et des options de financement pour l'acquisition de biens immobiliers.</p>
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
                        <a href="https://tristanbarbeau.com">
                            <img width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/internet--v1.png" alt="internet--v1"/>
                        </a>
                        <a href="https://github.com/Raritetnik/tristan_barbeau">
                            <img width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/github--v1.png" alt="github--v1"/>
                        </a>
                    </div>
                </motion.article >
                <motion.article className={styles.articleProjet}
                                initial="hide"
                                whileInView="show"
                                exit="hide"
                                variants={introPictureVariants}>
                    <div className={styles.img}>
                        <img src="/assets/survivaliste_benoit.png" className="h-[300px] object-cover" alt="Benoit Survivaliste"/>
                    </div>
                    <div className={styles.articleDetails}>
                        <h3><b className="text-4xl">🏕️</b>Benoit Survivaliste</h3>
                        <p>Le blog personnel de Benoit Survivaliste, dédié à la survie et à l'autonomie humaine, propose une variété d'articles, de vidéos et offre également la possibilité de s'abonner à des formations exclusives.</p>
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
                        <a href="https://benoitsurvivaliste.com">
                            <img width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/internet--v1.png" alt="internet--v1"/>
                        </a>
                    </div>
                </motion.article>
                <motion.article className={styles.articleProjet}
                                initial="hide"
                                whileInView="show"
                                exit="hide"
                                variants={introPictureVariants}>
                    <div className={styles.img}>
                        <img src="/assets/WineNot_App.png" className="max-h-[300px] object-cover" alt="WineNot"/>
                        <img src="/assets/WineNot_App_2.png" className="max-h-[300px] object-cover" alt="WineNot"/>
                    </div>
                    <div className={styles.articleDetails}>
                        <h3><b className="text-4xl">🍷</b>Wine Not Application</h3>
                        <p>Une application électronique de gestion des celliers à vin en ligne, connectée à la SAAQ, permettant aux utilisateurs d'ajouter, retirer, marquer leurs vins préférés, de suivre le statut de leurs bouteilles et d'accéder facilement à leur collection en quelques clics, à tout moment.</p>
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
                        <a href="https://github.com/Raritetnik/Wine-Not_App">
                            <img width="96" height="96" className="h-[50px] w-[50px]" src="https://img.icons8.com/color/96/github--v1.png" alt="github--v1"/>
                        </a>
                    </div>
                </motion.article>
            </section>
        </Background>
    )
}