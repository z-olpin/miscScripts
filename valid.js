const valid = (input, minLength=false, maxLength=false, invalidChars=false, format=false) => {
  if (
       (!minLength || input.length > minLength)
    && (!maxLength || input.length < maxLength)
    && (!invalidChars || !input.match(invalidChars))
    && (!format || input.match(format))
  ) return true
  else return false
}

class Input {

  constructor(value) { this._value = value }

  isValidLen = (min, max) => (this._value.length >= min && this._value.length <= max) ? true : false

  isValidFormat = format => this._value.match(format) ? true : false
  
  hasInvalidChars = invalidChars => this._value.match(invalidChars) ? true : false

  stripInvalid = invalidChars => this._value = this._value.split("").map(c => c.match(invalidChars) ? "" : c).join("")

  getInvalidChars = invalidChars => this._value.split("").filter(c => c.match(invalidChars))

}