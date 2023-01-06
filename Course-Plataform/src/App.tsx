import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { AppRoutes } from './routes'
function App() {
  return (
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
  )
}

export { App }
