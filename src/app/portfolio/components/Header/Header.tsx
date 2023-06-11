import Image from 'next/image';
import styles from './Header.module.scss';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.photoBox}>
        <Image src='/header.png' alt='.' fill className={styles.img}></Image>
      </div>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>Moje Projekty</h1>
        <div className={styles.blob}>
          <Image src='/blob.svg' alt='.' fill></Image>
        </div>
      </div>
    </header>
  );
}
