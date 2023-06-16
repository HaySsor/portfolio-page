import styles from './page.module.scss';
import Header from '@/app/components/Header/Header';
import AboutMeContainer from '@/app/components/AboutMeContainer/AboutMeContainer';
import Crab from '@/components/Crab/Crab';

export default function Home() {
  const crabText = [
    'Hello 👋🏻',
    'miło mi że odwiedziłeś moją stronę',
    'mam na imie Przemek',
    ' a to moja strona portfolio',
    'tutaj znajduje się krótkie info o mnie',
  ];

  return (
    <main className={styles.test}>
      <Header />
      <AboutMeContainer />
      <Crab page='home' texts={crabText} />
    </main>
  );
}
