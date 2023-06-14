import React from 'react';
import styles from './page.module.scss';
import Header from './components/Header/Header';
import ProjectList from './components/ProjectList/ProjectList';
import Crab from '@/components/Crab/Crab';
type Props = {};

export default function page({}: Props) {
  return (
    <main className={styles.portfolioPage}>
      <Header />
      <ProjectList />
      <Crab
        page='portfolio'
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
