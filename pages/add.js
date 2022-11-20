import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/add.module.css'

function Add() {
    return (
        <div className={styles.container}>

            adding

            <Link href="/">
                <button className={styles.backButton}>Back</button>
            </Link>

            
        </div>
    )
}

export default Add