import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <div className={styles.sectionHeader}>
              <header className={styles.navigation}>
                <h3 id={styles.phoneInHeader}>☎️<a href="tel:4386801683">(438)680-1683</a></h3>
                <nav className={styles.menu}>
                    <a href="#banner">Accueil</a>
                    <a href="#parcours">À propos</a>
                    <a href="#technos">Technologies</a>
                    <a href="#projets">Mes projets</a>
                    {/*<a href="#contact">Contact</a>*/}
                </nav>
              </header>
        </div>
    )
  }