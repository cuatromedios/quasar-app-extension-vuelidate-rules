import * as rules from '../rules';

export default ({ app }) => {
  app.config.globalProperties.$rules = rules;
}