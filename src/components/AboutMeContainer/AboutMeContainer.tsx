import styles from './AboutMeContainer.module.scss';
import AboutMeInfo from '../AboutMeInfo/AboutMeInfo';
import AboutMeSkills from '../AboutMeSkills/AboutMeSkills';

type Props = {};

export default function AboutMeContainer({}: Props) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>O mnie</h3>
      <AboutMeInfo />
      <AboutMeSkills />
    </div>
  );
}
