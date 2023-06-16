import styles from './Info.module.scss';

type Props = {
  project: null | Project;
};

export default function Info({project}: Props) {
  return (
    <div className={styles.infoBox}>
      <h2 className={styles.title}>{project?.title}</h2>
      <div className={styles.techBox}>
        <h3 className={styles.titleTech}>Technologie: </h3>
        {project?.tech.map((item) => {
          return <h3 className={styles.tech}>{item},</h3>;
        })}
      </div>

      <p className={styles.info}>
        <span className={styles.infoTitle}>Opis:</span> {project?.info}
      </p>
    </div>
  );
}
