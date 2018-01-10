# ember-validation

<a href="http://emberobserver.com/addons/ember-validation"><img src="http://emberobserver.com/badges/ember-validation.svg"></a> &nbsp; <a href="https://david-dm.org/amk221/ember-validation#badge-embed"><img src="https://david-dm.org/amk221/ember-validation.svg"></a> &nbsp; <a href="https://david-dm.org/amk221/ember-validation#dev-badge-embed"><img src="https://david-dm.org/amk221/ember-validation/dev-status.svg"></a> &nbsp; <a href="https://codeclimate.com/github/amk221/ember-validation"><img src="https://codeclimate.com/github/amk221/ember-validation/badges/gpa.svg" /></a> &nbsp; <a href="http://travis-ci.org/amk221/ember-validation"><img src="https://travis-ci.org/amk221/ember-validation.svg?branch=master"></a>

### Constraints

* big-decimal
  * `optional`
  * `message`
  * `maxIntegerDigits`
  * `maxDecimalDigits`
* date
  * `optional`
  * `format`
  * `mesaage`
* email
  * `optional`
  * `message`
* greaterThan
  * `value`
  * `mesaage`
* lessThan
  * `value`
  * `mesaage`
* maxLength
  * `max`
  * `message`
* minLength
  * `min`
  * `message`
* number
  * `optional`
  * `message`
* phoneNumber
  * `optional`
  * `message`
* present
  * `message`
* truthy
  * `message`

### Example

```javascript
const object = {

}

const constraints = {
  name: [
    present({ message: 'Please enter your name' }),
    maxLength({ max: 255 })
  ],
  terms: [
    truthy({ message: 'Please accept the terms' })
  ],
  emailAddress: [
    present(),
    email()
  ],
  dateOfBirth: [
    present(),
    date({ format: 'L' })
  ]
};

try {
  await validate(object, constraints);
} catch(error) {
  console.log(error.result);
  /**
   *  {
   *    "name": [
   *      "Please enter your name"
   *    ],
   *    "terms": [
   *      "Please accept the terms"
   *    ],
   *    "emailAddress": [
   *      "required value",
   *      "invalid email"
   *    ],
   *    "dateOfBirth": [
   *      "required value",
   *      "invalid date, expecting MM/DD/YYYY"
   *    ]
   *  }
   */
}
```

### Installation
```
ember install ember-validation
```
