export function isStringEmpyt(str: string) {
  return str?.trim().length === 0
}

export function isValidExpirationDate(date: string) {
  if (isStringEmpyt(date)) {
    return false
  }

  const monthAndYear = date.split('/')
  const month = Number(monthAndYear[0])

  if (month > 12 || month <= 0) {
    return false
  }

  const year = Number(monthAndYear[1]) + 2000

  const today = new Date()
  const expirationDate = new Date()

  expirationDate.setFullYear(year, month - 1)

  return expirationDate >= today
}
