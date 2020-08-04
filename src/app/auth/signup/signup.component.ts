import {Component, OnInit} from '@angular/core';
import {
  FormBuilder, FormControl,
  FormGroup
} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        username: ['', ],
        password: ['', ],
        email: ['', ],
        pwGroup: this.formBuilder.group({
          password: [''],
          confirmPassword: [''],
        }),
      }
    );
  }

  onSubmitSignUp(): void {
  }
}
