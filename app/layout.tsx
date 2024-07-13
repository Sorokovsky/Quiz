import type { Metadata } from "next";
import "./globals.sass";

export const metadata: Metadata = {
  title: "Quiz game",
  description: "Quiz game. Very interesting game",
};

interface Props {
    children: React.ReactNode;
}

const RootLayout = ({children}: Readonly<Props>) => {
  return ( 
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;