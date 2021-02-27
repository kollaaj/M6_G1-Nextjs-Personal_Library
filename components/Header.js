import styles from '../styles/components/Header.module.scss'
import Image from 'next/image'
import Link from './Link'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.link}>
        <Link href="/">
          <Image src="/now.svg" height={52.73} width={154}  alt="image"/>
        </Link>
      </div>
        <Link href='/want-to-read' >
          <a className={styles.link}>Want to Read</a>
        </Link>
      <Link href="/currently-reading">
        <a className={styles.link}>Reading Now</a>
      </Link>
      <Link href='/finished-reading' >
        <a className={styles.link}>Finished Reading</a>
      </Link>
    </header> 
  )
}
