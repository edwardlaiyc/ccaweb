import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>description</p>
        <p>
          (test{' '}
          <a href="https://adfs.ri.edu.sg/adfs/ls/?SAMLRequest=fZJfT8IwFMXf%2FRRL37v%2FgDTbEoQYSVAXmD74Yrq1gyZbO3tblG%2FvGBoxRh57e3733HPbBGjbdGRmzU6u%2BZvlYJyPtpFAhosUWS2JoiCASNpyIKYim9n9ioSuTzqtjKpUg86QywQF4NoIJZGzXKTodTQOKfOvI1yx6QTH12WNSz8e4%2FEoKssongYl48h55hp6JkV9ix4EsHwpwVBp%2BpIfBtif4CAsghGJYhIGL8hZ9DmEpGagdsZ0QDyPshpcLVzOrAvb4eg14CFn9j3VXEmwLdcbrvei4k%2Fr1Q8t9oczuFFbIb1jYOTkX2u4EZIJub28gfIkAnJXFDnOHzcFypJjHzLk0tnR74%2FdURAm3rkuOb3cQ%2B%2BwXOSqEdXBuVW6peb%2FAQI3GCqC4XqQEiuh45WoBWf9HppGvc81p4anyGjLkZedTH%2F%2FkOzqEw%3D%3D&SigAlg=http%3A%2F%2Fwww.w3.org%2F2000%2F09%2Fxmldsig%23rsa-sha1&Signature=Gvt2gpiqak1fe%2FXPy5l9w1Lf%2BQEWzH%2FBOxI02er2%2B4zV3p69QFlcGdgw%2BzSVBJqqEmg46RRxYRFYm%2FCeM5GeUu5FEELxPCD2PcAkGrtEA1m04O2VkQm21Td7e2y%2BszuHCn25syPGv%2FUyK9lG7fgORNbP23D8xFWzMdWPcsnzL1vJmP%2FOGTssckVfJlT9EYkmSPVtHewLmE24U9rY9sbX84ec4P1Bkzb3erG0osnaslVk1rERKus5Y3gjEM4CTf%2FYFLkH7iviBNwCi%2BBnEY8f8VPLFuHOs%2FN9nTYZHK9gcSCbEKLTR5iYgBOvh%2Fe8MXc5EIs6lqhQF2Y5r1Fn5mb1vA%3D%3D">link</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}