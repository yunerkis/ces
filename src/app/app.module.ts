import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormDoctorComponent } from './form-doctor/form-doctor.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { MaterialModule } from './material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { TurnerComponent } from './turner/turner.component';
import { TurnComponent } from './turn/turn.component';
import { ModalTurnComponent } from './modal-turn/modal-turn.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    ListComponent,
    AppointmentComponent,
    ModalComponent,
    RecoveryComponent,
    HomeAdminComponent,
    ScheduleComponent,
    ModalViewComponent,
    DoctorScheduleComponent,
    FormDoctorComponent,
    UploadResultComponent,
    TurnerComponent,
    TurnComponent,
    ModalTurnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
