import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <a href='/'>
          <h1 className={styles.title}>
            AtelierCarle
          </h1>
        </a>
        <a href=''>400 boul Saint-Laurent</a>
        <div>
          <a href=''>514</a><br />
          <a href=''>info@</a>
        </div>
        <div>
          <a href=''>Instagram</a><br />
          <a href=''>Facebook</a>
        </div>
        <a href=''>LinkedIn</a>
        <a href=''>Visiter l'ancien site</a>
      </nav>

      <main className={styles.main}>
        <p>Alain Carle</p>
      </main>

      <video className={styles.video} src='https://dispatchuploads.b-cdn.net/CS_QSPP_GND_90SEC_16082022_16_9.mp4' autoPlay playsInline muted loop></video>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
