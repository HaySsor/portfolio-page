import Image from 'next/image';
import styles from './ProjectContainer.module.scss';
import {useEffect, useState} from 'react';
import Link from 'next/link';

type Props = {
  project: Project;
};

export default function ProjectContainer({project}: Props) {
  const {title, info, photoSrc} = project;

  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
      <div className={styles.photoBox}>
        <Image src={photoSrc} alt='.' fill></Image>
      </div>
    </div>
  );
}
