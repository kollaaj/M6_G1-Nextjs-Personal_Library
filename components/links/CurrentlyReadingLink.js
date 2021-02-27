import React from 'react'
import styles from '../../styles/components/Link.module.scss'

export default function CurrentlyReadingLink({ strapiId, book }) {
  async function onClickHandler(e) {
    const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;

    // add book to Currently Reading
    try {
      const res = await fetch(`${strapiHost}/currently-readings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ book })
      });
      if (res.status < 200 || res.status >= 300) {
        throw new Error(res.status.toString());
      }
      alert('Successfully added book to Currently Reading');
    } catch (err) {
      alert('An error occurred when adding the book to Currently Reading');
      return;
    }
    
    // remove book from Want to Read
    try {
      await fetch(`${strapiHost}/want-to-reads/${strapiId}`, { method: 'DELETE' });
    } catch (err) {
      // Do nothing
    }
    
    // Remove book from Finished Reading
    try {
      await fetch(`${strapiHost}/finished-readings/${strapiId}`, { method: 'DELETE' });
    } catch (err) {
      // Do nothing
    }
  }
  
  return (
    <a 
      className={styles.addTo}
      onClick={onClickHandler}>Currently reading +</a>
  )
}
