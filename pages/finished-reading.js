import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/components/Reading.module.scss'
import FinishedReadingCard from '../components/cards/FinishedReadingCard'

export default function FinishedReading({ books }) {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <h2 className={styles.h2}>Finished Reading</h2>
        <div className={styles.books}>
          { books && books.map((book) => (
            <FinishedReadingCard
              key={ book.id }
              strapiId={ book.id }
              book={ book.book }
            />
          ))}
          </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;

  const res = await fetch(`${strapiHost}/finished-readings`);
  const books = await res.json();

  return {
    props: { books },
  };
} 
