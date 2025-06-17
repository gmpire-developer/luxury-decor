import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Luxury Decor",
  description: "Premium Furniture Collection",
  icons: {
    icon: "/favicon.ico", // or favicon.png if you're using PNG
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#f9fafb] text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
