import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AuthService } from './services/auth.service';
import { FormDoctorComponent } from './form-doctor/form-doctor.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { TurnerComponent } from './turner/turner.component';
import { TurnComponent } from './turn/turn.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'list', component: ListComponent, canActivate: [AuthService] },
  { path: 'admin', component: AdminComponent },
  { path: 'recovery', component: RecoveryComponent },
  { path: 'home', component: HomeAdminComponent, canActivate: [AuthService] },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthService] },
  { path: 'doctor-schedule', component: DoctorScheduleComponent, canActivate: [AuthService] },
  { path: 'doctor-schedule/:id', component: DoctorScheduleComponent, canActivate: [AuthService] },
  { path: 'create/user/doctor', component: FormDoctorComponent, canActivate: [AuthService] },
  { path: 'upload', component: UploadResultComponent, canActivate: [AuthService] },
  { path: 'turner', component: TurnerComponent},
  { path: 'turn', component: TurnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
