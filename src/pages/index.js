import Head from "next/head";
import Header from "../components/header";
import Banner from "../components/banner";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MyEcomWeb</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
      </main>
    </div>
  );
}
