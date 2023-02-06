'use client';

import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { SVG } from '../../components/svg'
import { content } from './content';
import styles from './page.module.css'

const videos = {
  desktop: [
    'https://dispatchuploads.b-cdn.net/AtelierCarle_Desktop_1920x1080_A.mp4',
    'https://dispatchuploads.b-cdn.net/AtelierCarle_Desktop_1920x1080_B.mp4',
    'https://dispatchuploads.b-cdn.net/AtelierCarle_Desktop_1920x1080_C_3.mp4'
  ],
  mobile: [
    'https://dispatchuploads.b-cdn.net/AtelierCarle_Mobile_1080x1920_A.mp4',
    'https://dispatchuploads.b-cdn.net/AtelierCarle_Mobile_1080x1920_B.mp4',
    'https://dispatchuploads.b-cdn.net/AtelierCarle_Mobile_1080x1920_C_2.mp4'
  ]
}

export default function Home({ params: { locale } }: { params: { locale: string[] } }) {
  const lang = (locale && locale[0] as 'en' | 'fr') || 'fr'
  
  let video: HTMLVideoElement = null
  const div = useRef<HTMLDivElement>()
  const [muted, setMuted] = useState<Boolean>()
  const [v, setV] = useState<string>()

  function setVideo(element: HTMLVideoElement) {
    video = element
    const r = Math.floor(Math.random() * 3)
    if (!v) {
      setV(window.matchMedia("(orientation: portrait)").matches ? videos.mobile[r] : videos.desktop[r])
    }
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
            {lang === 'en' ? <SVG k='fr' label='Français' /> : <SVG k='en' label='English' />}
          </a>
          &nbsp;&nbsp;
          <button className={styles.button} onClick={muteToggle}>{muted ? <SVG k='off' label='Unmute' /> : <SVG k='on' label='Mute' />}</button>
        </div>
        {/* <a href='/'></a> */}
        <a href='https://alaincarle.ca/a-propos/' target='_blank' rel='noopener'><u>{content.nav.old[lang]}</u> &nbsp;<SVG k='arrow' label='Externe' /></a>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <SVG k='logo' label='AtelierCarle' />
        </h1>

        <p className={styles.content} ref={div}>{content.content[lang]}</p>
      </main>
      
      <video ref={setVideo} className={styles.video} src={v} autoPlay playsInline muted loop></video>

      <footer className={styles.footer}>
        <nav>
          <a href='https://goo.gl/maps/daqjFkbLnKjf2PcH7' target='_blank' rel='noopener'>400 - 3643 Boul. Saint-Laurent<br />Montreal, Quebec H2X 2V5</a>
          <div>
            <a href='tel:+1 514 989 1739' target='_blank' rel='noopener'>+1 514 989 1739</a><br />
            <a href='mailto:info@ateliercarle.ca' target='_blank' rel='noopener'>info@ateliercarle.ca</a>
          </div>
          <div>
            <a href='https://www.instagram.com/alaincarlearchitecte' target='_blank' rel='noopener'>Instagram</a><br />
            <a href='https://www.facebook.com/alaincarlearchitecte' target='_blank' rel='noopener'>Facebook</a>
          </div>
          {/* <div>
            <a href='https://www.linkedin.com/company/alain-carle-architecte/' target='_blank' rel='noopener'>LinkedIn</a><br />
            <a href='https://www.pinterest.ca/acarle1313/' target='_blank' rel='noopener'>Pinterest</a>
          </div> */}
        </nav>
      </footer>
    </div>
  )
}
