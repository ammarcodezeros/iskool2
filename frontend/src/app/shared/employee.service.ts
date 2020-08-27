import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  private _baseURL = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this._baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this._baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this._baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this._baseURL + `/${_id}`);
  }
}
