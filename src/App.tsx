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
import OurProcess from "./pages/OurProcess";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";
import Atherton from "./pages/Atherton";
import LosGatos from "./pages/LosGatos";
import Saratoga from "./pages/Saratoga";

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
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/atherton" element={<Atherton />} />
          <Route path="/service-areas/los-gatos" element={<LosGatos />} />
          <Route path="/service-areas/saratoga" element={<Saratoga />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;