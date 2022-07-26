import { Navigate, Route, Routes } from "react-router"
import ProtectedRoute from "./components/ProtectedRoute"
import { useAuth } from "./contexts/AuthContext"
import Login from "./pages/Login"
import Invalid from "./pages/Invalid"
import Profile from "./pages/Profile"
import Grid from "./pages/Grid"

function App() {
  const { auth } = useAuth()
  const authenticated = auth.token
  const redirect = !authenticated ? <Login /> : <Navigate to="/profile" />

  return (
    <Routes>
      <Route
        index
        path="/"
        element={<Navigate to={!authenticated ? "/login" : "/profile"} />}
      />
      <Route path="/login" element={redirect} />
      <Route path="/callback" element={redirect} />
      <Route
        path="/profile"
        element={<ProtectedRoute element={<Profile />} />}
      />
      <Route
        path="/category/:category"
        element={<ProtectedRoute element={<Grid />} />}
      />
      <Route path="*" element={<Invalid />} />
    </Routes>
  )
}

export default App
