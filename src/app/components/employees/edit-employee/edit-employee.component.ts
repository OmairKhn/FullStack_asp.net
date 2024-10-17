import { Component, inject } from '@angular/core';
import { Employee } from '../../../models/employees.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../../service/employees.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent {

  activatedRoute = inject(ActivatedRoute);
  employservice=inject(EmployeesService)

  editEmployeeRequest: Employee ={
    id:'',
    name:'',
    email:'',
    phone:'',
    salary:0,
    department:''
  };
  ngOnInit() {
    const productId = this.activatedRoute.snapshot.params['id'];
    console.log(productId);
    this.employservice.getEmployeeByid(productId).subscribe(result => {
      this.editEmployeeRequest=result;
      // Initial discount calculation
    });
}
}
