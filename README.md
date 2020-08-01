Quasar App Extension Vuelidate Rules
===

> The elegance of Quasar's [internal validation](https://quasar.dev/vue-components/input#Internal-validation) with the power of [Vuelidate](https://vuelidate.js.org/#sub-builtin-validators)'s built-in validators. 

Quasar Framework offers a very practical way to validate form fields, using the `rules` attribute in Field wrapper, input and select component. The attribute accepts an array of functions that returns true or a string with an error message.

In most cases this is enough, but in some cases you need more complex validations. Quasar's documentation recommends Vuelidate as an external validation solution, but using this approach has a downside: You cannot use external validation to validate child components of a Form.

Leveraging the power of Vuelidate also requires more code to set up a validation, add the validations property to the component to define the rules and bind the error and error-message attributes of the component.  

#### This extension exposes Vuelidate methods so they can be used as Quasar internal rules.

More information about Quasar Validation: https://quasar.dev/vue-components/field#Validation and Form component: https://quasar.dev/vue-components/form

# Install
```bash
quasar ext add vuelidate-rules
```
Quasar CLI will retrieve it from NPM and install the extension.

# Usage
The extension will inject the $rules object to the Vue instance, the rules will then be available in the components. The customized error message is optional, always as the last parameter, and if not provided it will return `false`.

* If no parameters are needed:
  ```javascript
  $rules.alpha() 
  $rules.alpha('Please use only letters')
  ```
* If paramets are needed:
  ```javascript
  $rules.between(10,100)
  $rules.between(10,100, 'Please enter a number between 0 and 100')
  ```  
# Available methods

| **rule**   | **parameters**| **description** |
|--------------|------------   | --- |
| `required`   | _none_ | Requires non-empty data. Checks for empty arrays and strings containing only whitespaces.
| `minLength`  | `length` integer | Requires the input to have a minimum specified length, inclusive. Works with arrays.
| `maxLength`  | `length` integer | Requires the input to have a maximum specified length, inclusive. Works with arrays.
| `minValue`   | `value` integer | Requires entry to have a specified minimum numeric value or Date.
| `maxValue`   | `value` integer | Requires entry to have a specified maximum numeric value or Date.
| `between`    | `min` integer, `max` integer | Checks if a number or Date is in specified bounds. Min and max are both inclusive.
| `alpha`      | _none_ | Accepts only alphabet characters.
| `alphaNum`   | _none_ | Accepts only alphanumerics.
| `numeric`    | _none_ | Accepts only numerics.
| `integer`    | _none_ | Accepts positive and negative integers.
| `decimal`    | _none_ | Accepts positive and negative decimal numbers.
| `email`      | _none_ | Accepts valid email addresses. Keep in mind you still have to carefully verify it on your server, as it is impossible to tell if the address is real without sending verification email.
| `ipAddress`  | _none_ | Accepts valid IPv4 addresses in dotted decimal notation like 127.0.0.1.
| `macAddress` | `separator` string, (default ':')  | Accepts valid MAC addresses like 00:ff:11:22:33:44:55
| `url` | _none_ | Accepts only URLs.
| `isTrue` | _none_ | Only accepts a `true` value
| `or` | other rules | Passes when at least one of provided rules passes
| `and` | other rules | Passes when all of provided validators passes.
| `not` | rule | Passes when provided validator would not pass
| `is` | `value` | Passes when the field value is the same as the provided value, for example `true` 
| `sameAs` | `value` | Passes when field value is the same as other field value

* All methods receive a last optional parameter with the customized error message.
 
# Examples

Using several rules
```html
<q-input
    v-model="form.name"
    label="Your name *"
    hint="Name and surname"
    :rules="[
      $rules.required('Your name is required'),
      $rules.alpha('Your name should not have numbers'),
      $rules.minLength(3, 'Your name should have at least 3 letters'),
      $rules.maxLength(10, 'Your name should not be larger than 10 letters') 
    ]"
/>
```

Using logic operators
```html
<q-input
    v-model="form.age"
    label="Your age *"
    :rules="[
      $rules.or($rules.between(10,15), $rules.between(20,25)),
    ]"
/>
```

```html
<q-input
    v-model="form.age"
    label="Your age *"
    :rules="[
      $rules.or(
        $rules.and(
          $rules.between(10,17),
          $rules.between(16,25)
        ),
        $rules.minValue(17),
        'Or nd message 2'
      ),
    ]"
  />
```
### Modified methods
These methods are not the original Vuelidate methods but modified versions

TBD

### Other not Vuelidate methods

Check if is a specific value. This is not a method of Vuelidate but may be useful, so it was added. Can be tied to other data properties, for example to check if a password is the same as the confirmation (not reactive yet)
```html
<q-field
        :value="form.accept"
        label="Please read the license"
        stack-label
        :rules="[
           $rules.is(true, 'Please accept the license')
        ]"
      >
        <q-toggle v-model="form.accept" label="I accept the license and terms" />
</q-field>
```

## To do

* Make locator based methods like sameAs or requiredIf to work, or develop an alternative
           
### Related projects
* Quasar Framework https://quasar.dev/
* Vuelidate https://vuelidate.js.org
* NeQu (Nest + Quasar Boilerplate) https://github.com/cuatromedios/nequ 
