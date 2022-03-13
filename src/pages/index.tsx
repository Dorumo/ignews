import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribrButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Listen</span>
          <h1>News about the <span>React</span>world.</h1>
          <p>
            Get access to all the publications. <br />
            <span>for $9.90 montlhy</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}
