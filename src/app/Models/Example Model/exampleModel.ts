export class exampleFormControls{
    Empcode:string;
    Name:string;
    Department:string;   
    Designation:string;
    JoiningDate:string;
    State:string;
    City:string;
    // UserId:string;
    // Password:string;
    // MobileNo:string;
    // EmailId:string;
    // Location:string
    // ActiveFlag:string;
    // UserRole:string;
    constructor(formControl) {
        this.Empcode = formControl.Empcode || ''
        this.Name = formControl.Name || ''
        this.Department = formControl.Department || ''
        this.Designation = formControl.Designation || ''
        this.JoiningDate = formControl.JoiningDate || ''
        this.State = formControl.State || ''
        this.City = formControl.City || ''
        // this.UserId = formControl.UserId || ''
        // this.Password = formControl.Password || ''
        // this.MobileNo = formControl.mobileno || ''
        // this.EmailId = formControl.EmailId || ''
        // this.Location = formControl.Location || ''
        // this.ActiveFlag = formControl.ActiveFlag || ''
    }
}