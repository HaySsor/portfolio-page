import React from 'react';
import styles from './page.module.scss';
import Header from './components/Header/Header';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';

type Props = {};

const projectsList = [
  {
    title: 'Bowling Centrum',
    info: 'INFO',
    photoSrc: '/bowling/img1.png',
  },
  {
    title: 'Formularz Reklamacyjny',
    info: 'INFO',
    photoSrc: '/reklamacje/img1.png',
  },
  {
    title: 'IMDB Clone',
    info: 'INFO',
    photoSrc: '/imdb/img1.png',
  },
  {
    title: 'Crab Calory',
    info: 'INFO',
    photoSrc: '/Calory/img1.png',
  },
  {
    title: 'Van Borow',
    info: 'INFO',
    photoSrc: '/Van/img1.png',
  },
];

export default function page({}: Props) {
  return (
    <main className={styles.portfolioPage}>
      <Header />
      <div className={styles.wrapper}>
        {projectsList.map((project) => (
          <ProjectContainer project={project} />
        ))}
      </div>
    </main>
  );
}
