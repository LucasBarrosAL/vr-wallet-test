export function getHideCardNumber(cardNumber: string) {
  const numberParts = cardNumber.split(' ')

  return `•••• •••• •••• ${numberParts[3]}`
}
