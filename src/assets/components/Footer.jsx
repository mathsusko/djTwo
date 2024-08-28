import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.content}>
      <div className={styles.footer}>
        <div className={styles.pages}>
          <div className={styles.page}>
            <h2>Páginas</h2>
            <p>Início</p>
            <p>Gigs</p>
            <p>Discografia</p>
            <p>Contrate</p>
          </div>
          <div className={styles.page}>
            <h2>Redes</h2>
            <p>Instagram</p>
            <p>Spotify</p>
            <p>SoundClound</p>
          </div>

          <div className={styles.page}></div>
        </div>

        <div className={styles.copy}>
          <p>© Copyright 2024, All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}
