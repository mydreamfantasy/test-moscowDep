import React from 'react';
import styles from '@/styles/News.module.scss';
import dayjs from 'dayjs';
import Modal from './modal';
const humanizeReleaseDate = (date) => dayjs(date).format('DD.MM.YYYY');

export default function News(props) {
  console.log(props);
  const { created, country, city, title } = props;

  const date = props.created;

  const [isModal, setModal] = React.useState(false);

  return (
    <>
      <li className={styles.item}>
        <div className={styles.container}>
          <p className={styles.text}>
            {country}, {city}
          </p>
          <h2 className={styles.title}>{title}</h2>
          <button onClick={() => setModal(true)} className={styles.link} href="">
            Посмотреть
          </button>
        </div>
        <span className={styles.badge}>Добавлено {humanizeReleaseDate(created)}</span>
      </li>
      {isModal && <Modal isModal={isModal} setModal={setModal} {...props} />}
    </>
  );
}
