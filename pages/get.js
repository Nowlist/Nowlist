import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const handleClick = async (event) => {
    event.preventDefault();

    const res = await fetch('/api/getSongs', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    });

    const result = await res.json();
    document.getElementById("songs").value = JSON.stringify(result);
    console.log(result);
}

function Add() {
    return (
        <div>

            <button onClick={handleClick}>get songs</button>

            <Link href="/">
                <button>Back</button>
            </Link>

            <textarea id="songs" name="songs">
            </textarea>
            
        </div>
    )
}

export default Add