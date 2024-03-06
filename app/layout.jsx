import { Suspense } from "react";
import './globals.css';
import Loading from "@/components/Loader/Loading";

export const metadata = {
  title: "Customer Dashboard",
  description: "This is next project developed using next,prisma and postgres Database.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen font-sans bg-gray-100">
        <Suspense fallback={<loading />} >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
