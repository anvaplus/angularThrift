import {Component} from '@angular/core'

@Component({
    selector : 'my-employee',
    templateUrl : './employee.component.html',
    styleUrls: ['./employee.component.css']
})


export class EmployeeComponent{
    firstName : string = 'Valentino';
    lastName : string = 'Rossi';
    gender : string= 'Male';
    age : number = 40;

    getFullName(): string{
        return this.firstName + ' ' + this.lastName; 
    }
}