import { exampleFormControls } from "src/app/Models/Example Model/exampleModel";
import { FormControls } from "src/app/Models/FormControl/formcontrol";


export class exampleControl {
    private exampleFormFields: FormControls[];
    constructor(formControls: exampleFormControls, IsUpdate: boolean) {
        this.exampleFormFields =
            [
                // {
                //     name: "Company_file",
                //     label: "Select File",
                //     placeholder: "",
                //     type: "file",
                //     value: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [".xls, .xlsx, .csv"],
                //     functions: {
                //         onChange: "selectedFile",
                //     },
                // },
                {
                    name: 'Empcode', label: 'Emp_code', placeholder: 'Emp_code', type: 'text', value: formControls.Empcode,
                    filterOptions: '', autocomplete: '',
                    displaywith: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Empcode is required"
                        }
                        , {
                            name: "pattern",
                            message: "please enter empcode in this formate 'emp000'",
                            pattern: '',
                        }
                    ]
                },
                {
                    name: 'Name', label: 'Name', placeholder: 'Name', type: 'text', value: formControls.Name,
                    filterOptions: '', autocomplete: '',
                    displaywith: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Name is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please Enter only text",
                            pattern: '',
                        }
                    ]
                },
                {
                    name: "DepartmentcontrolHandler",
                    label: "Department",
                    placeholder: "Department",
                    type: "select",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Field is required.."
                        }
                    ],
                    additionalData: {
                        isIndeterminate: false,
                        isChecked: false,
                        support: "Department",
                        showNameAndValue: false
                    }
                },
                {
                    name: "DesignationcontrolHandler",
                    label: "Designation",
                    placeholder: "Designation",
                    type: "select",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Field is required.."
                        }
                    ],
                    additionalData: {
                        isIndeterminate: false,
                        isChecked: false,
                        support: "Designation",
                        showNameAndValue: false
                    }
                },
                {
                    name: 'Birthdate', label: 'Birth Date', placeholder: 'Birth Date', type: 'datetimerpicker', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                    generatecontrol: true, disable: false, 
                    Validations: [
                        {
                            name: 'required',
                            message: 'Birthdate is required'
                        },
                        {
                            name: 'birthdateInPast',
                            message: 'Birthdate cannot be in the future',
                        }
                    ],
                    additionalData: {
                        maxDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
                        minDate: new Date("01 Jan 1900")
                    }
                },
                {
                    name: 'JoiningDate', label: 'Joining Date', placeholder: 'Joining Date', type: 'date', value: new Date(formControls?.JoiningDate || new Date()), filterOptions: '', autocomplete: '', displaywith: '',
                    generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: 'required',
                            message: 'Joining Date is required'
                        },
                        {
                            name: 'ageAndFuture',
                            message: 'Joining Date is not valid. User should be 18+ years old and the date should not be in the future',
                            birthdateControlName: 'Birthdate' 

                        }
                    ],
                    additionalData: {
                        maxDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
                        minDate: new Date("01 Jan 1900")
                    }
                },
                {
                    name: "StatecontrolHandler",
                    label: "State",
                    placeholder: "State",
                    type: "select",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Field is required.."
                        }
                    ],
                    additionalData: {
                        isIndeterminate: false,
                        isChecked: false,
                        support: "State",
                        showNameAndValue: false
                    }
                },
                {
                    name: "CitycontrolHandler",
                    label: "City",
                    placeholder: "City",
                    type: "select",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Field is required.."
                        }
                    ],
                    additionalData: {
                        isIndeterminate: false,
                        isChecked: false,
                        support: "City",
                        showNameAndValue: false
                    }
                },
                // {
                //     name: 'UserId', label: 'User Id', placeholder: 'User Id', type: 'text', value: formControls.UserId,
                //     filterOptions: '', autocomplete: '',
                //     displaywith: '', generatecontrol: true, disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //             message: "UserId is required"
                //         }
                //         , {
                //             name: "pattern",
                //             message: "Please Enter only text",
                //             pattern: '',
                //         }
                //     ],
                //     functions: {
                //         onKeyUp: 'checkUnique',
                //     }

                // },
                // {
                //     name: "Password",
                //     label: "Password",
                //     placeholder: "Password",
                //     type: "password",
                //     value: formControls.Password,
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true, // needs to toogle it , when updating 
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //             message: "Password required!"
                //         }
                //         , {
                //             name: "pattern",
                //             message: "Please enter password which must be between 8 and 12 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*_=+-)",
                //             pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$',
                //         }
                //     ],
                //     additionalData: {
                //         showPassword: false,
                //         inputType: "password"
                //     },
                //     functions: {
                //         onChange: "checkUnique"
                //     }
                // },
                // {
                //     name: "confirmpassword",
                //     label: "Confirm Password",
                //     placeholder: "Confirm Password",
                //     type: "password",
                //     value: formControls.Password,
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //             message: "Confirm Password required!"
                //         }
                //     ],
                //     additionalData: {
                //         showPassword: false,
                //         inputType: "password"
                //     },
                //     functions: {
                //         onChange: "ChangedPassword"
                //     }
                // },
                // {
                //     name: "EmailId",
                //     label: "Email ID",
                //     placeholder: "Email ID",
                //     type: "text",
                //     value: formControls.EmailId,
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //             message: "Email is required"
                //         }
                //         , {
                //             name: "email",
                //             message: "Enter Valid Email ID!",
                //         }
                //     ]
                // },
                // {
                //     name: "MobileNo",
                //     label: "Mobile",
                //     placeholder: "Mobile",
                //     type: "number",
                //     value: formControls.MobileNo,
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //             message: "Mobile is required"
                //         }
                //         , {
                //             name: "pattern",
                //             message: "Please enter 10 digit mobile number",
                //             pattern: '^((\\+91-?)|0)?[0-9]{10}$',
                //         }
                //     ]
                // },
                // {
                //     name: "ROLEID",
                //     label: "User Role",
                //     placeholder: "User Role",
                //     type: "dropdown",
                //     value: "",
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //         }
                //         , {
                //             name: "autocomplete",
                //         },
                //         {
                //             name: "invalidAutocompleteObject",
                //             message: "Choose proper value",
                //         }
                //     ],
                //     functions: {

                //     },
                //     additionalData: {
                //         isIndeterminate: false,
                //         isChecked: false,
                //     }
                // },
                // {
                //     name: "LocationcontrolHandler",
                //     label: "Location",
                //     placeholder: "Location",
                //     type: "multiselect",
                //     value: "",
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //         }
                //         , {
                //             name: "invalidAutocompleteObject",
                //             message: "Choose proper value",
                //         }
                //         , {
                //             name: "autocomplete",
                //         }
                //     ],
                //     functions: {
                //         onToggleAll: 'toggleSelectAll'
                //     },
                //     additionalData: {
                //         showNameAndValue: true,
                //         isIndeterminate: false,
                //         isChecked: false,
                //         support: "Location",
                //     }
                // },
                // {
                //     name: 'StartDateRange', label: 'DateRangeDetails', placeholder: 'DateRange Details', type: 'daterangpicker', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                //     generatecontrol: true, disable: false, Validations: [],
                //     additionalData: {
                //         support: "EndDateRange",
                //     }
                // },
                // {
                //     name: 'meetingtime', label: 'Meeting Time', placeholder: 'Birth Date', type: 'time', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                //     generatecontrol: true, disable: false, Validations: [],
                //     additionalData: {
                //         maxDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
                //         minDate: new Date("01 Jan 1900")
                //     }
                // },
                {
                    name: 'ActiveFlag', label: 'Active Flag', placeholder: '', type: 'toggle', value: "", generatecontrol: true, disable: false,
                    Validations: []
                },

                //   ---------------Add support Controllers at last -----------------------
                {
                    name: "Location", label: "", placeholder: "Multi Locations Access", type: "", value: "", filterOptions: "", autocomplete: "", generatecontrol: false, disable: true, Validations: [
                        {
                            name: 'required',
                        }
                    ]
                },
                {
                    name: "Designation", label: "", placeholder: "Multi Locations Access", type: "", value: "", filterOptions: "", autocomplete: "", generatecontrol: false, disable: true,
                    Validations: [
                        {
                            name: "required",
                        }

                    ],

                },
                {
                    name: "EndDateRange", label: "", placeholder: "end Date", type: "", value: "", filterOptions: "", autocomplete: "", generatecontrol: false, disable: true,
                    Validations: [
                        {
                            name: "",
                        }

                    ],

                },


            ]

    }

    getFormControls() {
        return this.exampleFormFields;
    }

}