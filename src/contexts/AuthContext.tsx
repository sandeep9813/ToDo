import { createContext, useContext, type ReactNode } from 'react'

interface AuthContextType {
  user: unknown | null
}

const AuthContext = createContext<AuthContextType>({ user: null })

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={{ user: null }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
