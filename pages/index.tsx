import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import FilmsList from '../components/FilmsList'
import Header from '../components/Header'
import requests from '../utils/requests';
import {IFilmsList} from "../interfaces";

interface IHome {
  top: IFilmsList;
  pagesCount: number;
}

export function Home ({top}: IHome) {


  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[110vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="relative h-[100%]">
        <Banner top={top} />
        <section>
          <FilmsList title="Топ" list={top} />
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
      method: 'GET',
      headers: {
        'X-API-KEY': 'effd8af5-9017-4194-b26c-93c72482ef1a',
        'Content-Type': 'application/json',
    },
    }).then((res) => res.json())
  ]);

  return {
    props: {
      top: top
    }
  }
}