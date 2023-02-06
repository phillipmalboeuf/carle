import { content } from './content';

export default function Head({ params: { locale } }: { params: { locale: string } }) {
  const lang = (locale && locale[0] as 'en' | 'fr') || 'fr'
  return (
    <>
      <title>Atelier Carle</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" key="description" content={content.description[lang]} />
      <link rel="icon" href="/favicon.png" type="image/png" />

      <meta property="og:title" content="Atelier Carle"/>
      <meta property="og:description" key="og:description" content={content.description[lang]} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content="https://ateliercarle.ca/OG.png"/>
      <meta property="og:url" content="https://ateliercarle.ca"/>
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
