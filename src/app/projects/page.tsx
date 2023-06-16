import styles from './page.module.scss';
import Header from './components/Header/Header';
import ProjectList from './components/ProjectList/ProjectList';
import Crab from '@/components/Crab/Crab';
type Props = {};

export default function page({}: Props) {
  const crabText = [
    'Tutaj znajdziesz moje projekty',
    'kliknij w zdjęcie aby zobaczysz',
    'szczegóły danego projektu ',
    'ps : piesek wabi się Sofi',
  ];

  return (
    <main className={styles.portfolioPage}>
      <Header />
      <ProjectList />
      <Crab page='portfolio' texts={crabText} />
    </main>
  );
}
