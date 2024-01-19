import { FormControls } from "src/app/Models/FormControl/formcontrol";

export class exampleSimpleControl {
    private exampleFormFields: FormControls[];
    constructor() {
        this.exampleFormFields =
            [
                {
                    name: 'Name', label: ' Name', placeholder: 'Name', type: 'text', value: '',
                    filterOptions: '', autocomplete: '',
                    displaywith: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "name is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please Enter only text",
                            pattern: '',
                        }
                    ],
                    functions: {
                        onKeyUp: 'checkUnique',
                    }

                }
                , {
                    name: "UserPassword",
                    label: "Password",
                    placeholder: "Password",
                    type: "password",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true, // needs to toogle it , when updating 
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Password required!"
                        }
                        , {
                            name: "pattern",
                            message: "Please enter password which must be between 8 and 12 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*_=+-)",
                            pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$',
                        }
                    ],
                    additionalData: {
                        showPassword: false,
                        inputType: "password"
                    },
                    functions: {
                    }
                },
                {
                    name: "ConfirmPassword",
                    label: "Confirm Password",
                    placeholder: "Confirm Password",
                    type: "password",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Confirm Password required!"
                        }
                    ],
                    additionalData: {
                        showPassword: false,
                        inputType: "password"
                    },
                    functions: {
                        onChange : "confirmPasswordIsEqual",
                    }
                },
                {
                    name: "MobileNo",
                    label: "Mobile",
                    placeholder: "Mobile",
                    type: "number",
                    value: '',
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Mobile is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please enter 10 digit mobile number",
                            pattern: '^((\\+91-?)|0)?[0-9]{10}$',
                        }
                    ]
                },
                {
                    name: "EmailId",
                    label: "Email ID",
                    placeholder: "Email ID",
                    type: "text",
                    value: '',
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Email is required"
                        }
                        , {
                            name: "email",
                            message: "Enter Valid Email ID!",
                        }
                    ]
                },
                {
                    name: 'DateOfBirth', label: 'Date Of Birth', placeholder: 'Date Of Birth', type: 'date', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                    generatecontrol: true, disable: false, Validations: [],
                    additionalData: {
                        maxDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
                        minDate: new Date("01 Jan 1900")
                    }
                },

            ]

    }

    getFormControls(savedData?: any) {
        if(savedData !== undefined){
            this.exampleFormFields.forEach(field =>{
                let savedFieldData = '';
                try {
                    savedFieldData = savedData[field['name']]
                } catch (error) {                    
                    savedFieldData = ''
                }
                field.value = savedFieldData;
            })
        }
        return this.exampleFormFields;
    }

}