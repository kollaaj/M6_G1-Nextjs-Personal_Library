import React from 'react'
import Link from "next/link"
import RemoveLink from '../links/RemoveLink'
import WantToReadLink from '../links/WantToReadLink'
import CurrentlyReadingLink from '../links/CurrentlyReadingLink'
import styles from '../../styles/components/SearchResultCard.module.scss'

export default function FinishedReadingCard({ book, strapiId }) {
  const renderImage = () => {
    if (book.volumeInfo.imageLinks) {
      return <img className={styles.thumbnail} src={book.volumeInfo.imageLinks.thumbnail} alt='Book cover' />
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
      <div className={styles.text}>
        <Link href={`/books/${book.id}`}>
          { renderImage() }
        </Link>
        <div className={styles.add}>
          <WantToReadLink strapiId={strapiId} book={book} />
          <CurrentlyReadingLink strapiId={strapiId} book={book} />
          <RemoveLink collection='finished-readings' strapiId={strapiId} />
        </div>
      </div>
    </div>
  )
}
