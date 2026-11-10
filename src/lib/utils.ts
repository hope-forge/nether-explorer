import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Junta classes do Tailwind sem conflitos (usado pelos componentes do shadcn e do Kokonut UI)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
