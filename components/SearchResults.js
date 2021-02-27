import React from 'react'
import SearchResultCard from './cards/SearchResultCard'
import styles from '../styles/components/SearchResults.module.scss'

export default function SearchResults({ searchResults }) {
  return (
    <div className={styles.results}>
      {searchResults && searchResults.items && searchResults.items.map((book) => (
        <SearchResultCard
          key={ book.id }
          book={ book }
          />
      ))}
    </div>
  )
}
