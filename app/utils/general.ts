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

// Input: "2026-06-09"
// Output: "June 2026" | "Junio de 2026" (localized month and year)
export const formatMonthYear = (dateString: string) => {
  const { locale } = useI18n()
  // Parse as local time to avoid UTC off-by-one shifting the month
  const [year = 0, month = 1, day = 1] = dateString.split('-').map(Number)
  const formatted = new Date(year, month - 1, day).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long'
  })
  return formatted.charAt(0).toUpperCase() + formatted.slice(1)
}

// Input: "https://example.com" | "Private" | "Privado" | undefined
// Output: true only for real links (private repos use a placeholder string)
export const isPublicLink = (link?: string): boolean => {
  return !!link && /^https?:\/\//.test(link)
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
