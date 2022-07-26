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

// Formats the name of long items
export const formatName = (name) => {
  let formattedName = name.substring(0, 18)
  if (name.length > 18) {
    return formattedName + "..."
  }
  return formattedName
}

// Formats the tag - owner/artist/show
export const formatTag = (artists) => {
  if (typeof artists === "object") {
    let tag = artists.slice(0, 2)
    if (artists.length > 1) {
      return tag.join(", ")
    }
    if (artists.length > 2) {
      return tag + "..."
    }
  }
  return artists
}
