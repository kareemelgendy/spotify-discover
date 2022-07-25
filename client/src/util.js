// Signs user out
export const handleSignOut = () => {
  window.localStorage.removeItem("token")
  window.localStorage.removeItem("expiry")
  window.location.reload()
}

// Returns if a category is filterable
export const isFilterable = (category) => {
  const filterable = ["top tracks", "top artists"]
  return !category || filterable.includes(category)
}

// Formats category to valid path
export const formatCategory = (category) => {
  if (category.includes("-")) {
    return category.replace("-", " ")
  }
  return `${category.toLowerCase().replace(" ", "-")}`
}
