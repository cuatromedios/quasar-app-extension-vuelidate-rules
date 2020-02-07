Quasar App Extension Vuelidate Rules
===

> The elegance of Quasar's [internal validation](https://quasar.dev/vue-components/input#Internal-validation) with the power of Vuelidate [built-in validators](https://vuelidate.js.org/#sub-builtin-validators). 

Quasar Framework offers a very practical way to validate form fields, using the `rules` attribute in Field wrapper, input and select component. The attribute accept an array of functions that returns true or a string with an error message.

In most cases this is fair enough, but in some cases you need more complex validations. Quasar documentation recommend Vuelidate as an external validation solution, but using this approach has a downside: You cannot use external validation to validate child components of a Form.

The great power of Vuelidate also needs some more code to set up a validation, adding the validations property to the component to define the rules and bind the error and error-message attributes of the component.  

#### This extension exposes Vuelidate methods so they can be used as Quasar internal rules.

More information about Quasar Validation: https://quasar.dev/vue-components/field#Validation and Form component: https://quasar.dev/vue-components/form

# Install
```bash
quasar ext add vuelidate-rules
```
Quasar CLI will retrieve it from NPM and install the extension.

# Usage
The extension will inject the $rules object to the Vue instance, the rules will then be available in the components.

* If no paramethers are needed:
  ```javascript
  val => $rules.alpha(val) || 'The error message'
  ```
* If paramets are needed:
  ```javascript
  val => $rules.between(10,100)(val) || 'The error message'
  ```  
 
# Examples

```vue
<q-input
    v-model="form.name"
    label="Your name *"
    hint="Name and surname"
    :rules="[
      val => $rules.required(val) || 'Your name is required',
      val => $rules.alpha(val) || 'Your name should not have numbers',
      val => $rules.minLength(3)(val) || 'Your name should have at least 3 letters',
      val => $rules.maxLength(10)(val) || 'Your name should not be larger than 10 letters'
    ]"
/>
```

```vue
<q-input-number
    v-model="form.age"
    label="Your age *"
    :rules="[
      val => $rules.or($rules.between(10,15), $rules.between(20,25))(val) || 'Your age has to be between 10 and 15 or 20 and 25',
    ]"
/>
```


## To do

* Currentlry is not working with locator based methods like sameAs or requiredIf
           
### Related projects
* Quasar Framework https://quasar.dev/
* Vuelidate https://vuelidate.js.org
* NeQu (Nest + Quasar Boilerplate) https://github.com/cuatromedios/nequ 
