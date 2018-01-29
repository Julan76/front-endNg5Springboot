import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MyOwnCustomMaterialModuleModule} from './my-own-custom-material-module.module';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,MyOwnCustomMaterialModuleModule,FormsModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

