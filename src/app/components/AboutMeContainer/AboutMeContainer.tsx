import styles from './AboutMeContainer.module.scss';
import AboutMeInfo from '../AboutMeInfo/AboutMeInfo';
import AboutMeSkills from '../AboutMeSkills/AboutMeSkills';
import Image from 'next/image';
type Props = {};

export default function AboutMeContainer({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <Image src='/crab.png' width={30} height={30} alt='Crab Icon' />
        <h3 className={styles.title}>O Mnie</h3>
      </div>
      <AboutMeInfo />
      <AboutMeSkills />
    </div>
  );
}
