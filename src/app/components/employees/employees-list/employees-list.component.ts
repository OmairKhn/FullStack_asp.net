import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../../../models/employees.model';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../../service/employees.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit  {
employees: Employee[] = [];
employservice=inject(EmployeesService)

constructor() {}
ngOnInit(){
  this.employservice.getEmployees().subscribe((result)=>{
    console.log(result);
   this.employees=result;
  })
}
}
