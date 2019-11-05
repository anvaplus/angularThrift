import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})


export class EmployeeComponent {
    firstName: string = 'Valentino';
    lastName: string = 'Rossi';
    gender: string = 'Male';
    age = 40;

    isDisabled: boolean = false;

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    onClickForward(): void {

        if(this.age == 90){
            return;
        }
        this.age =+ this.age + 1
    }

    onClickBackward(): void {

        if(this.age == 10){
            return;
        }
        this.age =+ this.age - 1
    }

}