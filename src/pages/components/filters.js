import styles from '@/styles/Filters.module.scss';
import React from 'react';

export default function Filters({ name }) {
  const [click, setClick] = React.useState(false);

  return (
    <>
      <li onClick={() => setClick(!click)} className={click ? styles.active : styles.item}>
        {name}
      </li>
    </>
  );
}
