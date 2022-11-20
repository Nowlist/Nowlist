import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/add.module.css'

import SongForm from '../lib/SongForm'

function Add() {
    return (
        <div className={styles.container}>

            <SongForm />

            <Link href="/">
                <button className={styles.backButton}>Back</button>
            </Link>

            
        </div>
    )
}

export default Add