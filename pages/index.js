// import Head from 'next/head'
import Link from 'next/link'
import Head from '../components/head/index'
import '../assets/styles/global.css'


export default function Lesson01() {

  return (
    <div className="container">
      <Head></Head>
      <main>
        <h1 className="title">
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>
        
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div>
          <Link href="/post/lesson01"><a>Let's go! Lesson 01 => </a></Link>
          <p></p>
          <Link href="/learning-hooks"><a>Let's go! Learning Hooks => </a></Link>
        </div>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/zeit/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
