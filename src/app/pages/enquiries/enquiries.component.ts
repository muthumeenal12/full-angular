import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { enquiry } from '../../model/enquiry';
import { service } from '../../model/service';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.css'
})
export class EnquiriesComponent {
enquirylist:enquiry[] = [];
selected : string='All';
serviceTypes: string[] = [
  'All',
 'Branding and Communication',
 'Inbound & Content Marketing',
 'Film & Webinar',
 'Digital Marketing',
 'ECommerce & Websites',
 'Market Analysis'
 ];
constructor(private api: ApiService){

}

ngOnInit(){
  this.api.getEnquiries().subscribe({
    next: (response:enquiry[]) =>
    {
      this.enquirylist = response;
    },
    error: (error) =>{
      console.log("Error while fetching enquiries ",error);
    }
  })
 
}
}
