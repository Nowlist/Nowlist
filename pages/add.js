import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/add.module.css'

import AddForm from '../components/addForm'

function Add() {
    return (
        <div className={styles.container}>

            <AddForm />

            <Link href="/">
                <button className={styles.backButton}>Back</button>
            </Link>

            
        </div>
    )
}

export default Add