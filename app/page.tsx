import Hero from "@/components/hero";
import About from "@/components/about";
import Ministries from "@/components/ministries";
import Beliefs from "@/components/beliefs";
import Events from "@/components/events";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "The Apostolic Church Canada (TACC) - Faith, Community, Hope",
  description:
    "Welcome to The Apostolic Church Canada. Join our community for worship, discipleship, and spiritual growth. Located across Canada with a mission to spread the Gospel.",
};

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <About />
      <Ministries />
      <Beliefs />
      <Events />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
