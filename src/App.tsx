
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LocationYorkshire from "./pages/LocationYorkshire";
import LocationManchester from "./pages/LocationManchester";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/locations/yorkshire" element={<LocationYorkshire />} />
              <Route path="/locations/manchester" element={<LocationManchester />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookies-policy" element={<CookiesPolicy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected routes based on ERD diagram */}
              <Route element={<ProtectedRoute />}>
                {/* These would be added when implementing the dashboard */}
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                {/* <Route path="/shifts" element={<Shifts />} /> */}
                {/* <Route path="/documents" element={<Documents />} /> */}
                {/* <Route path="/invoices" element={<Invoices />} /> */}
              </Route>
              
              {/* Handle special routes */}
              <Route path="/sitemap.xml" element={<Navigate to="/sitemap.xml" replace />} />
              <Route path="/robots.txt" element={<Navigate to="/robots.txt" replace />} />
              
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
