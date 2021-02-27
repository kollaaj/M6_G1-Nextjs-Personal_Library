import React from 'react'
import styles from '../../styles/components/Link.module.scss'

export default function RemoveLink({ collection, strapiId }) {
  async function onClickHandler(e) {
    const strapiHost = process.env.NEXT_PUBLIC_STRAPI_HOST;

    // remove book from Currently Reading
    try {
      const res = await fetch(`${strapiHost}/${collection}/${strapiId}`, { method: 'DELETE' });
      if (res.status < 200 || res.status >= 300) {
        throw new Error(res.status.toString());
      }
      alert('Successfully removed the book');
    } catch (err) {
      alert('An error occurred when removing the book')
    }
  }
  
  return (
    <a 
      className={styles.addTo}
      onClick={onClickHandler}>Remove -</a>
  )
}
