import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HackerHouse: S22</title>
        <meta name="description" content="Site for HackerHouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.topNav}>
          <h1 className={styles.title}>
            Hacker<span className={styles.houseWord}>House</span>
          </h1>
          <div className={styles.rightTopNav}>
            <a>About</a>
            <a>Members</a>
            <a>Projects</a>
          </div>
        </div>

        <p className={styles.description1}>
          HackerHouse is an 8-week experimental summer living space in Lake Tahoe for college-age software developers who identify as <a href="http://www.paulgraham.com/gba.html" className={styles.hackers}>hackers</a>.
          Our members come from all kinds of computer science backgrounds -- competitive programming, web development, blockchain development, binary exploitation, to name a few -- but are united in a hunger for building projects to be used by many.
        </p>

        <p className={styles.description}>
          We are creating an environment that minimizes obstructive influence and maximizes productivity. 
          Our long term goal is to cultivate a tight-knit community of friends who can collaborate with each other to make the next big thing, and a space where the most talented university founders can spend the summer building.
        </p>

        <p className={styles.description}>
          What sets us apart from other VC-sponsored communities is that ours has naturally formed from personal friendships rather than contrived applications.
        </p>

        <h3 className={styles.header}>SPONSORS</h3>
        <div className={styles.sponsors}>
          <a href="https://www.1517fund.com/"><img src="/1517-icon.png" className={styles.sponsor}></img></a>
          <a href="https://www.ovofund.com/"><img src="/ovo-icon.webp" className={styles.sponsor}></img></a>
        </div>

        <h3 className={styles.header}>MEMBERS</h3>
        <div className={styles.members}>

        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Liam Kronman</h2>
            <p>Built a <a href="https://www.insider.com/mit-student-made-fake-dating-app-prank-harvard-students-2021-11" className={styles.generalLink}>prank dating site</a> for Harvard (got quarter of school to sign up), created and run <a href="https://exexex.io" className={styles.generalLink}>ExExEx.io</a> (dating site that matches you with exes’ exes’ exes), made <a href="https://superlatives.app" className={styles.generalLink}>Superlatives</a> (voting game for friends) and <a href="https://beatstreet.live" className={styles.generalLink}>BeatStreet</a> (GitHub for original music)</p>
          </div>

          <div className={styles.card}>
            <h2>Sofiane Larbi</h2>
            <p>Making <a href="https://superlatives.app" className={styles.generalLink}>Superlatives.app</a> (app for generating superlatives for friends), made BuddyList (AIM style messenger), NFT arbitrage bot, DMV reservations bot, Katapult (website for buying and selling physical ad space), Reso (app for waiting in line remotely), rocket engine design algorithm</p>
          </div>

          <div className={styles.card}>
            <h2>William Lin</h2>
            <p>Focused on competitive programming in high school and won <a href="https://en.wikipedia.org/wiki/International_Olympiad_in_Informatics" className={styles.generalLink}>IOI</a> 2020. Created and grew a <a href="https://www.youtube.com/c/WilliamLin168" className={styles.generalLink}>YouTube channel</a> to 100k subscribers in just 6 months. Building <a href="https://nyalabs.com/" className={styles.generalLink}>NyaLabs</a>, a platform which helps influencers easily create NFTs and helps their audiences easily buy NFTs.</p>
          </div>

          <div className={styles.card}>
            <h2>Julian Allchin</h2>
            <p>
              Currently working on an intelligent planner for students that have trouble with time management
            </p>
            <p>
              Hacked the #1 most competitive video game in the world (Fully undetectable, cross-process memory cheat called Limestone)

Trained an AI to detect enemy players in Valorant faster than a human can

Used to go around breaking WPA WiFi security for fun

Decrypted & modified iOS assembler code to hack a social media app (Circumvented Apple’s hardware-backed AES cryptography scheme)

Wrote a small app that would completely freeze any Kahoot game
            </p>
          </div>
        </div>

        <h3 className={styles.header}>PROJECTS</h3>
        <div className={styles.projects}>
          Coming soon...
        </div>

        If you would like to help support HackerHouse, please contact us at <a href="mailto: "></a>!
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
