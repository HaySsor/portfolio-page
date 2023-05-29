import HeaderInfo from '../HeaderInfo/HeaderInfo';
import styles from './Header.module.scss';
import Image from 'next/image';

type Props = {};

export default function Header({}: Props) {
  return (
    <div className={styles.header}>
      <Image src='/image2.jpeg' alt='.' fill className={styles.background} />

      <h1 className={styles.title}>Moje Portfolio</h1>

      <HeaderInfo />
    </div>
  );
}
