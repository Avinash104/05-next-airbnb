import { Nunito } from "next/font/google"
import getCurrentUser from "./actions/getCurrentUser"
import LoginModal from "./components/modal/LoginModal"
import RegisterModal from "./components/modal/RegisterModal"
import RentModal from "./components/modal/RentModal"
import Navbar from "./components/navbar/Navbar"
import "./globals.css"
import ToastProvider from "./providers/ToastProvider"

export const metadata = {
  title: "Airbnb",
  description: "App to clone Airbnb",
}

const font = Nunito({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        {/* We can't use Toaster directly here, because layout is not a client component. so we had to wrap it up before use. */}
        <ToastProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
