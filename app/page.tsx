import { Agenda } from "@/components/Agenda";
import { Etalase } from "@/components/Etalase";
import { Filosofi } from "@/components/Filosofi";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Kolaborasi } from "@/components/Kolaborasi";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Filosofi />
        <Etalase />
        <Agenda />
        <Kolaborasi />
      </main>
      <Footer />
    </>
  );
}
