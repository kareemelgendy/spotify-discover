export const handleSignOut = () => {
  window.localStorage.removeItem("token")
  window.localStorage.removeItem("expiry")
  window.location.reload()
}
