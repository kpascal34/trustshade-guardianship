
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/toaster";
import FloatingCTA from "./FloatingCTA";
import CookieConsent from "./CookieConsent";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
      <CookieConsent />
      <Toaster />
    </div>
  );
};

export default Layout;
