import { ValidatorFn, AbstractControl } from "@angular/forms";

export function autocompleteStringValidator(validOptions: Array<string>): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (validOptions.indexOf(control.value) !== -1) {
        return null; /* valid option selected */
      }
      return { invalidAutocompleteString: { value: control.value } };
    };
  }
  
 export function autocompleteObjectValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (typeof control.value === 'string') {
        return { invalidAutocompleteObject: { value: control.value } };
      }
      return null; /* valid option selected */
    };
  }

  export function autocompleteemptystringObjectValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value === '') {
        return null; /* valid empty string */
      } else if (typeof control.value === 'string') {
        return { invalidAutocompleteObject: { value: control.value } };
      }
      return null; /* valid option selected */
    };
  }
  // export function autocompleteValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     if ( control.value.length >0) {
  //       return { invalidAutocompleteObject: { value: control.value} };
  //     }
  //     return null; /* valid option selected */
  //   };
  // }


  //#region to validate dropdown text 
 export function autocompleteValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (typeof control.value === 'string'&& control.value.length > 0) {
          return { invalidAutocomplete: { value: control.value } };
        }
        return null; /* valid option selected */
    };
  } 
  //#endregion
  export function dateOfBirthFutureValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const currentDate = new Date();
        const selectedDate = control.value instanceof Date ? control.value : new Date(control.value);
        return selectedDate > currentDate ? { birthdateInPast: { value: control.value } } : null;
    };
}

export function ageAndFutureValidator(birthdateControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      const currentDate = new Date();

      // Get the birthdate value from the birthdate control
      const birthdateControl = control.get(birthdateControlName);
      const birthdateValue = birthdateControl ? birthdateControl.value : null;

      if (!birthdateValue) {
          // If birthdate is not provided, return null (no validation error)
          return null;
      }

      // Calculate the age based on the birthdate
      const age = calculateAge(birthdateValue, currentDate);

      // Check if the age is 18 or older and the date of joining is not in the future
      if (age >= 18 && control.value <= currentDate) {
          return null; // Validation passed
      } else {
          return { ageAndFuture: { value: control.value } }; // Validation failed
      }
  };
}

// Helper function to calculate age based on birthdate
function calculateAge(birthdate: Date, currentDate: Date): number {
  const birthdateYear = birthdate.getFullYear();
  const currentYear = currentDate.getFullYear();
  const age = currentYear - birthdateYear;

  // Adjust age if birthday hasn't occurred yet this year
  const birthdateThisYear = new Date(currentDate);
  birthdateThisYear.setFullYear(birthdateYear);
  if (birthdateThisYear > currentDate) {
      return age - 1;
  }

  return age;
}