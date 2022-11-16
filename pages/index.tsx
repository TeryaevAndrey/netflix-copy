import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import { Movie } from '../types'
import requests from '../utils/requests'

interface IHome {
  top: Movie[];
  pagesCount: number;
}

export function Home ({top}: IHome) {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative">
        <Banner top={top} />
        <section>
          {/* Row */}
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home;

export const getServerSideProps = async() => {
  const [
    top
  ] = await Promise.all([
    fetch(requests.top, {
      headers: {
        'X-API-KEY': process.env.API_KEY,
        'Content-Type': 'application/json',
      }
    }).then((res) => res.json())
  ]);

  return {
    props: {
      top: top
    }
  }
}