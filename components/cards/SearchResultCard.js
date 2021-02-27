import React from 'react'
import Link from "next/link"
import styles from '../../styles/components/SearchResultCard.module.scss'
import WantToReadLink from '../links/WantToReadLink'
import CurrentlyReadingLink from '../links/CurrentlyReadingLink'
import FinishedReadingLink from '../links/FinishedReadingLink'

export default function SearchResultCard({ book }) {
  const renderImage = () => {
    if (book.volumeInfo.imageLinks) {
      return <img className={styles.thumbnail} src={book.volumeInfo.imageLinks.thumbnail} alt='Book cover' />
    } else {
      return <div className={styles.noImg}>
          <p>{ book.volumeInfo.title }</p>
          { book.volumeInfo.authors && book.volumeInfo.authors.map((author) => (
            <p>{ author }</p>)) }
        </div>
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Link href={`/books/${book.id}`}> 
          { renderImage() }
        </Link>
        <div className={styles.add}>
          <WantToReadLink book={book} />
          <CurrentlyReadingLink book={book} />
          <FinishedReadingLink book={book} />
        </div>
      </div>
    </div>
  )
}
