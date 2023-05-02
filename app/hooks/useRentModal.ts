import { create } from "zustand"

interface RentModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const useRentmodal = create<RentModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useRentmodal
