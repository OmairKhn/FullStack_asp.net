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

  addEmployees(addEmployeeRequest: Employee) {
    // Ensure the ID is set to an empty GUID before sending
    addEmployeeRequest.id = "00000000-0000-0000-0000-000000000000";
    
    return this.httpClient.post<Employee[]>("https://localhost:7268/api/Employees", addEmployeeRequest);
  }
  getEmployeeByid(id:number){
    return this.httpClient.get<Employee>("https://localhost:7268/api/Employees/"+id);
  }
}
