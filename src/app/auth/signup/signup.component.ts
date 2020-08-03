import {Component, OnInit} from '@angular/core';
import {
  FormBuilder, FormControl,
  FormGroup
} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  signUpForm = new FormGroup({
    username: new FormControl()
  });
  constructor(private formBuilder: FormBuilder,
              private route: Router) {
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
