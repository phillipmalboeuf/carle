import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './page.module.css'

const videos = [
  'https://dispatchuploads.b-cdn.net/CS_QSPP_GND_90SEC_16082022_16_9.mp4',
  'https://dispatchuploads.b-cdn.net/CS_QSPP_GND_90SEC_16082022_16_9.mp4',
  'https://dispatchuploads.b-cdn.net/CS_QSPP_GND_90SEC_16082022_16_9.mp4'
]

const content = {
  titre: {
    fr: 'AtelierCarle',
  },
  nav: {
    locale: {
      fr: 'En',
      en: 'Fr'
    },
    old: {
      fr: 'Visiter l\'ancien site',
      en: 'Visit the previous site'
    }
  }
}

let count = 0

export default function Home({ params: { locale } }: { params: { locale: string[] } }) {
  const lang = (locale && locale[0] as 'en' | 'fr') || 'fr'
  count = (count + 1) % 3

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <a href={lang === 'en' ? '/fr' : '/en'}>
          {content.nav.locale[lang]}
        </a>
        <a href='/'>
          <h1 className={styles.title}>
            AtelierCarle
          </h1>
        </a>
        <a href=''>{content.nav.old[lang]}</a>
      </nav>

      <main className={styles.main}>
        <p>Alain Carle</p>
      </main>

      <video className={styles.video} src={videos[count]} autoPlay playsInline muted loop></video>

      <footer className={styles.footer}>
        <nav>
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
        </nav>
      </footer>
    </div>
  )
}
