// import Head from 'next/head'
import Head from '../components/head/index'
import Link from 'next/link'
import Footer from '../components/footer/index'
import Layout from '../components/layout/index'
import UseEffectComponent from '../components/hookcomponents/useEffect'
import UseCallbackComponent from '../components/hookcomponents/useCallback'
export default function LearningHooks() {
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
                
                <div className="content-hooks">
                 
                </div>
                <UseEffectComponent
                  // number={2}
                ></UseEffectComponent>
                <UseCallbackComponent></UseCallbackComponent>
            </main>
            <Footer></Footer>

        </div>
      </Layout>
    </>
    
  )
}
