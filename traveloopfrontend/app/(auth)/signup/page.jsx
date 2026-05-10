'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Sora } from 'next/font/google'
import { useRouter } from 'next/navigation'
import '../../../styles/signup.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

export default function SignupPage() {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [additionalInfo, setAdditionalInfo] = useState('')
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAvatarUrl(url)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    
    if (!username || !password || !email) {
      toast.error('Username, email, and password are required.')
      return
    }

    setLoading(true)

    try {
      const res = await axios.post('https://reactbits.in/api/auth/register', {
<<<<<<< HEAD
=======
        name: `${firstName} ${lastName}`.trim(),
>>>>>>> 35ca6e74d641af63cf10c2e2aeb64950a5a6216d
        firstName, 
        lastName, 
        email, 
        phone, 
        username, 
        password, 
        city, 
        country, 
<<<<<<< HEAD
        additionalInfo 
=======
        message: additionalInfo 
>>>>>>> 35ca6e74d641af63cf10c2e2aeb64950a5a6216d
      })

      if (res.data?.token) {
        localStorage.setItem('jwt_token', res.data.token)
      }
      toast.success('Registration successful! Please login.')
      router.push('/login')
    } catch (err) {
      let errorMessage = 'Something went wrong. Please try again.'
      const data = err.response?.data
      if (data) {
        if (typeof data === 'string') errorMessage = data
        else if (data.message) errorMessage = data.message
        else if (data.error) errorMessage = data.error
        else if (data.errors && Array.isArray(data.errors)) errorMessage = data.errors.map(e => e.msg || e.message || e).join(', ')
      }
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`signup-container ${sora.className}`}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="signup-card">
        <div className="card-grid">

          <div className="center-col">
            <div className="heading-container">
              <h1 className="heading-title">
                <span className="black-text">Create </span>
                <span className="red-text">Account</span>
              </h1>
              <p className="heading-subtitle">
                Join now and start planning your next adventure.
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

            <form className="form-container" onSubmit={handleSignup}>
              
              <div className="form-row">
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
                    <circle cx="9" cy="6" r="4"/>
                    <path d="M1 18 Q1 13 9 13 Q17 13 17 18"/>
                  </svg>
                  <input
                    type="text"
                    className="signup-input"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </div>

                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
                    <circle cx="9" cy="6" r="4"/>
                    <path d="M1 18 Q1 13 9 13 Q17 13 17 18"/>
                  </svg>
                  <input
                    type="text"
                    className="signup-input"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
                    <rect x="1" y="4" width="16" height="11" rx="2"/>
                    <path d="M1 4 L9 10 L17 4"/>
                  </svg>
                  <input
                    type="email"
                    className="signup-input"
                    placeholder="Email Address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
                    <path d="M4 1 C3 1 1 3 1 5 C1 11 7 17 13 17 C15 17 17 15 17 14 L14 11 C13 11 12 12 11 12 C9 12 6 9 6 7 C6 6 7 5 7 4 Z"/>
                  </svg>
                  <input
                    type="tel"
                    className="signup-input"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
                    <circle cx="9" cy="6" r="4"/>
                    <path d="M1 18 Q1 13 9 13 Q17 13 17 18"/>
                  </svg>
                  <input
                    type="text"
                    className="signup-input"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>

                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
                    <rect x="2" y="9" width="14" height="9" rx="2" />
                    <path d="M 5 9 V 6 A 4 4 0 0 1 13 6 V 9" />
                  </svg>
                  <input
                    type="password"
                    className="signup-input"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
                    <rect x="2" y="8" width="6" height="9"/>
                    <rect x="10" y="4" width="6" height="13"/>
                    <line x1="1" y1="17" x2="17" y2="17"/>
                    <rect x="4" y="11" width="2" height="3"/>
                    <rect x="12" y="7" width="2" height="3"/>
                  </svg>
                  <input
                    type="text"
                    className="signup-input"
                    placeholder="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                </div>

                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
                    <circle cx="9" cy="9" r="8"/>
                    <path d="M9 1 C9 1 5 5 5 9 C5 13 9 17 9 17"/>
                    <path d="M9 1 C9 1 13 5 13 9 C13 13 9 17 9 17"/>
                    <line x1="1" y1="9" x2="17" y2="9"/>
                    <line x1="2" y1="5" x2="16" y2="5"/>
                    <line x1="2" y1="13" x2="16" y2="13"/>
                  </svg>
                  <svg className="select-icon" viewBox="0 0 16 16" style={{ width: 16, height: 16 }}>
                    <path d="M4 6 L8 10 L12 6" stroke="#6F6F6F" strokeWidth="1.5" fill="none"/>
                  </svg>
                  <select
                    className="signup-input select-input"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                  >
                    <option value="">Country</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AE">UAE</option>
                    <option value="AU">Australia</option>
                    <option value="CA">Canada</option>
                    <option value="SG">Singapore</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="JP">Japan</option>
                    <option value="TH">Thailand</option>
                    <option value="IT">Italy</option>
                  </select>
                </div>
              </div>

              <div className="input-wrapper">
                <svg className="textarea-icon" viewBox="0 0 18 18" fill="none" stroke="#6F6F6F" strokeWidth="1.5" style={{ width: 18, height: 18 }}>
                  <rect x="2" y="1" width="14" height="16" rx="2"/>
                  <line x1="5" y1="6" x2="13" y2="6"/>
                  <line x1="5" y1="9" x2="13" y2="9"/>
                  <line x1="5" y1="12" x2="10" y2="12"/>
                </svg>
                <textarea
                  className="signup-input"
                  placeholder="Additional Information (Optional)"
                  rows={3}
                  value={additionalInfo}
                  onChange={e => setAdditionalInfo(e.target.value)}
                />
              </div>

              <button type="submit" className="signup-button" disabled={loading}>
                {loading ? 'Registering...' : 'Register User'}
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
