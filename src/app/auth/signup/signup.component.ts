import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder, FormControl,
  FormGroup, FormGroupDirective, NgForm, ValidationErrors,
  Validators
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {regex} from '../../../assets/regex';
import {IAccount} from '../../models/IAccount';
import {AuthService} from '../../services/auth.service';
import {Observer} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!((control && control.touched && control.invalid));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  matcher: ErrorStateMatcher;
  signUpForm: FormGroup;
  formObserver: Observer<any> = {
    next: () => {
      this.snackBar.open('Registration successfull!', '', {
        duration: 2500
      });
      this.signUpForm.reset();
    },
    error: () => {
      this.snackBar.open('Registration fail!', '', {
        duration: 2500
      });
    },
    complete: () => {
    }
  };

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private snackBar: MatSnackBar) {
    this.matcher = new MyErrorStateMatcher();
  }

  private static toUserRegistered(signUpForm: FormGroup): IAccount {
    return {
      username: signUpForm.get('username').value,
      password: signUpForm.get('pwGroup').get('password').value,
      confirm_password: signUpForm.get('pwGroup').get('confirmPassword').value,
      email: signUpForm.get('email').value,
      role: [signUpForm.get('role').value],
    };
  }

  private static comparePassword(c: AbstractControl): ValidationErrors | null {
    const v = c.value;
    return (v.password === v.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group(
      {
        username: ['', [Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern(regex.shortNameRegex)]],
        email: ['', [Validators.required, Validators.email]],
        pwGroup: this.formBuilder.group({
          password: ['', [Validators.required,
            Validators.minLength(6),
            Validators.maxLength(32)]],
          confirmPassword: [''],
        }, {validators: SignupComponent.comparePassword}),
        role: ['']
      }
    );
  }

  onSubmitSignUp(): void {
    console.log(this.signUpForm.value);
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.valid) {
      const userRegistered = SignupComponent.toUserRegistered(this.signUpForm);
      this.authService.register(userRegistered).subscribe(this.formObserver);
    }
  }
}
