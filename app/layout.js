import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Sensai",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.className}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-muted/50 py-10">
              <div className="container mx-auto px-5 text-center text-gray-300">
                <p>Built with Docs, GPT and Reference 😉</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
