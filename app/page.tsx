import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import { Pricing } from "@/components/Pricing";
import Team from "@/components/Team";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Your App Title</title>
        <meta name="description" content="This is the homepage of your app" />
      </Head>
      <Hero />
      <div className="px-[20px] lg:container lg:px-20 mx-auto">
        <Features />
        <Faq />
        <Team />
        <Pricing />
        <Footer />
      </div>
    </>
  );
}
