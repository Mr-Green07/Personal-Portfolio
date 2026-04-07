import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Yuvraj Singh | AI/ML Engineer", template: "%s | Yuvraj Singh" },
  description: "Aspiring AI/ML Engineer skilled in Python, Deep Learning, Computer Vision, Speech Recognition, and Edge AI.",
  keywords: ["AI Engineer", "ML Engineer", "Python", "Deep Learning", "TensorFlow", "Computer Vision"],
  authors: [{ name: "Yuvraj Singh", url: "https://github.com/Mr-Green07" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yuvraj Singh | AI/ML Engineer",
    description: "Building intelligent systems for edge AI, representation learning & multimodal applications.",
    siteName: "Yuvraj Singh Portfolio",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="grain antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
