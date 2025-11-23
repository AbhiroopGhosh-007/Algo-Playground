import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './styles/Navbar.css';
import './styles/Footer.css';
import './styles/Hero.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata = {
  title: "AlgoPlayground",
  description: "Alogorithm visualizedr app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        {children}
        <Footer/>
      </body>
    </html>
  );
}
