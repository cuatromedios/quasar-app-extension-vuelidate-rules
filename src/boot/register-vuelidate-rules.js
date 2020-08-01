import * as methods from 'vuelidate/lib/validators'

export default ({ Vue }) => {
  Vue.prototype.$rules = {
    is (value, message) {
      message = message !== undefined ? message : false
      return (val) => {
        let result
        switch (typeof value) {
          case 'string':
            result = String(val) === value
            break
          case 'number':
            result = Number(val) === value
            break
          default:
            result = val === value
        }
        return result || message
      }
    },
    required (message = false) {
      return (val) => methods.required(val) || message
    },
    minLength (length, message) {
      message = message !== undefined ? message : false
      return (val) => methods.minLength(length)(val) || message
    },
    maxLength (length, message) {
      message = message !== undefined ? message : false
      return (val) => methods.maxLength(length)(val) || message
    },
    minValue (value, message) {
      message = message !== undefined ? message : false
      return (val) => methods.minValue(value)(val) || message
    },
    maxValue (value, message) {
      message = message !== undefined ? message : false
      return (val) => methods.maxValue(value)(val) || message
    },
    between (min, max, message) {
      message = message !== undefined ? message : false
      return (val) => methods.between(min, max)(val) || message
    },
    alpha (message = false) {
      return (val) => methods.alpha(val) || message
    },
    alphaNum (message = false) {
      return (val) => methods.alphaNum(val) || message
    },
    numeric (message = false) {
      return (val) => methods.numeric(val) || message
    },
    integer (message = false) {
      return (val) => methods.integer(val) || message
    },
    decimal (message = false) {
      return (val) => methods.decimal(val) || message
    },
    email (message = false) {
      return (val) => methods.email(val) || message
    },
    ipAddress (message = false) {
      return (val) => methods.ipAddress(val) || message
    },
    macAddress (separator = ':', message = false) {
      return (val) => methods.macAddress(separator)(val) || message
    },
    url (message = false) {
      return (val) => methods.ipAddress(val) || message
    },
    or (...args) {
      let message = false
      if (typeof args[args.length - 1] === 'string') {
        message = args.pop()
      }
      return (val) => methods.or(...args)(val) || message
    },
    and (...args) {
      let message = false
      if (typeof args[args.length - 1] === 'string') {
        message = args.pop()
      }
      return (val) => methods.and(...args)(val) || message
    },
    not (rule, message = false) {
      return (val) => methods.not(rule)(val) || message
    },
    sameAs(locator, message = false) {
      return (val) => val == locator || message
    }
  }
}
