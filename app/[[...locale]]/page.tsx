'use client';

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
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
    },
  },
  content: {
      fr: `With a view to continuity and consolidation of achievements, Alain Carle is joining forces with five key collaborators to launch a new inclusive agency looking to the future. 

A long-standing partnership is now formalized between the founder, Abel Bravo-Muñoz, Leonor Jara, Isaniel Lévesque, Alexandre Lemoyne and Gabriel Ostiguy, thus ensuring the sustainability of a reflective practice developed over the years. 

To underline this evolution and in order to allow the inclusive conceptual approach which unites all the partners and members of the team, Alain Carle Architecte today presents a new identity and becomes AtelierCarle.`
  }
}

let count = 0

export default function Home({ params: { locale } }: { params: { locale: string[] } }) {
  const lang = (locale && locale[0] as 'en' | 'fr') || 'fr'
  count = (count + 1) % 3
  
  let video: HTMLVideoElement = null
  const [muted, setMuted] = useState<Boolean>()

  function setVideo(element: HTMLVideoElement) {
    video = element
    setMuted(video?.muted)
  }

  function muteToggle() {
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div>
          <a className={styles.button} href={lang === 'en' ? '/fr' : '/en'}>
            {content.nav.locale[lang]}
          </a>
          &nbsp;&nbsp;
          {/* <button className={styles.button} onClick={muteToggle}>{muted ? 'Unmute' : 'Mute'}</button> */}
        </div>
        {/* <a href='/'></a> */}
        <a href=''>{content.nav.old[lang]}</a>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          AtelierCarle
        </h1>

        <p className={styles.content}>{content.content[lang]}</p>
      </main>

      {/* <video ref={setVideo} className={styles.video} src={videos[count]} autoPlay playsInline muted loop></video> */}

      <footer className={styles.footer}>
        <nav>
          <a href=''>400 - 3643 Boul. Saint-Laurent<br />Montreal, Quebec H2X 2V5</a>
          <div>
            <a href=''>+1 514 989 1739</a><br />
            <a href=''>info@ateliercarle.ca</a>
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
