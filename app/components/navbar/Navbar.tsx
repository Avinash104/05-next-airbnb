"use client"

import { SafeUser } from "@/app/types"
import Container from "../Container"
import Categories from "./Categories"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"

interface NavbarProps {
  currentUser?: SafeUser | null
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  currentUser
  return (
    <div className="fixed w-full shadow-sm bg-white">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-around gap-3 md:gap-0 ">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  )
}

export default Navbar
