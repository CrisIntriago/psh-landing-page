import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IconoWhats from "@/components/IconoWhats/IconoWhats";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PSH Auditores y Asociados",
  description: "Auditores Independientes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-hidden">


          <IconoWhats/>

          <Navbar />

          {children}

          <Footer />
        </div>


      </body>
    </html>
  );
}
