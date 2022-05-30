export function defaultFieldValidation(valuesObj, errorObj, field) {
  if (!valuesObj[field]) {
    errorObj[field] = "Required";
  } else if (valuesObj[field].length < 5) {
    errorObj[field] = "Too Short";
  }
}

export function basicFieldValidation(valuesObj, errorObj, field) {
  if (!valuesObj[field]) {
    errorObj[field] = "Required";
  }
}

export function numberFieldValidation(valuesObj, errorObj, field) {
  const value = valuesObj[field];
  if (!value) {
    errorObj[field] = "Required";
  } else if (isNaN(value) || value < 0) {
    errorObj[field] = "Must be a valid number"
  }
}

export function PasswordFieldValidation(valuesObj, errorObj, pass, pass1) {

  let res;

  if (!valuesObj[pass]) {
    errorObj[pass] = "Required with more 6 character";
  } else if (valuesObj[pass].length < 6) {
    errorObj[pass] = "Too Short";
  }
  if (valuesObj[pass] != valuesObj[pass1]) {
    errorObj[pass] = "Must be the same word";
    res = false
    console.log(valuesObj)
    console.log(res)
  } else if (valuesObj[pass] == valuesObj[pass1]) {
    errorObj[pass] = "same word";
    res = true
    console.log(res)

  }
}

export function emailFieldValidation(values, errors, field) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values[field]) {
    errors[field] = "Required";
  } else if (!regex.test(values[field])) {
    errors[field] = "Invalid email format";
  }
}

export function validationHandler(values, inputMap) {
  let errors = {};
  for (const [key, input] of Object.entries(inputMap)) {
    if ("validation" in input) {
      switch (input.validation) {
        case "basic":
          basicFieldValidation(values, errors, key);
          break;
        case "number":
          numberFieldValidation(values, errors, key);
          break;
        case "email":
          emailFieldValidation(values, errors, key);
          break;
        default:
          defaultFieldValidation(values, errors, key);
      }
    }
    //  else if ("children" in input) {
    //   const childrenErrors = {...validationHandler(values[key], input.children)}
    //   errors = {
    //     ...errors,
    //     [key] : childrenErrors
    //   }
    // }
  }
  console.log("errors", errors)
  return errors;
}