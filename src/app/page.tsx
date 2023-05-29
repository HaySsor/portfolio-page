import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import AboutMeContainer from '@/components/AboutMeContainer/AboutMeContainer';

export default function Home() {
  return (
    <main className={styles.test}>
      <Header />
      <AboutMeContainer />
    </main>
  );
}
