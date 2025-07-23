import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/Navbar/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: {
    default: "Awesome NextJs App",
    template: "%s | Awesome NextJs App",
  },
  keywords: ["Next.js", "React", "JavaScript"],
  description: "A modern Next.js project with Tailwind and beautiful fonts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable}  antialiased bg-gray-100 text-gray-800`}
      >
        <NavBar />
        <main className="min-h-[calc(100vh-100px)] px-4 md:px-8 py-6">
          {children}
        </main>
        <footer className="text-center bg-slate-700 text-white py-4 text-sm">
          ❤️ Built with Next.js | @2025 Your Company
        </footer>
      </body>
    </html>
  );
}
