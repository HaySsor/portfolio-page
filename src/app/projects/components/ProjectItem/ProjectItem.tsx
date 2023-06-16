'use client';
import Image from 'next/image';
import styles from './ProjectItem.module.scss';
import Link from 'next/link';

type Props = {
  project: Project;
};

export default function ProjectItem({project}: Props) {
  const {title, id, photoSrc} = project;

  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h3>{title}</h3>
      </div>
      <div className={styles.photoBox}>
        <Link href={`/project/${id}`}>
          <Image
            src={photoSrc}
            alt='.'
            fill
            placeholder='blur'
            blurDataURL='/Spinner.svg'></Image>
        </Link>
      </div>
    </div>
  );
}
