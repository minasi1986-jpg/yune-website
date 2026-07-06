import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","700"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YUNE - Science-led Skincare",
  description: "Healthy skin begins with a healthy barrier.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor: "#F7F4F1", color: "#0F1F17"}}>
        <main>{children}</main>
      </body>
    </html>
  );
}