'use client'
import Background from "@/app/[locale]/components/Background";
import styles from "./Parcours.module.css";
import { motion } from "framer-motion";
const leftIntroPictureVariants = {
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

const rightIntroPictureVariants = {
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

export default function Parcours({textes}) {
    return(
      <Background>
          <section className={styles.sectionExperiences} id="parcours">
              <motion.div className="flex flex-col"
                          initial="hide"
                          whileInView="show"
                          exit="hide"
                          variants={leftIntroPictureVariants}>
                  <h2>🎓 {textes.educ}</h2>
                  <div className="p-4">
                      <h3>{textes.aec_name}</h3>
                      <span className="justify-between flex">
                          <p>AEC | Collège Maisonneuve</p>
                          <p className="te">02.2021 - 08.2023</p>
                      </span>
                  </div>
                  <div className="p-4">
                      <h3>{textes.dec_name}</h3>
                      <span className="justify-between flex">
                          <p>DEC | Collège Rosemont</p>
                          <p>2018 - 2020</p>
                      </span>
                  </div>
                  <div className="p-4">
                      <h3>{textes.java_name}</h3>
                      <span className="justify-between flex">
                          <p>JavaRush Online Courses</p>
                          <p>2022 - 2024</p>
                      </span>
                  </div>
              </motion.div>
              <motion.div
                  initial="hide"
                  whileInView="show"
                  exit="hide"
                  variants={rightIntroPictureVariants}>
                  <h2>👔 {textes.work_exp}</h2>
                  <div className="p-4">
                      <h3>{textes.profile}</h3>
                      <span className="justify-between flex">
                          <p>Club Cuisine BCBG, Laval</p>
                          <p>08.2023 - 03.2024</p>
                      </span>
                  </div>
                  <div className="p-4">
                      <h3>{textes.profile}</h3>
                      <span className="justify-between flex">
                          <p>Gofbee Inc, Montréal({textes.remote})</p>
                          <p>05.2023 - 08.2023</p>
                      </span>
                  </div>
                  <div className="p-4">
                      <h3>{textes.profile_2}</h3>
                      <span className="justify-between flex">
                          <p>Le Survivaliste Inc, Montréal({textes.remote})</p>
                          <p>04.2022 - 05.2023</p>
                      </span>
                  </div>
              </motion.div>
          </section>
      </Background>
    );
}