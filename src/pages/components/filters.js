import styles from '@/styles/Filters.module.scss';

export default function Filters({ name }) {
  return (
    <>
      <li className={styles.item}>{name}</li>
    </>
  );
}
