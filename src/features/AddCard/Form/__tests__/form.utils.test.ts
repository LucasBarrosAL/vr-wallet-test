/* eslint-disable no-undef */
import { isStringEmpyt, isValidExpirationDate } from '../form.utils'

describe('isStringEmpyt', () => {
  it('should return true for an empty string', () => {
    const result = isStringEmpyt('')
    expect(result).toBe(true)
  })

  it('should return true for a string with only whitespaces', () => {
    const result = isStringEmpyt('    ')
    expect(result).toBe(true)
  })

  it('should return false for a non-empty string', () => {
    const result = isStringEmpyt('Hello')
    expect(result).toBe(false)
  })

  it('should return false for a string with leading and trailing whitespaces', () => {
    const result = isStringEmpyt('   Hello   ')
    expect(result).toBe(false)
  })
})

describe('isValidExpirationDate', () => {
  it('should return false for an empty date', () => {
    const result = isValidExpirationDate('')
    expect(result).toBe(false)
  })

  it('should return false for a date with an invalid month', () => {
    const result = isValidExpirationDate('13/75')
    expect(result).toBe(false)
  })

  it('should return false for a date in the past', () => {
    const result = isValidExpirationDate('01/21')
    expect(result).toBe(false)
  })

  it('should return true for a valid future date', () => {
    const result = isValidExpirationDate('12/75')
    expect(result).toBe(true)
  })
})
