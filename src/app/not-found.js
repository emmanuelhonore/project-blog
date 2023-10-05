import Link from 'next/link';
import styles from './notFound.module.css';

export default function NotFound() {
  return (
    <article className={styles.wrapper}>
      <div className={styles.page}>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </article>
  )
}