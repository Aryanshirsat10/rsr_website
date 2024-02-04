import "./globals.css";

export const metadata = {
  title: "Redshift Racing",
  description: "Redshift Racing KJSCE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Poppins">{children}</body>
    </html>
  );
}
