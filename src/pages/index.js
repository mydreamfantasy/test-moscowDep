import React from 'react';
import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import Filters from './components/filters';
import News from './components/news';
import news from '../data.json';

export default function Home() {
  const [show, setShow] = React.useState(false);

  const application = news.map((obj) => obj.application);
  const applicationSort = application.filter(function (item, pos) {
    return application.indexOf(item) == pos;
  });

  const newsSlice = news.slice(0, 8).map((obj) => <News key={obj.id} {...obj} />);
  const newsAll = news.slice(0, 16).map((obj) => <News key={obj.id} {...obj} />);

  return (
    <>
      <Head>
        <title>Новости</title>
        <meta name="description" content="News about everything" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Montserrat-Regular.ttf" as="font" />
        <link rel="preload" href="/fonts/Montserrat-Bold.ttf" as="font" />
        <link rel="preload" href="/fonts/Montserrat-MediumItalic.ttf" as="font" />
      </Head>
      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Заголовок <span>({news.length})</span>
          </h1>
          <div className={styles.filters}>
            <ul className={styles.list}>
              {applicationSort.map((name) => (
                <Filters key={name} name={name} />
              ))}
            </ul>
            <div>
              <button className={styles.reset}>
                Сбросить <br /> все фильтры
              </button>
            </div>
          </div>
          <div>
            <ul className={styles.listNews}> {show ? newsAll : newsSlice}</ul>
          </div>
          {news.length > 8 && (
            <button onClick={() => setShow(!show)} className={styles.button}>
              <span>{show ? 'Свернуть все' : 'Показать все'}</span>
            </button>
          )}
        </div>
      </main>
    </>
  );
}
