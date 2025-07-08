import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buttoncraft.vercel.app/"),
  title: "ButtonCraft - Modern Buttons Patterns",
  description:
    "Professional-grade buttons patterns and gradients for your websites and apps. Easily copy and paste into your next project. Crafted with modern CSS and Tailwind for seamless integration.",
  keywords: [
    // Primary keywords
    "css buttons patterns",
    "buttons patterns generator",
    "beautiful buttons",
    "css gradients",
    "buttons snippets",
    "web buttons",
    "gradients",
    "css snippets",
    "buttons",
    "modern ui",

    // Secondary keywords
    "tailwind css buttons",
    "modern css patterns",
    "ui buttons patterns",
    "website buttons generator",
    "css buttons snippets",
    "gradient generator",
    "pattern generator",
    "frontend resources",

    // Long-tail keywords
    "free css buttons patterns",
    "beautiful website buttons",
    "modern buttons patterns",
    "copy paste css buttons",
    "responsive buttons patterns",
    "css pattern library",
    "web design buttons",
    "front-end snippets",

    // Tool-specific keywords
    "tailwind buttons patterns",
    "css grid patterns",
    "geometric patterns css",
    "abstract buttons patterns",
    "frontend buttons resources",
    "developer buttons tools",
    "web design assets",

    // Trending keywords
    "buttons patterns 2024",
    "modern web buttons",
    "css buttons effects",
    "animated buttons patterns",
    "minimalist buttons patterns",
  ].join(", "),

  authors: [{ name: "Sameer Basnet ", url: "https://github.com/samir7888" }],
  creator: "Sameer Basnet ",
  publisher: "ButtonCraft",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ButtonCraft - Modern Buttons Patterns & Gradients",
    description:
      "Explore a collection of handcrafted buttons patterns and gradients for modern websites. Easy to use and customize.",
    url: "https://buttoncraft.vercel.app/",
    siteName: "Pattern Craft",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "ButtonCraft – Modern Buttons Patterns and Gradients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ButtonCraft - Modern Buttons Patterns & Gradients",
    description:
      "A curated set of ready-to-use buttons patterns and gradients. Crafted with Tailwind CSS and modern techniques.",
    images: ["/banner.png"],
    creator: "@sameerbasnet78",
  },
  alternates: {
    canonical: "https://buttoncraft.vercel.app/",
  },

  // Additional SEO enhancements
  category: "Web Development Tools",

  // Schema.org structured data hints
  other: {
    "application-name": "ButtonCraft",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ButtonCraft",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",

    // Rich snippets hints
    "article:author": "Sameer Basnet ",
    "article:publisher": "https://github.com/samir7888",
    "og:updated_time": new Date().toISOString(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} bg-buttons text-foreground antialiased min-h-screen flex items-center justify-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
