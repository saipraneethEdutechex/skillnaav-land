import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import { Pricing } from "@/components/Pricing";
import Team from "@/components/Team/Team";
import Head from "next/head";
import Vision from "@/components/Vision";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Skill Naav - Navigate Your Skills</title>
        <meta name="description" content="This is the homepage of your app" />
      </Head>
      <Hero />
      <div className="px-[20px] lg:px-20 mx-auto">
        <Vision />
        <Features />
        <Team />
        <Pricing />
        <Faq />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
