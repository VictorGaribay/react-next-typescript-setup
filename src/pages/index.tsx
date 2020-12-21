import Head from 'next/head'
import React from 'react'
import RocketseatLogo from '../assets/oda.png'
import PruebaSvg from '../assets/prueba.svg'
import styles from '../styles/Home.module.css'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <PruebaSvg />
      <img src={RocketseatLogo} alt="" />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure </p>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Container>
  )
}

export default Home
