import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from '../app/_helpers/fake-backend';

import { AppRoutingModule } from '../app/app.routing.module';
import { JwtInterceptor } from '../app/_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../app/_helpers/error.interceptor';
import { AppComponent } from './app.component';
import { AlertComponent } from '../app/_components/alert/alert.component';
import { HomeComponent } from '../app/home/home.component';
import { Classroom } from './classroom/classroom';
import { TaskComponent } from './task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    Classroom,
    TaskComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };
