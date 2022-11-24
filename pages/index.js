import Head from 'next/head'
import Image from 'next/image'
import Map from '../components/Map/Map'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Prueba vercel</h2>

      <Map />
    </div>
  )
}
