import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";
import { THEME_STORAGE_KEY } from "@/config/themes";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.headline}`,
  description: profile.intro,
  openGraph: { title: `${profile.name} | Portfolio`, description: profile.intro, type: "website" },
};

// Applies the saved theme before first paint to avoid a color flash.
const themeScript = `try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
