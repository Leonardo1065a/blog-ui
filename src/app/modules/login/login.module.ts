import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/Material/checkbox';
import { RegisterComponent } from './register/register.component'



const MATERIAL = [MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule];

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ...MATERIAL   
  ]
})
export class LoginModule { }
