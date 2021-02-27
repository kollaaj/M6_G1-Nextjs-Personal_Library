import React from 'react'
import Link from "next/link"
import styles from '../../styles/components/CurrentlyReading.module.scss'
import FinishedReadingLink from '../links/FinishedReadingLink'
import RemoveLink from '../links/RemoveLink'

export default function CurrentlyReadingCard({ book, strapiId }) {
  const renderImage = () => {
    const src = book.volumeInfo.imageLinks.small || book.volumeInfo.imageLinks.thumbnail;

    if (book.volumeInfo.imageLinks) {
      return <img className={styles.small} src={src} alt='Book cover' />
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
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <Link href={`/books/${book.id}`}> 
            { renderImage() }
          </Link>
        </div>  
        <div className={styles.text}>
          <h2 className={styles.title}>{book.volumeInfo.title}</h2>
          <h3>{book.volumeInfo.authors}</h3>
          <p className={styles.description} dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}></p>
          <div className={styles.pagerating}>
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
            <FinishedReadingLink strapiId={strapiId} book={book} />
            <RemoveLink collection='currently-readings' strapiId={strapiId} />
          </div>
        </div>
      </div>
    </div>
  )
}
