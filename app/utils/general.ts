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
