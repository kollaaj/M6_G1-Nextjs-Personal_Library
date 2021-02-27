import React from 'react'
import styles from '../../styles/components/Link.module.scss'

export default function WantToReadLink({ strapiId, book }) {
  async function onClickHandler(e) {
    const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;

    // add book to Want to Read
    try {
      const res = await fetch(`${strapiHost}/want-to-reads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ book })
      });
      if (res.status < 200 || res.status >= 300) {
        throw new Error(res.status.toString());
      }
      alert('Successfully added book to Want to Read');
    } catch (err) {
      alert('An error occurred when adding the book to Want to Read');
      return;
    }
    
    // remove book from Currently Reading
    try {
      await fetch(`${strapiHost}/currently-readings/${strapiId}`, { method: 'DELETE' });
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
      onClick={onClickHandler}>Want to read +</a>
  )
}
