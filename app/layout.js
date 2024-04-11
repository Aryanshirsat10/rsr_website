import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollToTop";

import "./globals.css";

export const metadata = {
  title: "Redshift Racing",
  description: "Redshift Racing KJSCE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Poppins">
        <Navbar />
        {children}
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
