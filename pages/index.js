import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home() {
  return (
      <main className={styles.content}>
        <div className={styles.navbar}>
          <a href ="#home">Home</a>
          <a href='GimmStudioBuild.zip'>Download</a>
          </div>
          
        <h1 className={styles.h1}>
        <header className={styles.header}>
                  <div className = {styles.headerTextWrap}>
                      <div className={styles.textGIMM}>
                          GIMM
                      </div>
                      <div className={styles.textStudio}>
                          studios
                      </div>
                  </div>
          </header>
          </h1>

          <div className={styles.duckWrapper}>
          <div className={styles.duckDrop}>
              <img src = "/rubberduckanim400.gif" draggable = "false"></img>
              </div></div>

          <div className={styles.oceanWrapper}>
          <div className={styles.ocean}>
              <div className={styles.wave}></div>
              <div className={styles.wave}></div>
          </div>
          </div>

          <div class={styles.bottombar}>
              &nbsp;
              </div>
          

        <div className={styles.mainbody}>
              <div className={styles.h2}>
                  <div className={styles.about}>
        The GIMM studio is an online space with interactable Virtual areas. Explore and learn about the different 
                      environments that the GIMM studio offers.</div>
                  <div className={styles.sectbox}>
                  <a href='GimmStudioBuild.zip'>
                        Download Here!
                          </a>
                </div>
        </div>
          <div className= {styles.Contentboxes}>
          <div className= {styles.column}>
          <div className={styles.h3}>Plaza Hub
                      </div>
                      The Plaza Hub is where you will first be spawned at. This area will be a big room that you can hang out in with all your friends. This will be the main hub and from here you can visit the Arcade, Concert Hall, Gallery, and the Lab.
          </div>
          <div className= {styles.column}>
          <div className={styles.h3}>Game Room
                      </div>
                      The Game Room is an awesome spot where you can come and check out Arcade machines that can show you all the amazing games that this cohort of students has worked on in the past few years. You can also play mini-games in the area like bowling, Come chat and hang out with your friends. 
          </div>
          <div className= {styles.column}>
          <div className={styles.h3}>Gallery Space
                      </div>
                      The Gallery is a big city with many different buildings and here you can walk into any of the buildings and take a look at this year's Cohorts artwork and demo reels that they have created.
          </div>
              </div>

              <div className={styles.hammock}>
                  <img src="/hammock800.gif" draggable="false"></img>
              </div>

              <div className={styles.thanks}>
                    Thanks for stopping by!
              </div>

          </div>
      </main>
      
    
  )
}
