import HeaderInfo from '../HeaderInfo/HeaderInfo';
import styles from './Header.module.scss';

type Props = {};

export default function Header({}: Props) {
  return (
    <div className={styles.header}>
      <div className={styles.imgBox}></div>

      <h1 className={styles.title}>Moje Portfolio</h1>

      <HeaderInfo />
    </div>
  );
}
