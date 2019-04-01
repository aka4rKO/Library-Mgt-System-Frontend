import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReaderService } from 'src/app/services/reader.service';
import { Reader } from 'src/app/models/reader.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reader',
  templateUrl: './add-reader.component.html',
  styleUrls: ['./add-reader.component.css']
})
export class AddReaderComponent implements OnInit {
  readerForm: FormGroup;
  readerIdVal: string = this.generateReaderId;

  constructor(private readerService: ReaderService, private router: Router) {
    
  }

  ngOnInit() {
    this.readerIdVal = this.generateReaderId;
    this.readerForm = new FormGroup({
      'readerId': new FormControl({value: null,disabled: true}, [Validators.required]),
      'name': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z a-z]+$/)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{10}$/)])
    });
  }

  onAddReader() {
    let readerId = this.readerForm.get('readerId').valid;
    let name = this.readerForm.get('name').valid;
    let email = this.readerForm.get('email').valid;
    let phoneNumber = this.readerForm.get('phoneNumber').valid;
    
    if(name && email && phoneNumber){
      
      let readerIdVal = this.readerForm.get('readerId').value;
      let nameVal = this.readerForm.get('name').value;
      let emailVal = this.readerForm.get('email').value;
      let phoneNumberVal = this.readerForm.get('phoneNumber').value;
      let reader = new Reader(nameVal, readerIdVal, emailVal, phoneNumberVal);
      console.log(reader);
      this.readerService.addReader(reader)
        .subscribe(
          (response) => {
            console.log(response);
            console.log(this.readerForm);
            console.log("Reader added successfully!");
            this.router.navigate(['/manager/books']);
          }
        );
    }
    
  }

  get generateReaderId() : string{
    let readerId : string;
    this.readerService.getReaderId()
      .subscribe(
        (response: any) => {
          console.log(response);
          this.readerForm.patchValue({readerId:response});
        }
      );
    return readerId;
  }

}
