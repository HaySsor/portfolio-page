import React from 'react';
import styles from './page.module.scss';
import Header from './components/Header/Header';
import ProjectList from './components/ProjectList/ProjectList';
type Props = {};

export default function page({}: Props) {
  return (
    <main className={styles.portfolioPage}>
      <Header />
      <ProjectList />
    </main>
  );
}
