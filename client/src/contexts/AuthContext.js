import { useEffect, useState, useContext, createContext } from "react"
import { useLocation } from "react-router-dom"

const AuthContext = createContext([{}, () => {}])

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({})
  const { pathname } = useLocation()

  // Returns token expiry
  const getTokenExpiry = (time) => {
    const minutes = time / 60
    const date = new Date(Date.now())
    date.setTime(date.setMinutes(date.getMinutes() + minutes))
    return date
  }

  useEffect(() => {
    const hash = window.location.hash
    let access_token = window.localStorage.getItem("token")
    let token_expiry = window.localStorage.getItem("expiry")

    if (!auth.token && hash) {
      // eslint-disable-next-line no-unused-vars
      const [token, type, expiry] = hash.substring(1).split("&")
      access_token = token.split("=")[1]
      token_expiry = getTokenExpiry(expiry.split("=")[1])

      window.localStorage.setItem("token", access_token)
      window.localStorage.setItem("expiry", token_expiry)
      window.location.href = "/profile"
    }
    setAuth({
      token: access_token,
      expiry: getTokenExpiry(token_expiry)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
