import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.scss'


export default function AllBooks() {

  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <h2 className={styles.h2}>All the pretty books in your library</h2>
      </main>
      <Footer />
    </div>
  );
}