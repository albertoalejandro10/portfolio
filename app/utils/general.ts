// Input: "2024-06-15"
// Output: "Jun 15, 2024"
export const formatDate = (dateString: string) => {
  const { locale } = useI18n()
  return new Date(dateString).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Input: "#FFFFFF" | "white" | "#000000" | "black"
// Output: true | false
export const isLightColor = (color: string): boolean => {
  const lightColors = ['#FFFFFF', '#ffffff', 'white', '#FFF', '#fff']
  return lightColors.includes(color.toLowerCase())
}

export const getTextColor = (companyColor: string, colorMode: string) => {
  if (isLightColor(companyColor) && colorMode === 'light') {
    return '#000000'
  }

  if (isLightColor(companyColor) && colorMode === 'dark') {
    return '#FFFFFF'
  }

  return companyColor
}
