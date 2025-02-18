import Image from "next/image";
import tayImage from './tay_speak_now.jpg'
import styles from './about.module.css'

export default function AboutPage() {
    return <article className={styles.root}>
        <Image src={tayImage} alt="taylor speak now" loading='eager' className={styles.image} />
        <div className={styles.text}>{"Speak Now (Taylor's Version) consists of songs written solely by Swift. She produced the re-recorded versions of 16 tracks from the deluxe edition of Speak Now with Christopher Rowe, and six previously-unreleased 'From the Vault' tracks with Jack Antonoff and Aaron Dessner. Two vault tracks respectively features Fall Out Boy and Hayley Williams. A country pop and pop rock album, Speak Now (Taylor's Version) incorporates various rock styles such as emo, pop-punk, and alternative rock. Its sound is characterized by prominent electric guitars, dynamic drums, and strings. Reflecting Swift's adolescence, the songs document emotions of affection, grievance, and heartbreak, forming a loose concept album of unspoken confessions."}</div>
    </article>
}