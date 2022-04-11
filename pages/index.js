import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
      <main className={styles.content}>
        <div className={styles.navbar}>
          <a href ="#home">Home</a>
          <a href='#plazaHub'>Plaza Hub</a>
          <a href='#GameRoom'>Game Room</a>
          <a href='#GallerySpace'>Gallery Space</a>

          <a href='#Download'>Download</a>
        </div>
        <h1 className={styles.h1}>
        <header className={styles.header}>
          Gimm Studio

          </header>
        </h1>
       
        <div className={styles.mainbody}>
        <div className={styles.h2}> 
        The GIMM studio is an online space with many differnent online areas that anyone is able to interact with in VR. Below you can explore and learn about the different 
        environments that the GIMM studio has to offer and find where to download the project.
        </div>
          <div className= {styles.Contentboxes}>
          <div className= {styles.column}>
          <div className={styles.h3}>Plaza Hub
          </div>
          </div>
          <div className= {styles.column}>
          <div className={styles.h3}>Game Room
          </div>
          </div>
          <div className= {styles.column}>
          <div className={styles.h3}>Gallery Space
          </div>
          </div>
          </div>

        <Link href="#plazaHub">
                    <a className='sectbox'>
                            
  
Gimm Studio is a space where students and intereact with their teachers in a virtual classroom this applicaiton is also made so that the gimm students can show off the work that they have created in their last year here at Boise State.
                    </a>

        </Link>

        
          </div>
      </main>
      
    
  )
}
