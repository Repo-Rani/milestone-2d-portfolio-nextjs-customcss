import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import "./style.css";
import { ResponsiveNav } from "@/components/ResponsiveNav";
import AnimatedCursor from "react-animated-cursor";
import Footer from "@/components/Footer";
const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "RaniCreations Portfolio",
  description: "Ranidev Portfolio with next js",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom-scrollbar">
      <body className={`${font.className}`}>
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        </div>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
