import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales neque nisl, at vulputate nulla placerat ac. Fusce eros nulla, semper ut pulvinar ac, dapibus volutpat turpis.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales neque nisl, at vulputate nulla placerat ac. Fusce eros nulla, semper ut pulvinar ac, dapibus volutpat turpis.</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </Fragment>

  )
}
