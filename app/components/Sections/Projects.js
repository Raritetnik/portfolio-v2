import Background from "@/app/components/Background";
import styles from './Projects.module.css';
export default function Projects() {
    return(
        <Background>
            <section className={styles.sectionProjets}>
                <h2>Mes Projets</h2>
                <article className={styles.articleProjet}>
                    <img src="/assets/clubcuisine_bcbg.png" alt="Club Cuisine BCBG"/>
                    <div className={styles.articleDetails}>
                        <h3>Club Cuisine BCBG</h3>
                        <p>Site commerciale de cuisines et salle de bains personnalisé  réalisé par des professionnelles designers et constructeurs.</p>
                        <span>
                            <p>Technologies:</p>
                            <span>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                                <img src="" alt=""/>
                            </span>
                        </span>
                    </div>
                    <div className={styles.redirectionBtns}>
                        <a href="#">ICON 1</a>
                        <a href="#">ICON 1</a>
                    </div>
                </article>
                <article className={styles.articleProjet}>
                    <img src="/assets/tristan_realtor.png" alt="Tristan Barbeau"/>
                    <div>

                    </div>
                    <div className={styles.redirectionBtns}>
                        <a href="#">ICON 1</a>
                        <a href="#">ICON 1</a>
                    </div>
                </article >
                <article className={styles.articleProjet}>
                    <img src="/assets/survivaliste_benoit.png" alt="Benoit Survivaliste"/>
                    <div>

                    </div>
                    <div className={styles.redirectionBtns}>
                        <a href="#">ICON 1</a>
                        <a href="#">ICON 1</a>
                    </div>
                </article>
            </section>
        </Background>
    )
}