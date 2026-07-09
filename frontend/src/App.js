import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PROMO } from "@/data/content";
import Accueil from "@/pages/Accueil";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import APropos from "@/pages/APropos";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Merci from "@/pages/Merci";

const PromoBar = () => (
  <div className="bg-brand-dark px-4 py-2 text-center text-xs font-medium text-blue-50 sm:text-sm" data-testid="promo-bar">
    <span className="inline-flex items-center gap-2">
      <Sparkles className="h-3.5 w-3.5 text-brand-light" /> {PROMO}
    </span>
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <PromoBar />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/merci" element={<Merci />} />
            <Route path="*" element={<Accueil />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
