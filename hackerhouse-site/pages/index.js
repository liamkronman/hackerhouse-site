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
            </p>
            <p>
              Trained an AI to detect enemy players in Valorant faster than a human can
            </p>
            <p>
              Used to go around breaking WPA WiFi security for fun
            </p>
            <p>
              Decrypted & modified iOS assembler code to hack a social media app (Circumvented Apple’s hardware-backed AES cryptography scheme)
            </p>
            <p>
              Wrote a small app that would completely freeze any Kahoot game
            </p>
          </div>
          <div className={styles.card}>
            <h2>Tate Berenbaum</h2>
            <p>Founder of Verto.exchange (the primary decentralized exchange inside of the Arweave ecosystem) and <a href="https://www.arconnect.io/" className={styles.generalLink}>ArConnect.io</a> (the MetaMask for Arweave)</p>
          </div>
          <div className={styles.card}>
            <h2>Joseph Gross</h2>
            <p>
              Developed a machine learning algorithm capable of detecting the presence of heavy metals in water samples using Laser Induced Breakdown Spectroscopy in order to identify which areas of the bay are polluted. Developed the data analytics infrastructure while working as a software developer at <a href="https://www.deepblocks.com/" className={styles.generalLink}>Deepblocks</a>, which included building web scrapers, designing complex data pipelines, creating custom dashboards/visualizations, and training machine learning algorithms using NLP.
            </p>
            <p>
              Built a cross platform <a href="https://apps.apple.com/app/apple-store/id1479695237" className={styles.generalLink}>drone delivery app</a> while working as a full Stack software developer at <a href="https://www.flytrex.com/">Flytrex</a> (based in Tel Aviv, Israel). Currently working on multiple Web3/Blockchain related projects: 1) An Ethereum based DEX that aims to provide advanced trading features of CEX to DEX  2) An event management / ticketing ecosystem that takes advantage of the power of the blockchain in order to increase community engagement, legitimize the secondary ticketing market, and simplify the entire event management experience while cutting costs.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Siddharth Sharma</h2>
            <p>Multiple ML publications. Worked under 4 different Stanford Professors in high school. Wrote a <a href="https://www.amazon.com/Guide-Machine-Learning-their-Applications/dp/B08C96165Y" className={styles.generalLink}>textbook on ML</a> and submitted papers to NeurIPs. Building an app for geospatial event planning and hosting. Did some crypto price prediction work recently.</p>
          </div>
          <div className={styles.card}>
            <h2>Eric Hong</h2>
            <p>
              Worked as iOS developer for Ghost Pacer (<a href="https://www.ghostpacer.com/" className={styles.generalLink}>startup</a>). Built <a href="https://chrome.google.com/webstore/detail/bobby/jbkljccbmlidfglkkgdbcoalnnielepl?hl=en" className={styles.generalLink}>chrome extension</a> (using Stockfish, an open source chess engine) that displays top moves on chess.com.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Saad Naji</h2>
            <p>Current Software & Communications Consultant @better.com : Web development, Python automation & web scraping, fintech focused media advertising, crisis management (managed Better’s firing scandal). Previous React developer @blockchainsforschools.org. Created NFT Sniping and account creation bot.</p>
          </div>
          <div className={styles.card}>
            <h2>Ari Schechter</h2>
            <p>
              Built <a href="https://beatstreet.live" className={styles.generalLink}>BeatStreet</a> (GitHub for original music) with Liam and <a href="https://brocli.live/" className={styles.generalLink}>Brocli</a>, a site for creating private communities where people can post anonymously. I am currently developing an app for Brocli as well.
            </p>
          </div>
        </div>

        <h3 className={styles.header}>PROJECTS</h3>
        <p>
          Coming soon...
        </p>

        <p>
          If you would like to help support HackerHouse, please contact us at <a href="mailto:romulus@outtacontrol.net">romulus@outtacontrol.net</a>!
        </p>
      </main>

      <footer className={styles.footer}>
        Brought to you by HackerHouse.
      </footer>
    </div>
  )
}
