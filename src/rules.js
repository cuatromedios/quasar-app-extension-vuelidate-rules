import * as methods from '@vuelidate/validators';

export function is(value, message) {
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
}

export function required(message = false) {
    return (val) => methods.required.$validator(val) || message
}

export function requiredIf(ref, message = false) {
    return (val) => methods.requiredIf(ref).$validator(val) || message
}

export function requiredUnless(ref, message = false) {
    return (val) => methods.requiredUnless(ref).$validator(val) || message
}

export function minLength(length, message = false) {
    return (val) => methods.minLength(length).$validator(val) || message
}

export function maxLength(length, message = false) {
    return (val) => methods.maxLength(length).$validator(val) || message
}

export function minValue(value, message = false) {
    return (val) => methods.minValue(value).$validator(val) || message
}

export function maxValue(value, message = false) {
    return (val) => methods.maxValue(value).$validator(val) || message
}

export function between(min, max, message = false) {
    return (val) => methods.between(min, max).$validator(val) || message
}

export function alpha(message = false) {
    return (val) => methods.alpha.$validator(val) || message
}

export function alphaNum(message = false) {
    return (val) => methods.alphaNum.$validator(val) || message
}

export function numeric(message = false) {
    return (val) => methods.numeric.$validator(val) || message
}

export function integer(message = false) {
    return (val) => methods.integer.$validator(val) || message
}

export function decimal(message = false) {
    return (val) => methods.decimal.$validator(val) || message
}

export function email(message = false) {
    return (val) => methods.email.$validator(val) || message
}

export function ipAddress(message = false) {
    return (val) => methods.ipAddress.$validator(val) || message
}

export function macAddress(separator = ':', message = false) {
    return (val) => methods.macAddress.$validator(separator)(val) || message
}

export function url(message = false) {
    return (val) => methods.url.$validator(val) || message
}

export function or(...args) {
    let message = false
    if (typeof args[args.length - 1] === 'string') {
        message = args.pop()
    }
    return (val) => methods.or(...args).$validator(val) || message
}

export function and(...args) {
    let message = false
    if (typeof args[args.length - 1] === 'string') {
        message = args.pop()
    }
    return (val) => methods.and(...args).$validator(val) || message
}

export function not(rule, message = false) {
    return (val) => methods.not(rule).$validator(val) || message
}

export function sameAs(locator, message = false) {
    return (val) => val == locator || message
}