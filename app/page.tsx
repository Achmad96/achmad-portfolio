import Contact from "@/components/Contact";
import Works from "@/components/Works";
import Hero from "components/Hero";
import "react-toastify/dist/ReactToastify.css";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Works />
      <Contact />
    </main>
  );
};
export default HomePage;
