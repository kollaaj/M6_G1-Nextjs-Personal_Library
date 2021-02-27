import React from 'react'
import Link from "next/link"
import styles from '../../styles/components/SearchResultCard.module.scss'
import CurrentlyReadingLink from '../links/CurrentlyReadingLink'
import FinishedReadingLink from '../links/FinishedReadingLink'
import RemoveLink from '../links/RemoveLink'

export default function WantToReadCard({ book, strapiId }) {
  const renderImage = () => {
    if (book.volumeInfo.imageLinks) {
      return <img className={styles.thumbnail} src={book.volumeInfo.imageLinks.thumbnail} alt='Book cover' />
    } else {
      return <div className={styles.noImg}>
          <a>{ title }</a>
          { authors && authors.map((author) => (
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
          <CurrentlyReadingLink strapiId={strapiId} book={book} />
          <FinishedReadingLink strapiId={strapiId} book={book} />
          <RemoveLink collection='want-to-reads' strapiId={strapiId} />
        </div>
      </div>
    </div>
  )
}
