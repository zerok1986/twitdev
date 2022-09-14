import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/twitdev-logo.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>twitdev 🐦</title>
        <meta name="description" content="a platform for dev twitters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.background}>
        <main className={styles.container}>
          <Image src={logo} alt='logo' width='160px' height='120px' placeholder='blur'/>
          <h1 className={styles.title}>
            <Link href="/" target='blank'>twitdev</Link>
          </h1>
          <h2>Talk about development with developers 👨‍💻👩‍💻</h2>
          <nav className={styles.nav}>
            <Link href='/timeline'>
              timeline 📰
            </Link>
          </nav>
        </main>
      </div>
    </div>
  )
}
