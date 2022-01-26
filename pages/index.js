import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={utilStyles.parent}>
      <div className={utilStyles.screen}>
        <Head>
          <title>RI CSS</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet"></link>
        </Head>

        <div className={utilStyles.navBar}>
            <Link href="/"><a><Image src="/navlogo.jpg" alt="CSS Logo" width = "250px" height = "75px"/></a></Link>
            <Link href="/our-members"><a>Our Members</a></Link>
            
            <div className={utilStyles.dropdown}>
                <a className={utilStyles.dropdownBtn}>2021-2022 Activities/Courses</a>
                <div className={utilStyles.dropdownContent}>
                <Link href="/activities/ui-uxdesign">UI/UX Design </Link>
                <Link href="/activities/webandmobileappdevt">Web and Mobile App Development </Link>
                <Link href="/activities/backenddevt">Backend Development </Link>
                <Link href="/activities/competitiveprogramming">Competitive Programming </Link>
                <Link href="/activities/datasciandmachinelearning">Data Science and Machine Learning </Link>
                <Link href="/activities/incubatorprogramme">Incubator Programmes </Link>
                </div>
            </div>

                <Link href="/recruitment"><a>Recruitment</a></Link>

                <Link href="/competitions"><a>Competitions</a></Link>

                <Link href="/testimonials"><a>Testimonials</a></Link>

                <Link href="/contact-us"><a>Contact Us</a></Link>
        </div>

        <section className={utilStyles.cover}>
          <p className={utilStyles.subtitle}><i>Technology makes us masters of a world that we command by the push of a button.</i></p>
        </section>
      </div>

      <section className={utilStyles.alternate}>
        <h2 className={utilStyles.h2Alt}>About Us</h2>
          <div className={utilStyles.container}>
              <p>
                  Ever wanted to learn coding but not sure how to begin? Look no further! We, the Computer Science Society, are a CCA filled with passionate individuals who believe in the power of technology in transforming our way of life for the better. We offer courses from <a href="/activities/datasciandmachinelearning" className={utilStyles.a}>Data Science</a> to <a href="/activities/webandmobileappdevt" className={utilStyles.a}>Web Development</a>, so you know that our members are extremely diverse. We welcome students of all skill levels, from absolute beginners to programming experts.
              </p>
              <p>
                  By the way, sessions are held every Wednesday (our school's Gap Day) from 9 to 11am!
              </p>
          </div>
      </section>

      <section className={utilStyles.footer}>
          <div className={utilStyles.footercontent}>
              <div className={utilStyles.li}>
                <span className="material-icons">place</span>
                <Link href="http://www.ri.edu.sg/visit-us">
                  <a target="_blank" className={utilStyles.link}>Our Location</a>
                </Link>
              </div>

              <div className={utilStyles.li}>
                <span className="material-icons">mail</span>
                <Link href="mailto:cssrjc@gmail.com">
                  <a target="_blank" className={utilStyles.link}>cssrjc@gmail.com</a>
                </Link>
              </div>

              <div className={utilStyles.li}>
                <span className="material-icons">alternate_email</span>
                <Link href="https://www.instagram.com/rafflescss/">
                  <a target="_blank" className={utilStyles.link}>rafflescss</a>
                </Link>
              </div>

              <div className={utilStyles.li}>
                <span className="material-icons">photo_camera</span>
                <Link href="https://www.instagram.com/rafflescss/">
                  <a className={utilStyles.link}>Photos</a>
                </Link>
              </div>
          </div>

          <hr></hr>

          <p>&#169; 2021 Raffles Institution Computer Science Society</p>
      </section>
    </div>
  )
}