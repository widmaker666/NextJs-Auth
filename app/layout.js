import Header from "./components/Header";
import { AuthContextProvider } from "./context/AuthContextProvider";
import "./globals.css";
//import { Inter } from "next/font/google"; //pour appeler les polices de google

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* on appel les polices avec inter.classname */}
      <body>
        <AuthContextProvider>
          <Header />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
