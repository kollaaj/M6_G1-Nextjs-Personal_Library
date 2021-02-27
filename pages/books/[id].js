import Link from "next/link"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WantToReadLink from '../../components/links/WantToReadLink'
import FinishedReadingLink from '../../components/links/FinishedReadingLink'
import CurrentlyReadingLink from '../../components/links/CurrentlyReadingLink'
import styles from '../../styles/components/id.module.scss'


export default function Book({ book }) {
  const renderImage = () => {
    const src = book.volumeInfo.imageLinks.thumbnail || book.volumeInfo.imageLinks.small;
    
    if (book.volumeInfo.imageLinks) {
      return <img className={styles.thumbnail} src={src} alt='Book cover' />
    } else {
      return <div className={styles.noImg}>
        <p>{ title }</p>
        { authors && authors.map((author) => (
          <p>{ author }</p>
        )) }
      </div>
     }
    }

  return (
    <div className={styles.idPage}>
      <Header></Header>
      <main className={styles.main}>
        <div >
          { renderImage() }
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>{book.volumeInfo.title}</h2>
          <h3>{book.volumeInfo.authors}</h3>
          <p className={styles.description} dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}></p>
          <div>
            <div className={styles.pages}>
              <h5>Pages</h5>
              <p className={styles.pageCount}>{book.volumeInfo.pageCount}</p>
            </div>
            <div className={styles.rating}>
              <h5>Average rating</h5>
              <p className={styles.averageRating}>{book.volumeInfo.averageRating}</p>
            </div>
          </div>
          <div className={styles.add}>
            <WantToReadLink book={book} />
            <FinishedReadingLink book={book} />
            <CurrentlyReadingLink book={book} />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

// for each individual page: get the data for that page
export async function getServerSideProps({ params }) {
  const { id } = params;

  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const book = await res.json();

  return {
    props: { book },
  };
}
