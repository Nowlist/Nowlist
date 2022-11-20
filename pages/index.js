import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/index.module.css'

function Index() {
    return (
        <div className={styles.container}>

            <Head>
                <title>Nowlist</title>
                <meta name="description" content="To Be Edited" /> // TODO
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Content />

            
        </div>
    )
}

function Content() {
    return (
        <div className={styles.content}>

            <h3 className={styles.topic}>What everyone is listening to right now</h3>

            <ol className={styles.list}>
                <li className={styles.item}>1</li>
                <li className={styles.item}>2</li>
                <li className={styles.item}>3</li>
            </ol>

            <Link href="/add">
                <button className={styles.addButton}>Add to this List</button>
            </Link>

        </div>
    )
}



export default Index