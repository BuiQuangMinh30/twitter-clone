import Head from 'next/head'
import Image from 'next/image'
import Widgets from '../components/Widgets'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login';
import { getProviders, getSession, useSession } from "next-auth/react";
import { modalState } from "../atoms/modalState";
import { useRecoilState } from "recoil";


export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="My app" />
        <link rel="icon" href="/dev.ico" />
      </Head>
      <main className="bg-black min-h-screen flex  mx-auto">
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feed/>
        {/* Widgets */}
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />

        {/* Modal */}
        {isOpen && <Modal />}
      </main>
      

      
    </div>
  )
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://www.jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://www.jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}