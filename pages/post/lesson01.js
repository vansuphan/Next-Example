// import Head from 'next/head'
import Head from '../../components/head/index'
import Link from 'next/link'
import Footer from '../../components/footer/index'
import Layout from '../../components/layout/index'
import Button from '../../components/button/index'
export default function Home() {
  return (
    <>
    <Layout>
        <div className="container">
          <Head
            title="Create Next App"
            linkRel = {"/favicon.ico"}
          >
          </Head>

            <main>
                <h1 className="title">
                  Page <a href="https://nextjs.org">Lesson 01!</a>
                </h1>
                <h3><Link href="/"><a>Back home</a></Link></h3>
                <p className="description">
                  Get started by editing <code>pages/index.js</code>
                </p>
                <button className="btn btn-blue">
                  Button
                </button>
                <Button type="success"></Button>
            </main>
            <Footer></Footer>

        </div>
      </Layout>
    </>
    
  )
}
