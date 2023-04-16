import { Nunito } from "next/font/google"
import RegisterModal from "./components/modal/RegisterModal"
import Navbar from "./components/navbar/Navbar"
import "./globals.css"
import ToastProvider from "./providers/ToastProvider"

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
        {/* We can't use Toaster directly here, because layout is not a client component. so we had to wrap it up before use. */}
        <ToastProvider />
        <RegisterModal />
        <Navbar /> {children}
      </body>
    </html>
  )
}
