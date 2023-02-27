import React from 'react';
import styles from '@/styles/News.module.scss';
import dayjs from 'dayjs';
import Modal from './Modal';

const humanizeReleaseDate = (date) => dayjs(date).format('DD.MM.YYYY');

export default function News(props) {
  const { created, country, city, title, updated } = props;

  const [isModal, setModal] = React.useState(false);

  return (
    <>
      <li className={styles.item}>
        <div className={styles.container}>
          <p className={styles.text}>
            {country}, {city}
          </p>
          <h2 className={styles.title}>{title}</h2>
          <button onClick={() => setModal(true)} className={styles.link}>
            Посмотреть
          </button>
        </div>

        <span className={styles.badge}>
          {updated
            ? `Обновлено ${humanizeReleaseDate(updated)}`
            : `Добавлено ${humanizeReleaseDate(created)}`}
        </span>
      </li>
      {isModal && <Modal isModal={isModal} setModal={setModal} {...props} />}
    </>
  );
}
