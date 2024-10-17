import { Component, inject } from '@angular/core';
import { Employee } from '../../../models/employees.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from '../../../service/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
addEmployeeRequest: Employee ={
  id:'',
  name:'',
  email:'',
  phone:'',
  salary:0,
  department:''
};

employservice=inject(EmployeesService)
  toasterService: any;
  router=inject(Router);

addEmployee(){
  console.log(this.addEmployeeRequest)
  this.employservice.addEmployees(this.addEmployeeRequest).subscribe(result=>{
    this.router.navigateByUrl("employees")
  })
}
}
