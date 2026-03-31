import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Hardscape from "./pages/Hardscape";
import Pavers from "./pages/Pavers";
import Landscaping from "./pages/Landscaping";
import ConcreteDriveways from "./pages/ConcreteDriveways";
import OutdoorKitchens from "./pages/OutdoorKitchens";
import RetainingWalls from "./pages/RetainingWalls";
import ArtificialTurf from "./pages/ArtificialTurf";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Warranties from "./pages/Warranties";
import DesignProcess from "./pages/DesignProcess";
import OurProcess from "./pages/OurProcess";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";

import Atherton from "./pages/Atherton";
import LosGatos from "./pages/LosGatos";
import Saratoga from "./pages/Saratoga";
import Campbell from "./pages/Campbell";
import SantaClara from "./pages/SantaClara";
import Financing from "./pages/Financing";
import FAQs from "./pages/FAQs";
import PatioWalkways from "./pages/PatioWalkways";
import PergolasShade from "./pages/PergolasShade";
import PaversVsConcrete from "./pages/PaversVsConcrete";
import ArtificialTurfVsSod from "./pages/ArtificialTurfVsSod";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hardscape" element={<Hardscape />} />
          <Route path="/pavers" element={<Pavers />} />
          <Route path="/landscaping" element={<Landscaping />} />
          <Route path="/concrete-driveways" element={<ConcreteDriveways />} />
          <Route path="/outdoor-kitchens" element={<OutdoorKitchens />} />
          <Route path="/retaining-walls" element={<RetainingWalls />} />
          <Route path="/artificial-turf" element={<ArtificialTurf />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/warranties" element={<Warranties />} />
          <Route path="/design-process" element={<DesignProcess />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          
          <Route path="/service-areas/atherton" element={<Atherton />} />
          <Route path="/service-areas/los-gatos" element={<LosGatos />} />
          <Route path="/service-areas/saratoga" element={<Saratoga />} />
          <Route path="/service-areas/campbell" element={<Campbell />} />
          <Route path="/service-areas/santa-clara" element={<SantaClara />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/patio-walkway-installations" element={<PatioWalkways />} />
          <Route path="/pergolas-shade-structures" element={<PergolasShade />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/pavers-vs-concrete" element={<PaversVsConcrete />} />
          <Route path="/blog/artificial-turf-vs-sod" element={<ArtificialTurfVsSod />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
