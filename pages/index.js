import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import HubSpotScheduler from "../components/HubSpotScheduler";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenue sur la page de test Hubspot" />
        <p className="description">
          Bookez une visio avec moi!
        </p>

        <h2>Schedule a Meeting</h2>
        <HubSpotScheduler />

      </main>

      <Footer />
    </div>
  )
}
