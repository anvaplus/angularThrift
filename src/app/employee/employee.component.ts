import {Component} from '@angular/core'

@Component({
    selector : 'my-employee',
    templateUrl : './employee.component.html',
    styleUrls: ['./employee.component.css']
})


export class EmployeeComponent{
    firstName = 'Valentino';
    lastName = 'Rossi';
    gender = 'Male';
    age = '40';
}