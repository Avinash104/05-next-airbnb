import { Nunito } from "next/font/google"
import Modal from "./components/modal/Modal"
import RegisterModal from "./components/modal/RegisterModal"
import Navbar from "./components/navbar/Navbar"
import "./globals.css"

export const metadata = {
  title: "Airbnb",
  description: "App to clone Airbnb",
}

const font = Nunito({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {" "}
        <RegisterModal />
        <Navbar /> {children}
      </body>
    </html>
  )
}
