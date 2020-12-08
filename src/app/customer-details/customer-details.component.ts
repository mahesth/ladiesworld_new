import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerDetailsComponent implements OnInit {
  
  private SubmitUrl = `https://aswathsudhar.github.io/ladiesworld/src/parra.php`;
  customerData = { names: '', number: '', address: '', comments: '' };
  CustomerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.CustomerForm = this.fb.group({
      names: ['', [Validators.required]],
      number: ['', [Validators.required]],
      address: ['', [Validators.required]],
      comments: ['', [Validators.required]]
    });
  }

  get f() {
    return this.CustomerForm.controls;
  }

  submit() {
    this.submitted = true
    if (this.CustomerForm.invalid) {
      return;
    }
    const formData = new FormData();
    formData.append('names', this.customerData.names);
    formData.append('number', this.customerData.number);
    formData.append('address', this.customerData.address);
    formData.append('comments', this.customerData.comments);

    this.http.post<any>(this.SubmitUrl, formData).subscribe(
      res => {
        Swal.fire({
          type: 'success',
          title: 'Thank you for posting your details. Our Tailor shall get in touch with you soon',
          showConfirmButton: false,
          timer: 7000,
        })
        this.router.navigate(['AdsEnglish']),
          res
      },
      err => {
        console.log(err)
      }
    );
  }
  numberOnly(event): boolean {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57))
      return false;

    return true;

  }
}


