'use client'

import { useEffect } from 'react'
import { auth } from '@/lib/firebase'
import { signInWithEmailLink } from 'firebase/auth'

export default function Dashboard() {
  useEffect(() => {
    const verifyMagicLink = async () => {
      if (typeof window !== 'undefined') {
        const email = window.localStorage.getItem('emailForSignIn')
        if (email) {
          await signInWithEmailLink(auth, email, window.location.href)
          window.localStorage.removeItem('emailForSignIn')
          // Redirect or update state here
        }
      }
    }
    verifyMagicLink()
  }, [])

  return <div>Loading...</div>
}