"use client";
import Footer from "@/app/components/footer";
import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import PatternShowcase from "./components/pattern-showcase";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen relative">
          <div className="relative z-10">
            <Navbar theme={theme} />

            {/* <SupportDropdown theme={theme}/> */}

            <Hero theme={theme} />

            <PatternShowcase theme={theme} />

            <Footer theme={theme} />
          </div>
        </div>
        <Toaster />
      </ThemeProvider>
    </>
  );
}
