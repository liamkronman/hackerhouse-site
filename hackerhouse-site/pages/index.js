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
            <p>built a <a href="https://www.insider.com/mit-student-made-fake-dating-app-prank-harvard-students-2021-11" className={styles.generalLink}>prank dating site</a> for Harvard (got quarter of school to sign up), created and run <a href="https://exexex.io" className={styles.generalLink}>ExExEx.io</a> (dating site that matches you with exes’ exes’ exes), made <a href="https://superlatives.app" className={styles.generalLink}>Superlatives</a> (voting game for friends) and <a href="https://beatstreet.live" className={styles.generalLink}>BeatStreet</a> (GitHub for original music)</p>
          </div>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
