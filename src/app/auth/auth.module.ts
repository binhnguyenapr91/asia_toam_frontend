import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthboardComponent } from './authboard/authboard.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [AuthboardComponent, SignupComponent, SigninComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRadioModule,
        MatDatepickerModule,
        FlexLayoutModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        FormsModule
    ]
})
export class AuthModule { }
