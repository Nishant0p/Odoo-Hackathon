'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import '../../../styles/login.css'
import logoImg from '../../../public/logo.png'
import directionImg from '../../../public/directionimage.png'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useAuthStore } from '@/store/authStore'

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const setAuth = useAuthStore(state => state.setAuth)
  
  const fileInputRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAvatarUrl(url)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!username || !password) {
      toast.error('Please enter both username and password')
      return
    }

    setLoading(true)

    try {
      const res = await axios.post('https://reactbits.in/api/auth/login', {
        username,
        password
      })

      if (res.data?.token) {
        localStorage.setItem('jwt_token', res.data.token)
        setAuth(res.data.user || { username }, res.data.token)
        toast.success('Successfully logged in!')
        router.push('/')
      } else {
        toast.error('Login failed. No token received.')
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.response?.data?.error || 'Something went wrong. Please try again.'
      toast.error(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`login-container ${sora.className}`}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="login-card">
        <div className="card-grid">

          {/* CENTER COLUMN */}
          <div className="center-col">
            <div className="heading-container">
              <h1 className="heading-title">
                <span className="black-text">Welcome </span>
                <span className="red-text">Back</span>
              </h1>
              <p className="heading-subtitle">
                Sign in to continue planning your next adventure.
              </p>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              style={{ display: 'none' }} 
              accept="image/*" 
            />
            <div className="avatar-circle" onClick={() => fileInputRef.current?.click()} title="Upload Photo">
              {avatarUrl ? (
                <img src={avatarUrl} alt="Avatar" className="avatar-img" />
              ) : (
                <span className="avatar-text">Photo</span>
              )}
            </div>

            <form className="form-container" onSubmit={handleLogin}>

              <div className="input-wrapper">
                <svg viewBox="0 0 18 18" width="18" height="18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" className="input-icon">
                  <circle cx="9" cy="6" r="4" />
                  <path d="M 1 18 Q 1 13 9 13 Q 17 13 17 18" />
                </svg>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="login-input"
                />
              </div>

              <div className="input-wrapper">
                <svg viewBox="0 0 18 18" width="18" height="18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" className="input-icon">
                  <rect x="2" y="9" width="14" height="9" rx="2" />
                  <path d="M 5 9 V 6 A 4 4 0 0 1 13 6 V 9" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="login-input password"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-button">
                  {showPassword ? (
                    <svg viewBox="0 0 18 18" width="18" height="18" fill="none" stroke="#707070" strokeWidth="1.5">
                      <path d="M 1 9 C 4 3 14 3 17 9 C 14 15 4 15 1 9" />
                      <circle cx="9" cy="9" r="2.5" fill="#707070" stroke="none" />
                      <line x1="3" y1="3" x2="15" y2="15" strokeWidth="1.5" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 18 18" width="18" height="18" fill="none" stroke="#707070" strokeWidth="1.5">
                      <path d="M 1 9 C 4 3 14 3 17 9 C 14 15 4 15 1 9" />
                      <circle cx="9" cy="9" r="2.5" fill="#707070" stroke="none" />
                    </svg>
                  )}
                </button>
              </div>

              <button type="submit" className="login-button" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>

              <div className="login-links">
                <Link href="/forgot-password" className="login-link">Forgot password?</Link>
                <Link href="/signup" className="login-link">Don't have an account? Sign up</Link>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
