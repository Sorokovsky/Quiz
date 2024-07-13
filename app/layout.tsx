import type { Metadata } from "next";
import "@styles/globals.sass";
import CustomLayout from "@components/ui/CustomLayout";

export const metadata: Metadata = {
  title: "Quiz game",
  description: "Quiz game. Very interesting game",
};

interface Props {
    children: React.ReactNode;
}

const RootLayout = ({children}: Readonly<Props>) => {
  return ( 
    <CustomLayout>
      {children}
    </CustomLayout>
  );
}

export default RootLayout;