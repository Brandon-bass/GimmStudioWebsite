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
          <a href='#GameRoom'>Plaza Hub</a>
          <a href='#GallerySpace'>Plaza Hub</a>
          <a href='#Classrooms'>Plaza Hub</a>
          <a href='#Download'>Plaza Hub</a>
        </div>
        <h1 className={styles.h1}>
        <header className={styles.header}>
          Gimm Studio

          </header>
        </h1>
        <div className={styles.mainbody}>
          <div className= {styles.Contentboxes}>
          <div className= {styles.column}>
          According to all known laws
of aviation,

  
there is no way a bee
should be able to fly.

  
Its wings are too small to get
its fat little body off the ground.

  
The bee, of course, flies anyway

  
because bees don't care
what humans think is impossible.
          </div>
          <div className= {styles.column}>
          According to all known laws
of aviation,

  
there is no way a bee
should be able to fly.

  
Its wings are too small to get
its fat little body off the ground.

  
The bee, of course, flies anyway

  
because bees don't care
what humans think is impossible.
          </div>
          <div className= {styles.column}>
          According to all known laws
of aviation,

  
there is no way a bee
should be able to fly.

  
Its wings are too small to get
its fat little body off the ground.

  
The bee, of course, flies anyway

  
because bees don't care
what humans think is impossible.
          </div>
          </div>

        <Link href="plazaHub">
                    <a className='sectbox'>
                            
  
According to all known laws
of aviation,

  
there is no way a bee
should be able to fly.

  
Its wings are too small to get
its fat little body off the ground.

  
The bee, of course, flies anyway

  
because bees don't care
what humans think is impossible.

  
Yellow, black. Yellow, black.
Yellow, black. Yellow, black.
                    </a>

        </Link>

        
          </div>
      </main>
      
    
  )
}
