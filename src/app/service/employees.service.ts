import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../models/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  httpClient=inject(HttpClient)
  constructor() { }
  getEmployees(){
    return this.httpClient.get<Employee[]>("https://localhost:7268/api/Employees");
  }
}
