import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/Search'
import SearchResults from '../components/SearchResults'
import styles from '../styles/Home.module.scss'

export default function Page() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className={styles.container}>
      <Header/>
      <section className={styles.section}>
        <h1>Discover books you love</h1>
        <h3>Enter a book you like and we will scoure the world wide web for </h3>
        <h3>it so you can build up your personal library.</h3>
        <Search setSearchResults={setSearchResults} />
      </section>
      <main className={styles.main}>
        <SearchResults searchResults={searchResults} />
      </main>
      <Footer></Footer>
    </div>
  )
}
