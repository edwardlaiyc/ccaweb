import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

function Testimonials() {
    return (
        <div className={utilStyles.testimonials}>
                <h2 className={utilStyles.h2}>Testimonials</h2>

                <div className={utilStyles.slider}>
                            <Link href="#slide-1" scroll={false}><a>1</a></Link>
                            <Link href="#slide-2" scroll={false}><a>2</a></Link>
                            <Link href="#slide-3" scroll={false}><a>3</a></Link>
                
                    <div className={utilStyles.slides}>
                    <div name="slide-1" id="slide-1" className={utilStyles.slide}>
                        <blockquote>"CSS is an enriching CCA for all who are passionate about programming! The courses it offers are useful and interesting, and the incubator programme, in particular, promotes creativity and presents the chance for members to experiment and create innovative projects. By and large, anyone who wants to learn computer science should definitely try out for CSS!"</blockquote>
                        <p>~ Nyx Audrey Angelo Iskandar ~</p>
                    </div>
                    
                    <div name="slide-2" id="slide-2" className={utilStyles.slide}>
                    <blockquote>"CSS is a place where you explore new possibilities and expand your creativity."</blockquote>
                    <p>~ Lee Bao Yu ~</p>
                    </div>
                    
                    <div name="slide-3" id="slide-3" className={utilStyles.slide}>
                    <blockquote>"CSS is love. CSS is life."</blockquote>
                    <p>~ Huang Zi Wen ~</p>
                    </div>
                        </div>
                </div>

                <section className={utilStyles.testimonials}>
                        
                        
                </section>

                <div className={utilStyles.subscreen}>
                    <Link href="/">
                    <a className={utilStyles.btn}>
                        Back to Home
                    </a>
                    </Link>
                </div>
        </div>
    )
}

export default Testimonials;