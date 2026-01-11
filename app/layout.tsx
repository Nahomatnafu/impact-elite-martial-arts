import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impact Elite Martial Arts and Fitness",
  description: "Premier martial arts training in Taekwondo, Personal Training, and Cardio Kickboxing. Led by ISKA World Cup Champion Terrance Hinds with 15 years of experience.",
  keywords: "martial arts, taekwondo, personal training, cardio kickboxing, fitness, Long Island, NY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

