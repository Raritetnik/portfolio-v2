'use client'
import styles from './Navigation.module.css';
import Image from "next/image";
import React, { useState } from 'react';
import {hidden} from "next/dist/lib/picocolors";

export default function Navigation() {
    let [dropMenuIsOpen, setDropMenuIsOpen] = useState(false)
    return (
        <div className={styles.sectionHeader}>
              <header className={styles.navigation}>
                <h3 id={styles.phoneInHeader}><span className="text-primary font-bold">Full Stack</span><br/> Web Développeur</h3>
                <h3 className="hidden md:inline-block" id={styles.phoneInHeader}>☎️<a href="tel:4386801683">(438)680-1683</a></h3>
                <nav className={styles.menu} onClick={() => setDropMenuIsOpen(!dropMenuIsOpen)}>
                    <Image width={30} height={30} src="https://img.icons8.com/ios-filled/100/menu--v1.png" alt="menu--v1"/>
                    <div className={`${styles.dropMenu} absolute right-0 ${dropMenuIsOpen ? styles.dropMenuOpen : styles.dropMenuClose}`}>
                        <ul className={styles.contenuDropMenu}>
                            <a href="#banner">Accueil</a>
                            <a href="#parcours">À propos</a>
                            <a href="#technos">Technologies</a>
                            <a href="#projets">Mes projets</a>
                            <a className="md:hidden inline-block" id={styles.phoneInDropMenu} href="tel:4386801683">(438) 680 - 1683</a>
                            {/*<a href="#contact">Contact</a>*/}
                        </ul>
                    </div>
                </nav>
              </header>
        </div>
    )
  }