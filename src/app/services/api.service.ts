import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:4500';

  constructor(private http: HttpClient) {}

  // Fetch available services
  getServices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/services`);
  }

  // Fetch projects
  getProjects(): Observable<any> {
    return this.http.get(`${this.apiUrl}/projects`);
  }

  // Submit enquiry form data
  addEnquiryData(enquiryData: { name: string; email: string; serviceType: string; message: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/enquiries`, enquiryData);
  }
  getEnquiries():Observable<any>{
    return this.http.get('http://localhost:4500/enquiries');
  }
}
