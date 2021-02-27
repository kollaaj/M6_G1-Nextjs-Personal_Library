import styles from '../styles/components/Search.module.scss'
import Image from 'next/image'

export default function Search({ setSearchResults }) {
  async function searchBooks(query) {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&printType=books&maxResults=25`)
    const data = await res.json()
    return data
  }
  
  async function searchKeyDownHandler(e) {
    // if user presses enter
    if (e.keyCode === 13) {
      // get value from textbox and trim whitespaces
      const query = e.target.value.trim()

      try {
        // if query is not empty then search via API else clear the search results
        const data = query !== ''
          ? await searchBooks(query)
          : []
  
        setSearchResults(data)
      } catch (err) {
        // show error message if search failed
        alert('Search failed')
      }
    }
  }

  return (
    <div className={styles.searchContainer} >
      <div className={styles.searchImg}>
        <Image src="/search.svg" width={24} height={24} alt="An SVG of an eye" />
      </div>
      <input
        type="text"
        placeholder="Enter a book you like and the site will try to find it..."
        className={styles.search}
        onKeyDown={searchKeyDownHandler} />
    </div>
  )
}
