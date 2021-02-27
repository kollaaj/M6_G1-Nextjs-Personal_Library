import Header from '../components/Header'
import Footer from '../components/Footer'
import WantToReadCard from '../components/cards/WantToReadCard'
import styles from '../styles/components/Reading.module.scss'

export default function WantToRead({ books }) {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <h2 className={styles.h2}>Want to Read</h2>
        <div className={styles.books}>
          { books && books.map((book) => (
            <WantToReadCard
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

  const res = await fetch(`${strapiHost}/want-to-reads`);
  const books = await res.json();

  return {
    props: { books },
  };
} 
