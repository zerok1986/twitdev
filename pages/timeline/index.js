import styles from '../../styles/Timeline.module.css'
import Link from 'next/link'

export default function Timeline({ username }) {
  return (
    <>
      <h1 className={styles.title}>This is the timeline of {username}</h1>
      <Link href='/'>&lt; Go Home</Link>
    </>
  )
}

Timeline.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
    .then((res) => res.json())
}