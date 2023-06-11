import styles from './Info.module.scss';

type Props = {
  project: null | Project;
};

export default function Info({project}: Props) {
  return (
    <div className={styles.infoBox}>
      <h2 className={styles.title}>{project?.title}</h2>
      <p className={styles.info}>{project?.info}</p>
    </div>
  );
}
