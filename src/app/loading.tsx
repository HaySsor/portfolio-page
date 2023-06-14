import styles from './page.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <img className='h-96' src='/Spinner.svg' alt='loading' />
    </div>
  );
}
