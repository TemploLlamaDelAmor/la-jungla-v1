import "./globals.css";
import navbar from "@/components/navbar";
import WhatsAppButton from "../components/whatsapp-button";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "Parque Diversión",
  description: "Diversión para todas las edades con inflables, toro mecánico y más",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <WhatsAppButton />
        <main>{children}</main>
      </body>
    </html>
  );
}
