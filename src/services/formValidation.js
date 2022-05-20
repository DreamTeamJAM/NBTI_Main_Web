


export function defaultFieldValidation(valuesObj, errorObj,field){
    if (!valuesObj[field]) {
      errorObj[field] = "Required";
    } else if (valuesObj[field].length < 5) {
      errorObj[field] = "Too Short";
    }
  }
  
 export function basicFieldValidation(valuesObj, errorObj,field){
    if (!valuesObj[field]) {
      errorObj[field] = "Required";
    }
  }
  
 export function numberFieldValidation(valuesObj,errorObj,field){
    const value = valuesObj[field];
    if (!value) {
      errorObj[field] = "Required";
    }else if (isNaN(value) || value < 0){
      errorObj[field] = "Must be a valid number"
    }
  }