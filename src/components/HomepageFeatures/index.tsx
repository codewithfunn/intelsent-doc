import styles from "./styles.module.css";
import FeatureCards from "../FeatureCards";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <FeatureCards />
      </div>
    </section>
  );
}
