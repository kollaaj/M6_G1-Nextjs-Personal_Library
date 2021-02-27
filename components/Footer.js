import styles from '../styles/components/Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

  return (
    <div className={styles.footerTest}>
      <div className={styles.lineupper}></div>
      <div className={styles.footeImages}>
        <div  className={styles.image}>
        <Link href='/want-to-read'><h3>Want to Read</h3></Link>
          <Link href='/want-to-read'><Image src="/openbook.svg" height={135} width={284}  alt="image"/></Link>
        </div>
        <div  className={styles.image}>
          <Link href='/currently-reading'><h3>Currently Reading</h3></Link>
          <Link href="/currently-reading"><Image src="/now.svg" height={135} width={284}  alt="image"/></Link>
        </div>
        <div  className={styles.image}>
          <Link href='/finished-reading'><h3>Finished Reading</h3></Link>
          <Link href="/finished-reading"><Image src="/openbook.svg" height={135} width={284}  alt="image"/></Link>
        </div>
      </div>
      <div className={styles.linelower}></div>
      <div className={styles.footer}>
        <p>MyLibrary  ®</p>
      </div>
    </div>
  )
}