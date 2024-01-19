import {exampleControl} from "../../../assets/FormControlsParameters/ExampleControlParam";
import { exampleFormControls } from "src/app/Models/Example Model/exampleModel";
import { FormControls } from "src/app/Models/FormControl/formcontrol";
// Your form validation logic
export function  validateForm() {
    // ... other validations

    const birthdateField = this.exampleControl.find(field => field.name === 'Birthdate');
    if (birthdateField) {
        const birthdateValue = birthdateField.value;
        const currentDate = new Date();
        return birthdateValue > currentDate;

    }

    // ... other validations
}

