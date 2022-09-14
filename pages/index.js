import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>twitdev 🐦</title>
        <meta name="description" content="a platform for dev twitters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1 className={styles.title}>
          <a href="https://www.twitter.com" target='blank'>twitdev</a>
        </h1>
        <nav className={styles.nav}>
          <Link href='/timeline'>
            timeline 📰
          </Link>
        </nav>
      </main>
    </div>
  )
}
