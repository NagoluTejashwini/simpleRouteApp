import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { CameraComponent } from './camera/camera.component';
import { CartComponent } from './cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { MobilePhoneComponent } from './mobile-phone/mobile-phone.component';

const appRoutes:Routes=[

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'laptop',component : LaptopComponent},
  {path:'camera',component : CameraComponent},
  {path:'mobilephone',component : MobilePhoneComponent},
  {path:'cart',component : CartComponent},
  {path:'login',component : LoginComponent},
  {path:'admin',component : AdminComponent},
  {path:'**',component : ErrorPageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CameraComponent,
    CartComponent,
    ErrorPageComponent,
    LaptopComponent,
    LoginComponent,
    MobilePhoneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
