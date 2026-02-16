import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "PaidRightly — Payroll for Freelancers",
    template: "%s | PaidRightly",
  },
  description:
    "Invoice your clients, get paid, and let us handle all your tax admin. Automatic tax calculation, VAT filing, and payouts for freelancers.",
  keywords: [
    "freelancer",
    "tax",
    "invoicing",
    "payroll",
    "VAT",
    "self-employed",
    "contractor",
    "umbrella company",
  ],
  openGraph: {
    title: "PaidRightly — Payroll for Freelancers",
    description:
      "Invoice your clients, get paid, and let us handle all your tax admin.",
    type: "website",
    locale: "en_US",
    siteName: "PaidRightly",
  },
  twitter: {
    card: "summary_large_image",
    title: "PaidRightly — Payroll for Freelancers",
    description:
      "Invoice your clients, get paid, and let us handle all your tax admin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
