import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./RootLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travelplanner",
  description: "Plan your next trip with Travelplanner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        // Header component goes here

        <main className={styles.main}>
          <div className="container">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
