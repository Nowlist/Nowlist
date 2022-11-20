import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/header.module.css'

function Header() {
    return (
        <header className={styles.header}>

            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

        </header>
    )
}

export default Header