import styles from './page.module.scss';
import Header from '@/app/components/Header/Header';
import AboutMeContainer from '@/app/components/AboutMeContainer/AboutMeContainer';

export default function Home() {
  return (
    <main className={styles.test}>
      <Header />
      <AboutMeContainer />
    </main>
  );
}
