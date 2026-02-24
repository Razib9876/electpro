import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import LenisScroll from "./components/lenis";
import { Navbar } from "./components/navbar";

import { HeroSection } from "./sections/hero-section";
import { LogoMarquee } from "./sections/logo-marquee";
import { FeatureSection } from "./sections/feature-section";
import { WorkSection } from "./sections/work-section";
import { TestimonialSection } from "./sections/testimonial-section";
import { FaqSection } from "./sections/faq-section";
import { CtaSection } from "./sections/cta-section";

import { ChatPage } from "./pages/chat-page";
import { HomeWiring } from "./pages/home-wiring";
import { DBBoard } from "./pages/DBBoard";
import { LoadCalculation } from "./pages/LoadCalculation";
import { SafetyInspection } from "./pages/SafetyInspection";
import { ElectricalStudy } from "./pages/ElectricalStudy";
import { GovtRules } from "./pages/GovtRules";
import { Products } from "./pages/Products";
import { ExpartsSection } from "./pages/Exparts";
import { AboutSection } from "./pages/About";

function HomePage() {
  return (
    <main className="mx-4 md:mx-16 lg:mx-24 xl:mx-32 border-x border-gray-800">
      <HeroSection />
      <LogoMarquee />
      <FeatureSection />
      <WorkSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}

export default function App() {
  return (
    <>
      <LenisScroll />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/home-wiring" element={<HomeWiring />} />
        <Route path="/db-board" element={<DBBoard />} />
        <Route path="/load-calculation" element={<LoadCalculation />} />
        <Route path="/safety-inspection" element={<SafetyInspection />} />
        <Route path="/electrical-study" element={<ElectricalStudy />} />
        <Route path="/govt-rules" element={<GovtRules />} />
        <Route path="/products" element={<Products />} />
        <Route path="/exparts" element={<ExpartsSection />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>

      <Footer />
    </>
  );
}
