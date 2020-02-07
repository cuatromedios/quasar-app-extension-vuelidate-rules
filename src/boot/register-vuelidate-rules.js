import * as rules from 'vuelidate/lib/validators'

export default ({ Vue }) => {
  rules.isTrue = function (val) {
    return val === true
  }
  Vue.prototype.$rules = rules
}
