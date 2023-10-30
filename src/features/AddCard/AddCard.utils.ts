export function isStringEmpyt(str: string) {
  return str?.trim().length === 0
}

export function isValidExpirationDate(date: string) {
  if (isStringEmpyt(date)) {
    return false
  }

  const dates = date.split('/')
  const month = Number(dates[0])
  const year = Number(dates[1]) + 2000

  const today = new Date()
  const expirationDate = new Date()

  expirationDate.setFullYear(year, month - 1)

  return expirationDate >= today
}

export function getHideCardNumber(cardNumber: string) {
  const numberParts = cardNumber.split(' ')

  return `•••• •••• •••• ${numberParts[3]}`
}
