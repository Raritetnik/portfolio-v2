import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <div className={styles.sectionHeader}>
              <header className={styles.navigation}>
                <h3 id={styles.phoneInHeader}>☎️<a href="tel:4386801683">(438)680-1683</a></h3>
                <nav className={styles.menu}>
                    <a href="#">Accueil</a>
                    <a href="#">À propos</a>
                    <a href="#">Technologies</a>
                    <a href="#">Mes projets</a>
                    <a href="#">Contact</a>
                </nav>
              </header>
        </div>
    )
  }