import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../services/job.service';
import { JobModel } from '../models/job.model';
import { CustomerModel } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  private jobId: number;
  private customerId: number;

  public job: JobModel;
  public customer: CustomerModel;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService, private customerService: CustomerService) {
      this.jobId = route.snapshot.params.id;
      this.customerId = route.snapshot.params.cid;
    }

  ngOnInit() {
    this.jobService.GetJob(this.jobId).subscribe(job => this.job = job);
    this.customerService.GetCustomer(this.customerId).subscribe(customer => this.customer = customer);
  }

}
