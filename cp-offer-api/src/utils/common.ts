export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const queryStringToBoolean = (str: string | undefined): boolean | null => {
  if (!str) {
    return null
  }
  if (str.toLowerCase() === 'true') {
    return true
  }
  if (str.toLowerCase() === 'false') {
    return false
  }
  return null
}
