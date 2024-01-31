'use client'
import styles from './Navigation.module.css';
import Image from "next/image";
import React, { useState } from 'react';
import LangSwitcher from "@/app/[locale]/components/LangSwitcher";

export default function Navigation({ textes }) {
    let [dropMenuIsOpen, setDropMenuIsOpen] = useState(false)

    return (
        <div className={styles.sectionHeader}>
              <header className={styles.navigation}>
                <h1 className="text-lg lg:text-2xl flex flex-col" ><span className=" text-primary font-bold">Full Stack</span><span>Web {textes.title}</span></h1>
                <h3 className="hidden md:inline-block" id={styles.phoneInHeader}>☎️<a href="tel:4386801683">(438)680-1683</a></h3>
                <span className="flex items-center">
                <LangSwitcher/>
                <nav className={styles.menu} onClick={() => setDropMenuIsOpen(!dropMenuIsOpen)}>
                    <Image width={30} height={30} className="aspect-square w-[20px] lg:w-[30px] " src="https://img.icons8.com/ios-filled/100/menu--v1.png" alt="menu--v1"/>
                    <div className={`${styles.dropMenu} absolute right-0 ${dropMenuIsOpen ? styles.dropMenuOpen : styles.dropMenuClose}`}>
                        <ul className={styles.contenuDropMenu}>
                            <a href="#banner">{textes.about}</a>
                            <a href="#parcours">{textes.exper}</a>
                            <a href="#projets">{textes.projects}</a>
                            <a href="#technos">{textes.skills}</a>
                            <a className="md:hidden inline-block" id={styles.phoneInDropMenu} href="tel:4386801683">(438) 680 - 1683</a>
                            {/*<a href="#contact">Contact</a>*/}
                        </ul>
                    </div>
                </nav>
                </span>
              </header>
        </div>
    )
  }