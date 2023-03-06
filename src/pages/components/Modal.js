import styles from '@/styles/Modal.module.scss';
import DOMPurify from 'dompurify';

export default function Modal({
  setModal,
  country,
  city,
  title,
  description,
  direction,
  developer,
  application,
  object,
  solution,
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div>
          <div className={styles.header}>
            <span className={styles.badge}>{application}</span>
            <button onClick={() => setModal(false)} className={styles.button}></button>
          </div>
          <p className={styles.place}>
            {country}, {city}
          </p>
          <h2 className={styles.title}>{title}</h2>
          <div>
            <ul className={styles.box}>
              {object && (
                <li>
                  <h3 className={styles.boxTitle}>Объект внедрения</h3>
                  <p className={styles.boxText}>{object}</p>
                </li>
              )}
              {solution && (
                <li>
                  <h3 className={styles.boxTitle}>Применяемое решение</h3>
                  <p className={styles.boxText}>{solution.url}</p>
                </li>
              )}
              {developer && (
                <li>
                  <h3 className={styles.boxTitle}>Разработчик</h3>
                  <p className={styles.boxText}>{developer}</p>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className={styles.desc}>{direction}</h3>
            <div
              className={styles.descText}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
