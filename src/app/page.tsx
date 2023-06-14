import styles from './page.module.scss';
import Header from '@/app/components/Header/Header';
import AboutMeContainer from '@/app/components/AboutMeContainer/AboutMeContainer';
import Crab from '@/components/Crab/Crab';

export default function Home() {
  return (
    <main className={styles.test}>
      <Header />
      <AboutMeContainer />
      <Crab
        page = 'home'
        texts={[
          'dzień doberek',
          ' miło mi ciebie poznać ',
          'zapraszam  na moją stronę pełną frajdy ',
          'jest tutaj duzoooo fajnych projektów',
        ]}
      />
    </main>
  );
}
