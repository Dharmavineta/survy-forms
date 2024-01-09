import "./globals.css";
import { NextAuthProvider } from "./providers";
import { Toaster } from "sonner";

export const metadata = {
  title: "FormFly",
  description: "Your friendly form builder",
  icons: [{ url: "/formlogo.png", href: "/logo.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <NextAuthProvider>{children}</NextAuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
