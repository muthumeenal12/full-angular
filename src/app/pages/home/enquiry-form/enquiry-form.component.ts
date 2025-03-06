import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css'], // Fixed typo
})
export class EnquiryFormComponent {
  enquiryData = {
    name: '',
    email: '',
    serviceType: '',
    message: '',
    errors: [] as string[],
  };

  services: string[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getServices().subscribe(
      (data) => {
        this.services = data.map((service: any) => service.title);
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }

  submitForm() {
    this.enquiryData.errors = [];
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!this.enquiryData.name || this.enquiryData.name.length < 3) {
      this.enquiryData.errors.push('Name should be at least 3 characters long');
    }
    if (!this.enquiryData.email || !emailPattern.test(this.enquiryData.email)) {
      this.enquiryData.errors.push('Please enter a valid email address');
    }
    if (!this.enquiryData.serviceType) {
      this.enquiryData.errors.push('Please select a service type');
    }
    if (!this.enquiryData.message || this.enquiryData.message.length < 10) {
      this.enquiryData.errors.push(
        'Message should be at least 10 characters long'
      );
    }

    if (this.enquiryData.errors.length === 0) {
      this.apiService.addEnquiryData(this.enquiryData).subscribe({
        next: (response) => {
          console.log('Enquiry Submitted:', response);
          alert('Enquiry Submitted Successfully');
          this.resetForm();
        },
        error: (error) => {
          console.error('Submission Error:', error);
          alert('Something went wrong. Please try again.');
        },
      });
    }
  }

  resetForm() {
    this.enquiryData = {
      name: '',
      email: '',
      serviceType: '',
      message: '',
      errors: [],
    };
  }
}
