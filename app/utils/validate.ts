import { isEmpty } from 'lodash'

const isEmail = (email: string): boolean => {
  // tslint:disable-next-line:max-line-length
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export default (fieldName: string, value: string, options: any = {}) => {
  const { email = null, confirmPassword = null } = options
  if (isEmpty(value)) {
    return `Please enter ${fieldName}`
  }
  if (email && !isEmail(value)) {
    return 'Please enter a valid email address'
  }
  if (confirmPassword && value !== confirmPassword) {
    return 'password does not match'
  }
  return undefined
}
