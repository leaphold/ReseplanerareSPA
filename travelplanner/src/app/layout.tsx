// Type import for Metadata from Next.js
import type { Metadata } from "next";
// Import global stylesheet for application-wide styles
import "./globals.css";
// Import scoped styles specific to the RootLayout component
import styles from "./RootLayout.module.css";
// Import Header and Footer components for use in the layout
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

export const metadata: Metadata = {
    title: "Travelplanner",
    description: "Plan your next trip with Travelplanner",
};

// RootLayout component that frames the general page structure
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className={styles.main}>
                    <div className="container">{children}</div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
