import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "@/components/footer";
import Naviagtion from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Artificial Intelligence and Machine Learning Resources - University of California, Riverside",
  description:
    "A resource hub for students at UCR to learn more about Artificial Intelligence Machine Learning.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <Naviagtion />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
