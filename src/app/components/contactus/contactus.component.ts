import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { EmailApiService } from 'src/app/auth/email-api.service';
import { ScrollpageService } from 'src/app/services/scrollpage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formControls!: ElementRef[];
  userForm: FormGroup;
  private validationMessages: {
    [key: string]: { [key: string]: string | { [key: string]: string } };
  };
  isLoading = false;
  message: { [key: string]: string } = {};
  typeSelected: string;

  constructor(
    private scrollservice: ScrollpageService,
    private fb: FormBuilder,
    private emailapiservice: EmailApiService,
    private toastrService: ToastrService
  ) {
    this.typeSelected = 'ball-fussion';
    this.validationMessages = {
      firstName: {
        required: 'Please enter your first name',
      },
      lastName: {
        required: 'Please enter your last name',
      },
      email: {
        required: 'Please enter your Email',
        email: 'Please enter a valid email',
      },
      phone: {
        required: 'Please enter your phone number',
      },
      subject: {
        required: 'Please enter your subject',
      },
      descmessage: {
        required: 'Please enter your message',
      },
    };
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      descmessage: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.scrollservice.scrollPagetoTop();
  }

  register() {
    this.isLoading = true;
    let { value } = this.userForm;
    this.emailapiservice
      .sendEmail('http://localhost:3000/sendmail', value)
      .subscribe(
        (data) => {
          let res: any = data;
          console.log(
            `👏 > 👏 > 👏 > 👏 ${value.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
          );
          this.toastrService.success(
            'Email Sent',
            'Please check your mail for further details'
          );
          this.resetForm();
        },
        (err) => {
          console.log(err);
          this.toastrService.error(
            'Email Sent Error!',
            'Some Internal error occured'
          );
          this.resetForm();
          this.isLoading = false;
        },
        () => {
          this.resetForm();
          this.isLoading = false;
        }
      );
  }

  resetForm() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      descmessage: ['', Validators.required],
    });
    this.isLoading = false;
  }

  ngAfterViewInit(): void {
    const addBlurs: Observable<any>[] = this.formControls.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur')
    );
    merge(this.userForm.valueChanges, ...addBlurs)
      .pipe(debounceTime(500))
      .subscribe((value) => {
        this.message = this.invalidInputs(this.userForm);
      });
  }
  invalidInputs(formgroup: FormGroup): { [key: string]: string } {
    let messages: any = {};
    for (const input in formgroup.controls) {
      const key = formgroup.controls[input];
      if (key instanceof FormGroup) {
        const nestedGroupMessages = this.invalidInputs(key);
        Object.assign(messages, nestedGroupMessages);
      } else {
        if (this.validationMessages[input]) {
          messages[input] = '';
          if (key.errors && (key.dirty || key.touched)) {
            Object.keys(key.errors).map((messageKey) => {
              if (this.validationMessages[input][messageKey]) {
                messages[input] = this.validationMessages[input][messageKey];
              }
            });
          }
        }
      }
    }
    return messages;
  }
}
