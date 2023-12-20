import Background from "@/app/components/Background";
import styles from "./Parcours.module.css";

export default function Parcours() {
    return(
      <Background>
          <section className={styles.sectionExperiences}>
              <div className="flex gap-2 flex-col">
                  <h2>🎓 Éducation</h2>
                  <div className="p-4">
                      <h3>Conception et Développement des sites Web</h3>
                      <span className="justify-between flex">
                          <p>AEC | Collège Maisonneuve</p>
                          <p>02.2021 - 08.2023</p>
                      </span>
                  </div>
                  <div className="p-4">
                      <h3>Technique de développement des applications Web et mobiles</h3>
                      <span className="justify-between flex">
                          <p>DEC | Collège Rosemont</p>
                          <p>2018 - 2020</p>
                      </span>
                  </div>
              </div>
              <div>
                  <h2>👔 Expérience Professionnelle</h2>
                  <div className="p-4">
                      <h3>Full Stack Web Développeur</h3>
                      <span className="justify-between flex">
                          <p>Club Cuisine BCBG, Laval</p>
                          <p>08.2023 - maintenant</p>
                      </span>
                  </div>
                  <div className="p-4">
                      <h3>Full Stack Web Développeur</h3>
                      <span className="justify-between flex">
                          <p>Gofbee Inc, Montréal</p>
                          <p>05.2023 - 08.2023</p>
                      </span>
                  </div>
              </div>
          </section>
      </Background>
    );
}