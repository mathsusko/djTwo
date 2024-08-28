  import { Play, SpeakerHigh } from '@phosphor-icons/react'
  import { motion } from 'framer-motion'
  import styles from './Discografia.module.css'

  // Define o conteúdo das músicas com URL de áudio
  const musicData = [
    {
      title: 'Nome da Música 1',
      production: 'Produção 1',
      imageUrl: '../src/assets/images/spotify.png',
      soundcloudUrl: '../src/assets/images/soundcloud.png',
      audioUrl:
        'https://7800-2804-1b2-1847-aeb4-6c1d-5129-5e05-1fb2.ngrok-free.app/soundcloud_discografia/1'
    },
    {
      title: 'Nome da Música 2',
      production: 'Produção 2',
      imageUrl: '../src/assets/images/spotify.png',
      soundcloudUrl: '../src/assets/images/soundcloud.png',
      audioUrl:
        'https://7800-2804-1b2-1847-aeb4-6c1d-5129-5e05-1fb2.ngrok-free.app/soundcloud_discografia/2'
    },
    {
      title: 'Nome da Música 2',
      production: 'Produção 2',
      imageUrl: '../src/assets/images/spotify.png',
      soundcloudUrl: '../src/assets/images/soundcloud.png',
      audioUrl:
        'https://7800-2804-1b2-1847-aeb4-6c1d-5129-5e05-1fb2.ngrok-free.app/soundcloud_discografia/2'
    },
    {
      title: 'Nome da Música 2',
      production: 'Produção 2',
      imageUrl: '../src/assets/images/spotify.png',
      soundcloudUrl: '../src/assets/images/soundcloud.png',
      audioUrl:
        'https://7800-2804-1b2-1847-aeb4-6c1d-5129-5e05-1fb2.ngrok-free.app/soundcloud_discografia/2'
    }
    // Adicione mais músicas conforme necessário
  ]

  export default function Discografia() {
    // Define a animação para os cards
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }

    return (
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.discografia}>
            <div className={styles.spotify}>
              <h2>DISCOGRAFIA</h2>

              <div className={styles.cards}>
                {musicData.map((music, index) => (
                  <motion.div
                    key={index}
                    className={styles.card}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    transition={{ duration: 0.5, delay: index * 0.3 }} // Define o atraso entre os cards
                  >
                    <div
                      className={styles.fotoMusic}
                      style={{ backgroundImage: `url(${music.imageUrl})` }}
                    ></div>

                    <div className={styles.descMusic}>
                      <h2>{music.title}</h2>
                      <p>{music.production}</p>
                    </div>

                    <audio controls>
                      <source
                        src={music.audioUrl}
                        type="audio/mpeg"
                      />
                      Seu navegador não suporta o elemento de áudio.
                    </audio>

                    <div className={styles.cta}>
                      <img
                        src={music.imageUrl}
                        alt="Spotify"
                      />
                      <img
                        src={music.soundcloudUrl}
                        alt="SoundCloud"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
