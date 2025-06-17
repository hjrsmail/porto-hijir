import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
// import { getSettings } from "@/app/content/queries/getSetting";
import { Providers } from "../hooks/use-providers";
import type { SharedData } from "@/types";
import { PageProviderWrapper } from "./PageProviderWrapper";


const fontMerriweather = Merriweather({
  variable: "--font-merriweather",
  weight: "400",
  subsets: ["latin"],
});

// export async function generateMetadata() {
//   // const settings = await getSettings();
//   return {
//     title: {
//       template: `${settings.siteName} | %s`,
//       default: "Portfolio-Hijir",
//     },
//     description: "Welcome to my portfolio website! Explore my projects and skills.",
//   }
// };

const sharedData: SharedData = {
  name: "My App",
  quote: { message: "Test message", author: "Author" },
  auth: {
    user: {
      id: 1,
      name: "Admin",
      email: "admin@example.com",
      email_verified_at: null,
      created_at: "",
      updated_at: "",
    },
  },
  ziggy: {
    location: "http://localhost",
    routes: {},
  },
  sidebarOpen: true,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontMerriweather.variable} antialiased`}>
        <PageProviderWrapper sharedData={sharedData}>
          <Providers>
            {children}
          </Providers>
        </PageProviderWrapper>
      </body>
    </html>
  );
}
